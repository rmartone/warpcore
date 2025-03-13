/**
 * Parses a locale string into an object containing language and region.
 * - Ensures `lang` is always lowercase.
 * - Ensures `region` is always uppercase.
 * - Defaults to `{ lang: 'en', region: 'US' }` if the input is invalid.
 *
 * @param {string} locale - A locale string (e.g., "en-US", "fr_FR", "zh-Hans-CN").
 * @returns {{ lang: string; region: string }} An object with `lang` and `region`.
 */
export const parseLocale = (locale: string): { lang: string; region: string } => {
  if (typeof locale !== 'string' || !locale.trim()) return { lang: 'en', region: 'US' };

  const normalized = locale.trim().replace(/_/g, '-');
  const regex = /^([a-z]{2,3})(?:[- ]([A-Z]{2}|[a-z]{4,}))?$/i;
  const result = regex.exec(normalized);

  return result
    ? { lang: result[1].toLowerCase(), region: result[2] ? result[2].toUpperCase() : 'US' }
    : { lang: 'en', region: 'US' };
};
