import { r as redirect, f as fail } from "../../../chunks/index.js";
import { g as get, d as del } from "../../../chunks/api.js";
async function load({ locals, url }) {
  if (!locals.user)
    throw redirect(307, "/login");
  try {
    const pageIndex = url.searchParams.get("page") ?? "1";
    const index = Math.min(parseInt(pageIndex, 10), 10);
    const page = Math.max(index - 1, 0);
    const body = await get(
      `locations?offset=${page >= 1 ? page * 20 : 0}`,
      locals?.user?.jwt
    );
    let locations = body.result;
    if (!body) {
      return fail(401, { missing: true, error: "Locations not gotten" });
    } else {
      return { locations, index };
    }
  } catch (err) {
    throw fail(404);
  }
}
const actions = {
  delete: async ({ locals, request }) => {
    const data = await request.formData();
    const id = data.get("locationId");
    if (locals?.user?.role !== "admin")
      throw redirect(307, "/locations");
    console.log("location id", id);
    const response = await del(`locations/${id}`, locals?.user?.jwt);
    console.log(response);
    return response.result;
  }
};
export {
  actions,
  load
};
