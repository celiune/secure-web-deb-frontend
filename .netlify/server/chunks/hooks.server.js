import { g as get } from "./api.js";
async function handle({ event, resolve }) {
  const jwt = event.cookies.get("jwt");
  if (!jwt)
    return resolve(event);
  const body = await get("users/me", jwt);
  event.locals.user = body.ok ? { jwt, ...body.result } : null;
  return resolve(event);
}
export {
  handle
};
