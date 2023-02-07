import * as api from '$lib/api';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	if (!jwt) return resolve(event);
	const body = await api.get('users/me', jwt);
	event.locals.user = body.ok ? { jwt, ...body.result } : null;
	return resolve(event);
}