import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request, locals }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username) { 
            return fail ( 400, { missing:true, error: 'Username is required' });
        }
          
        if (!password) {
            return fail ( 400, { missing:true, error: 'Password is required' });
        }

		const body = await api.post('users/login', {username,password});

        if (!body.ok) {
            return fail(401, { incorrect:true, error: 'Login failed, please try again' });
        }
		else {
			const value = body.result.jwt
			cookies.set('jwt', value, { path: '/' });
			locals.user = body.result
			return { success: true, ...body, username};
		}
	},

};
