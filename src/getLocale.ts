import { once } from './once';

/**
 * Normalizes locale strings to the format 'xx-XX'.
 * @param {string[]} arr - Array of locale strings.
 * @returns {string[]} Normalized locale strings.
 */
function normalizeLocales(arr: string[]): string[] {
  return arr.map(el => {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    const [language, region] = el.split('-');
    return `${language}-${region.toUpperCase()}`;
  });
}

/**
 * Retrieves the user's locale preferences from the browser.
 * @returns {string[]} Array of user locale strings.
 */
function getUserLocalesInternal(): string[] {
  let languageList: string[] = [];

  if (typeof window !== 'undefined') {
    const { navigator } = window;

    if (navigator.languages) {
      languageList = languageList.concat(navigator.languages);
    }
    if (navigator.language) {
      languageList.push(navigator.language);
    }
  }

  return normalizeLocales(languageList);
}

export const getLocales = once(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getLocales()[0];
}

export const getLocale = once(getUserLocaleInternal);
