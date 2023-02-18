import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as post } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.user)
    throw redirect(307, "/login");
  if (locals?.user?.role !== "admin")
    throw redirect(307, "/locations");
}
const actions = {
  add: async ({ locals, request }) => {
    const data = await request.formData();
    const filmType = data.get("filmType");
    const filmProducerName = data.get("filmProducerName");
    const endDate = data.get("endDate");
    const filmName = data.get("filmName");
    const district = data.get("district");
    const geolocation1 = data.get("geolocation1");
    const geolocation2 = data.get("geolocation2");
    const sourceLocationId = data.get("sourceLocationId");
    const filmDirectorName = data.get("filmDirectorName");
    const address = data.get("address");
    const startDate = data.get("startDate");
    const year = data.get("year");
    if (!filmType) {
      return fail(400, { missing: true, error: "Film type is required" });
    }
    if (!filmProducerName) {
      return fail(400, { missing: true, error: "Film producer name is required" });
    }
    if (!endDate) {
      return fail(400, { missing: true, error: "End date is required" });
    }
    if (!filmName) {
      return fail(400, { missing: true, error: "Film name is required" });
    }
    if (!district) {
      return fail(400, { missing: true, error: "District is required" });
    }
    if (!geolocation1) {
      return fail(400, { missing: true, error: "Geolocation coordinate 1 is required" });
    }
    if (!geolocation2) {
      return fail(400, { missing: true, error: "Geolocation coordinate 2 is required" });
    }
    if (!sourceLocationId) {
      return fail(400, { missing: true, error: "Source location ID is required" });
    }
    if (!filmDirectorName) {
      return fail(400, { missing: true, error: "Film director name is required" });
    }
    if (!address) {
      return fail(400, { missing: true, error: "Address is required" });
    }
    if (!startDate) {
      return fail(400, { missing: true, error: "Start date is required" });
    }
    if (!year) {
      return fail(400, { missing: true, error: "Year is required" });
    }
    const geolocation = { "coordinates": [geolocation1, geolocation2] };
    const body = await post("locations", {
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
    if (!body) {
      return fail(401, { incorrect: true, error: "Creation of film failed, please try again" });
    } else {
      return { success: true, ...body };
    }
  }
};
export {
  actions,
  load
};
