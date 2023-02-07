import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ cookies, locals }) => {
		if (!locals.user) throw new Error(401, '/');
		cookies.delete('jwt');
		locals.user = null;
		return { success: true, redirect: 307, location: '/' }		
	}
}
