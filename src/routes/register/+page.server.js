import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';
const bcrypt = require('bcrypt')


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');

        if (!username) {
            return fail(400, { username: 'Missing', error: 'Username is required' });
        }

        if (!password) {
            return fail(400, { password: 'Missing', error: 'Password is required' });
        }

        if (!confirmPassword) {
            return fail(400, { confirmPassword: 'Missing', error: 'Confirm password is required' });
        }

        if (password !== confirmPassword) {
            return fail(400, { password: 'Mismatch', error: 'Passwords do not match' });
        }

        const hashedPassword = bcrypt.hash(password,10);
        const body = await api.post('users/register', { username, hashedPassword });

        if (body.errors) {
            return fail(401, body);
        }

        else {
            const value = body.result.jwt
            cookies.set('jwt', value, { path: '/' });
            return { success: true };
        }
    }
};
