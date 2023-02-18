import { r as redirect, f as fail } from "../../../chunks/index.js";
import { a as post } from "../../../chunks/api.js";
async function load({ locals }) {
  if (locals.user)
    throw redirect(307, "/");
}
const actions = {
  register: async ({ locals, request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    if (!username) {
      return fail(400, { missing: true, error: "Username is required" });
    }
    if (!password) {
      return fail(400, { missing: true, error: "Password is required" });
    }
    if (!confirmPassword) {
      return fail(400, { missing: true, error: "Confirm password is required" });
    }
    if (password !== confirmPassword) {
      return fail(400, { mismatch: true, error: "Passwords do not match" });
    }
    let body = await post("users/register", { username, password });
    if (!body.ok) {
      return fail(400, { invalidUsername: true, error: "Username already taken" });
    } else {
      body = await post("users/login", { username, password });
      const value = body.result.jwt;
      cookies.set("jwt", value, { path: "/" });
      locals.user = body.result;
      return { success: true, ...body.result };
    }
  }
};
export {
  actions,
  load
};
