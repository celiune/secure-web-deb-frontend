/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		user: locals.user && {
			username: locals.user.username,
			role: locals.user.role
		}
	};
}