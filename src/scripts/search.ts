import { navigate } from 'astro:transitions/client';

type Item = { type: 'post' | 'skill' | 'page'; title: string; description: string; url: string; meta: string; keywords: string };

let index: Item[] | null = null;
let loading: Promise<Item[]> | null = null;

const load = () =>
  (loading ??= fetch('/search.json')
    .then((r) => r.json() as Promise<Item[]>)
    .then((d) => (index = d)));

function score(item: Item, q: string): number {
  const t = item.title.toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  let s = 0;
  for (const term of terms) {
    if (t.startsWith(term)) s += 12;
    else if (t.includes(term)) s += 8;
    else if (item.keywords.includes(term)) s += 4;
    else if (item.description.toLowerCase().includes(term)) s += 2;
    else return 0;
  }
  return s;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

type Api = { open: () => void; close: () => void; isOpen: () => boolean };
const apis = new WeakMap<HTMLDialogElement, Api>();

/** Bind the dialog on the current page (once per element). */
function bind(): Api | undefined {
  const dialog = document.querySelector<HTMLDialogElement>('dialog[data-search]');
  if (!dialog) return;
  const existing = apis.get(dialog);
  if (existing) return existing;
  const input = dialog.querySelector<HTMLInputElement>('input')!;
  const list = dialog.querySelector<HTMLUListElement>('[data-results]')!;
  let active = 0;
  let results: Item[] = [];
  const render = () => {
    const q = input.value.trim().toLowerCase();
    const all = index ?? [];
    results = q
      ? all.map((i) => [i, score(i, q)] as const).filter(([, s]) => s > 0).sort((a, b) => b[1] - a[1]).map(([i]) => i).slice(0, 8)
      : all.filter((i) => i.type !== 'page').slice(0, 6);
    active = Math.min(active, Math.max(0, results.length - 1));
    if (!results.length) {
      list.innerHTML = `<li class="px-4 py-10 text-center text-sm text-muted"><span class="hand text-2xl block mb-1">Nothing here.</span>Not even a dead PRD.</li>`;
      return;
    }
    list.innerHTML = results
      .map(
        (r, i) => `<li role="option" id="sr-${i}" aria-selected="${i === active}">
          <a href="${r.url}" data-i="${i}" class="flex items-start gap-3 rounded-xl px-3 py-2.5 aria-selected:bg-paper-2 ${i === active ? 'bg-paper-2' : ''}">
            <span class="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg border border-line bg-card text-sm">${r.type === 'post' ? '✎' : r.type === 'skill' ? '✦' : '→'}</span>
            <span class="min-w-0">
              <span class="block truncate font-medium text-ink">${esc(r.title)}</span>
              <span class="block truncate text-sm text-muted">${esc(r.meta)} · ${esc(r.description)}</span>
            </span>
          </a></li>`,
      )
      .join('');
    input.setAttribute('aria-activedescendant', `sr-${active}`);
  };

  const open = async () => {
    if (dialog.open) return;
    dialog.showModal();
    input.value = '';
    active = 0;
    render();
    await load();
    render();
  };
  const close = () => dialog.close();

  input.addEventListener('input', () => { active = 0; render(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); active = (active + 1) % Math.max(1, results.length); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = (active - 1 + results.length) % Math.max(1, results.length); render(); }
    else if (e.key === 'Enter' && results[active]) { e.preventDefault(); close(); navigate(results[active].url); }
  });
  list.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a');
    if (a) { e.preventDefault(); close(); navigate(a.getAttribute('href')!); }
  });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });

  const api: Api = { open, close, isOpen: () => dialog.open };
  apis.set(dialog, api);
  return api;
}

// Global listeners: registered exactly once; always act on the current page's dialog.
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest?.('[data-search-open]')) {
    e.preventDefault();
    bind()?.open();
  }
});
document.addEventListener('keydown', (e) => {
  const typing = (e.target as HTMLElement).closest?.('input,textarea,[contenteditable]');
  if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
    const api = bind();
    if (!api) return;
    e.preventDefault();
    api.isOpen() ? api.close() : api.open();
  }
});
// Warm the index on first intent
document.addEventListener('pointerover', (e) => {
  if ((e.target as HTMLElement).closest?.('[data-search-open]')) load();
});
document.addEventListener('astro:page-load', () => { bind(); });
