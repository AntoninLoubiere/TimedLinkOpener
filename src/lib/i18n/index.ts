import { _, isLoading, register, init, getLocaleFromNavigator } from 'svelte-i18n';
import { derived } from 'svelte/store';
register('en', () => import('../../translations/en.json'));
register('fr', () => import('../../translations/fr.json'));

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});

export const t = derived([_, isLoading], ([formatter, loading]) => {
    return loading ? (key: string) => key : formatter;
});
