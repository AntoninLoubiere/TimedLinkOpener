import i18n, { type Config } from 'sveltekit-i18n';
import { config } from 'svelty-picker';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';

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

export { dayjs };

export const i18nConfig: Config = createConfig();
export const { t, locale, locales, loading, loadTranslations } = new i18n(i18nConfig);

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

export async function initializeTranslations(pathname: string, locales: string[]) {
    const initLocale = locale.get() || getMatchLocale(locales);
    dayjs.locale('fr');

    await Promise.all([
        loadTranslations(initLocale, pathname),
        import(`./locales/dates/${initLocale}.json`).then((data) => (config.i18n = data.default)),
    ]);
}
