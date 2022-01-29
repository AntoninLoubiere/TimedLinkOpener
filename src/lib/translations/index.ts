import i18n, { type Config } from 'sveltekit-i18n';

const LOCALES = ['en', 'fr'];
const DEFAULT_LOCALE = 'en';

function createConfig(): Config {
    const loaders = [];

    for (const locale of LOCALES) {
        loaders.push({
            locale,
            key: '',
            loader: async () => (await import(`./locales/${locale}.json`)).default,
        });
    }

    return { loaders };
}

export const config: Config = createConfig();
export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

function doLocaleMatch(userLocale: string) {
    for (const appLocale of LOCALES) {
        if (
            userLocale == appLocale ||
            userLocale == appLocale.split('-')[0] ||
            userLocale.split('-')[0] == appLocale ||
            userLocale.split('-')[0] == appLocale.split('-')[0]
        ) {
            return appLocale;
        }
    }
    return false;
}

function getMatchLocale(locales: string[]) {
    for (const userLocale of locales || []) {
        const loc = doLocaleMatch(userLocale);
        if (loc) return loc;
    }
    return DEFAULT_LOCALE;
}

export function initializeTranslations(pathname: string, locales: string[]) {
    const initLocale = locale.get() || getMatchLocale(locales);
    return loadTranslations(initLocale, pathname);
}
