<script context="module" lang="ts">
    import { browser } from '$app/env';
    import { initializeTranslations } from '$lib/translations';

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ url, session }) {
        const locales: string[] = session?.locales ?? (browser && navigator.languages) ?? [];
        await initializeTranslations(url.pathname, locales);
        return {};
    }
</script>

<script>
    import '../app.css';
</script>

<slot />
