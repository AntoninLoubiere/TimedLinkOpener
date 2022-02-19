import type { RequestEvent } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(event: RequestEvent) {
    return {
        locales: event.request.headers.get('Accept-Language')?.split(';')?.[0]?.split(','),
    };
}
