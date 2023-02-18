import * as server from '../entries/pages/locations/_id_/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/locations/_id_/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/locations/_id_/_page.svelte-43cf5e97.js';
export { server };
export const server_id = "src/routes/locations/[id]/+page.server.js";
export const imports = ["_app/immutable/components/pages/locations/_id_/_page.svelte-43cf5e97.js","_app/immutable/chunks/index-f01270ae.js","_app/immutable/chunks/forms-773ecba5.js","_app/immutable/chunks/parse-b67c4dc9.js","_app/immutable/chunks/singletons-ffa23fb8.js"];
export const stylesheets = ["_app/immutable/assets/_page-a6d4e1df.css"];
export const fonts = [];
