import "./index.js";
const base = "https://celine-webapp.onrender.com";
async function send({ method, path, data, token }) {
  const opts = { method, headers: {} };
  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }
  if (token) {
    opts.headers["Authorization"] = `Bearer ${token}`;
  }
  try {
    const res = await fetch(`${base}/${path}`, opts);
    if (res.status === 200 || res.status === 201) {
      const result2 = await res.text();
      return result2 ? { ok: true, result: JSON.parse(result2) } : { ok: true, result: {} };
    }
    const result = await res.text();
    return { ok: false, result };
  } catch (err) {
    return { ok: false, result: "Server error" };
  }
}
function get(path, token) {
  return send({ method: "GET", path, token });
}
function del(path, token) {
  return send({ method: "DELETE", path, token });
}
function post(path, data, token) {
  return send({ method: "POST", path, data, token });
}
function patch(path, data, token) {
  return send({ method: "PATCH", path, data, token });
}
export {
  post as a,
  del as d,
  get as g,
  patch as p
};
