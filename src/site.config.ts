/**
 * Everything brand/identity-related lives here.
 * Empty strings hide the corresponding link/feature.
 */
export const SITE = {
  url: 'https://productisdead.com',
  name: 'productisdead',
  title: 'productisdead — Not dead yet.',
  tagline: 'Not dead yet.',
  description:
    'AI was supposed to kill product management. Essays arguing it did the opposite, plus a free hub of AI skills for the product people who refused to die.',
  author: {
    name: 'Tal',
    email: 'productisdead@gmail.com',
  },
  locale: 'en-US',
  socials: {
    x: '',
    linkedin: '',
    github: '',
    youtube: '',
  },
  /**
   * Newsletter form. Point `action` at any provider that accepts a plain
   * form POST with an `email` field (Buttondown, ConvertKit, Beehiiv embed…).
   * Leave empty to fall back to an RSS call-to-action.
   */
  newsletter: {
    action: '',
    fieldName: 'email',
  },
} as const;

export const NAV = [
  { href: '/writing', label: 'Writing' },
  { href: '/skills', label: 'Skills' },
  { href: '/manifesto', label: 'Manifesto' },
] as const;
