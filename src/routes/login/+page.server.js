import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username) { 
            return fail ( 400, { username: 'Missing', error: 'Username is required' });
        }
          
        if (!password) {
            return fail ( 400, { password: 'Missing', error: 'Password is required' });
        }
        
		const body = await api.post('users/login', { username, password });

        if (!body.result) {
            return fail(401, { error: 'Login failed, please try again' });
        }        

		if (body.errors) {
			return fail(401, body);
		}

		else {
			const value = body.result.jwt
			cookies.set('jwt', value, { path: '/' });
			return { success: true };
		}
	},

	register: async (event) => {
		// TODO register the user
	}
};
