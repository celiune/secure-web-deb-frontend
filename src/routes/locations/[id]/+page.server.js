import { fail,redirect } from '@sveltejs/kit';
import * as api from '$lib/api';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params}) {
    if (!locals.user) throw redirect(307, '/login');

    const body = await api.get(`locations/${params.id}`,locals.user.jwt);
    let location =  body.result

    if (!body) {
        return fail(401, { missing:true, error: 'Location not gotten' });
    }
    else {
        return { location};
    }
}

export const actions = {
	edit: async ({ params,locals, request }) => {
		if (locals?.user?.role !== 'admin') throw redirect(307, '/locations');
		const data = await request.formData();
		const filmType = data.get('filmType');
		const filmProducerName = data.get('filmProducerName');
		const endDate = data.get('endDate');
		const filmName = data.get('filmName');
		const district = data.get('district');
		const geolocation1 = data.get('geolocation1');
		const geolocation2 = data.get('geolocation2');
		const sourceLocationId = data.get('sourceLocationId');
		const filmDirectorName = data.get('filmDirectorName');
		const address = data.get('address');
		const startDate = data.get('startDate');
		const year = data.get('year');

        const geolocation = {"coordinates":[geolocation1,geolocation2]}

		let body = await api.patch(`locations/${params.id}`, {
			filmType,
			filmProducerName,
			endDate,
			filmName,
			district,
			geolocation,
			sourceLocationId,
			filmDirectorName,
			address,
			startDate,
			year
		}, locals.user.jwt);

		console.log(body)

		if (!body) {
			return fail(401, { incorrect: true, error: 'Edition of film failed, please try again' });
        }
		else {
			if (body.ok) {throw redirect(307,`${params.id}`)}
			return { success: true, ...body.result};
		}
	},

    delete: async ({params, locals}) => {
		if (locals?.user?.role !== 'admin') throw redirect(307, '/locations');
        const response = await api.del(`locations/${params.id}`, locals.user.jwt);
		if (response.ok) throw redirect(307, '/locations');
		return response.result
    }
}