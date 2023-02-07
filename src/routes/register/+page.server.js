import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ locals,request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        if (!username) {
            return fail(400, { missing:true, error: 'Username is required' });
        }

        if (!password) {
            return fail(400, { missing:true, error: 'Password is required' });
        }

        if (!confirmPassword) {
            return fail(400, { missing:true, error: 'Confirm password is required' });
        }

        if (password !== confirmPassword) {
            return fail(400, { mismatch:true, error: 'Passwords do not match' });
        }

        let body = await api.post('users/register', { username, password });

        if (!body.ok) {
            return fail(400, {invalidUsername:true, error: 'Username already taken'});
        }

        else {
            body = await api.post('users/login', {username,password});
            const value = body.result.jwt
			cookies.set('jwt', value, { path: '/' });
			locals.user = body.result
            return { success: true, ...body.result };
        }
    }
};
