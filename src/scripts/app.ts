/**
 * Site-wide progressive enhancements. Everything degrades gracefully without JS.
 * Runs on every page load, including client-side navigations (astro:page-load).
 */

let cleanups: Array<() => void> = [];

type PostHogClient = {
  capture: (event: string, properties?: Record<string, string>) => void;
  logger?: {
    info: (message: string, attributes?: Record<string, string>) => void;
  };
};

function getPostHog() {
  return (window as Window & { posthog?: PostHogClient }).posthog;
}

function capture(event: string, properties?: Record<string, string>) {
  getPostHog()?.capture(event, properties);
}

function logPostHog(message: string, attributes?: Record<string, string>) {
  getPostHog()?.logger?.info(message, attributes);
}

function onPage(fn: () => void | (() => void)) {
  document.addEventListener('astro:page-load', () => {
    const c = fn();
    if (c) cleanups.push(c);
  });
}

document.addEventListener('astro:before-swap', () => {
  cleanups.forEach((c) => c());
  cleanups = [];
});

/* ---------- Theme ---------- */
const THEME_KEY = 'pid-theme';
function applyTheme(doc: Document = document) {
  let t: string | null = null;
  try { t = localStorage.getItem(THEME_KEY); } catch {}
  const theme = t ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  doc.documentElement.dataset.theme = theme;
}
document.addEventListener('astro:after-swap', () => applyTheme());

onPage(() => {
  document.documentElement.classList.add('js');
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  const handler = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    const run = () => {
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem(THEME_KEY, next); } catch {}
    };
    // Same-document view transition gives a soft cross-fade between themes
    if ('startViewTransition' in document && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      (document as any).startViewTransition(run);
    } else run();
  };
  buttons.forEach((b) => b.addEventListener('click', handler));
  return () => buttons.forEach((b) => b.removeEventListener('click', handler));
});

/* ---------- Reveal on scroll ---------- */
onPage(() => {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    // threshold 0: a fraction-based threshold can never be met by elements
    // taller than the viewport divided by that fraction (e.g. a long article body).
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
});

/* ---------- Header shadow on scroll + reading progress ---------- */
onPage(() => {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  const article = document.querySelector<HTMLElement>('[data-article]');
  let raf = 0;
  const update = () => {
    raf = 0;
    header?.toggleAttribute('data-scrolled', scrollY > 8);
    if (bar && article) {
      const r = article.getBoundingClientRect();
      const total = r.height - innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.transform = `scaleX(${p})`;
    }
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
  update();
  addEventListener('scroll', onScroll, { passive: true });
  return () => removeEventListener('scroll', onScroll);
});

/* ---------- Table of contents: highlight current section ---------- */
onPage(() => {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-toc] a')];
  if (!links.length) return;
  const map = new Map(links.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
  const headings = [...map.keys()]
    .map((id) => document.getElementById(id))
    .filter((h): h is HTMLElement => !!h);
  const setActive = (id: string) =>
    links.forEach((a) => a.toggleAttribute('data-active', a === map.get(id)));
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: '-15% 0px -70% 0px' },
  );
  headings.forEach((h) => io.observe(h));
  return () => io.disconnect();
});

/* ---------- Copy buttons ---------- */
async function copy(text: string, btn: HTMLElement, done = 'Copied ✓') {
  try {
    await navigator.clipboard.writeText(text);
    const target = btn.querySelector('[data-copy-label]') ?? btn;
    const prev = btn.dataset.label ?? target.textContent ?? '';
    btn.dataset.label = prev;
    target.textContent = done;
    const copySource = btn.dataset.copySource
      ? btn.dataset.copySource
      : btn.classList.contains('copy-code')
      ? 'code_block'
      : btn.dataset.copyFrom === '#skill-raw'
        ? 'skill_file'
        : btn.closest('article')
          ? 'article_link'
          : 'install_command';
    capture('content_copied', { copy_source: copySource });
    logPostHog('content copied', { copy_source: copySource });
    setTimeout(() => (target.textContent = prev.trim()), 1600);
  } catch {
    /* clipboard unavailable — no-op */
  }
}

onPage(() => {
  // Code blocks inside rendered markdown
  document.querySelectorAll<HTMLPreElement>('.prose-pid pre').forEach((pre) => {
    if (pre.querySelector('.copy-code')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'copy-code';
    b.textContent = 'Copy';
    b.addEventListener('click', () => copy(pre.querySelector('code')?.innerText ?? '', b, 'Copied'));
    pre.appendChild(b);
  });

  // Generic [data-copy] buttons: data-copy="literal text" or data-copy-from="#id"
  const onClick = (e: Event) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-copy],[data-copy-from]');
    if (!btn) return;
    const from = btn.dataset.copyFrom;
    const text = from
      ? (document.querySelector<HTMLElement>(from)?.textContent ?? '')
      : (btn.dataset.copy ?? '');
    copy(text, btn);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
});

/* ---------- Newsletter ---------- */
onPage(() => {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-newsletter-form]');
  const onSubmit = () => {
    capture('newsletter_subscription_submitted');
    logPostHog('newsletter submission started');
  };
  forms.forEach((form) => form.addEventListener('submit', onSubmit));
  return () => forms.forEach((form) => form.removeEventListener('submit', onSubmit));
});

/* ---------- Mobile menu ---------- */
onPage(() => {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-button]');
  const panel = document.querySelector<HTMLElement>('[data-menu]');
  if (!btn || !panel) return;
  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    panel.toggleAttribute('data-open', open);
  };
  const toggle = () => set(btn.getAttribute('aria-expanded') !== 'true');
  const onKey = (e: KeyboardEvent) => e.key === 'Escape' && set(false);
  btn.addEventListener('click', toggle);
  addEventListener('keydown', onKey);
  return () => {
    btn.removeEventListener('click', toggle);
    removeEventListener('keydown', onKey);
  };
});
