import { error } from '@sveltejs/kit';

const base = 'http://localhost:3000';


async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };
	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}
	try {
		const res = await fetch(`${base}/${path}`, opts);
		if (res.status === 200 || res.status === 201) {
			const result = await res.text();
			return result
				? { ok: true, result: JSON.parse(result) }
				: { ok: true, result: {} };
		}
		const result = await res.text();
		return { ok: false, result };
	} catch (err) {
		return { ok: false, result: 'Server error' };
	}
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function patch(path, data, token) {
	return send({ method: 'PATCH', path, data, token });
}