import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".navbar-brand.svelte-1ewyeug{font-weight:bold}.nav-link.svelte-1ewyeug{color:#343a40;font-size:1.2em;margin-right:20px}.pull-xs-right.svelte-1ewyeug{float:right}.navbar-brand.svelte-1ewyeug{display:inline-block;vertical-align:middle}.nav-item.svelte-1ewyeug{display:inline-block;vertical-align:middle;margin-left:1rem}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"navbar navbar-expand-lg navbar-light bg-light justify-content-between mb-3"}"><div class="${"container"}"><h2 class="${"navbar-brand svelte-1ewyeug"}">Secure Web Dev</h2>
		<ul class="${"nav navbar-nav pull-xs-right svelte-1ewyeug"}"><li class="${"nav-item svelte-1ewyeug"}"><a class="${["nav-link svelte-1ewyeug", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}" href="${"/"}">Home
				</a></li>
			<li class="${"nav-item svelte-1ewyeug"}"><a class="${["nav-link svelte-1ewyeug", $page.url.pathname === "/locations" ? "active" : ""].join(" ").trim()}" href="${"/locations"}">Locations
				</a></li>
			${!data.user ? `<li class="${"nav-item svelte-1ewyeug"}"><a class="${["nav-link svelte-1ewyeug", $page.url.pathname === "/login" ? "active" : ""].join(" ").trim()}" href="${"/login"}">Login
					</a></li>
				<li class="${"nav-item svelte-1ewyeug"}"><a href="${"/register"}" class="${[
    "nav-link svelte-1ewyeug",
    $page.url.pathname === "/register" ? "active" : ""
  ].join(" ").trim()}">Register
					</a></li>` : `<li class="${"nav-item svelte-1ewyeug"}"><a class="${["nav-link svelte-1ewyeug", $page.url.pathname === "/logout" ? "active" : ""].join(" ").trim()}" href="${"/logout"}">Log Out
					</a></li>`}</ul></div>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-lmaaha{background:linear-gradient(to bottom, #33ccff, #ff99cc);background-repeat:no-repeat;background-attachment:fixed;height:100%;margin:0;padding:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body class="${"svelte-lmaaha"}">${validate_component(Nav, "Nav").$$render($$result, { data }, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>
</body>`;
});
export {
  Layout as default
};
