import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-3ee03125.js';
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/components/pages/_layout.svelte-3ee03125.js","_app/immutable/chunks/index-f01270ae.js","_app/immutable/chunks/stores-c45e1807.js","_app/immutable/chunks/singletons-ffa23fb8.js"];
export const stylesheets = ["_app/immutable/assets/_layout-59cee5a1.css"];
export const fonts = [];
