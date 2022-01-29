/** @type {import('@sveltejs/kit').GetSession} */
export async function getSession(event) {
    return {
        locales: event.request.headers.get('Accept-Language')?.split(';')?.[0]?.split(','),
    };
}
