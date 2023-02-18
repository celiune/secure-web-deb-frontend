import { r as redirect } from "../../../chunks/index.js";
async function load({ locals }) {
  if (!locals.user)
    throw redirect(307, "/");
}
const actions = {
  logout: async ({ cookies, locals }) => {
    if (!locals.user)
      throw new Error(401, "/");
    cookies.delete("jwt");
    locals.user = null;
    return { success: true, redirect: 307, location: "/" };
  }
};
export {
  actions,
  load
};
