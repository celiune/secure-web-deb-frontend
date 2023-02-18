import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url(https://fonts.googleapis.com/css?family=Roboto:300);a.svelte-1lvh82t.svelte-1lvh82t{color:blue;text-decoration:none}a.text-primary.svelte-1lvh82t.svelte-1lvh82t{color:#007bff}p.svelte-1lvh82t.svelte-1lvh82t{font-size:18px;margin-bottom:10px}.container.svelte-1lvh82t.svelte-1lvh82t{width:800px;margin:0 auto;margin-top:5%}form.svelte-1lvh82t.svelte-1lvh82t{height:auto;width:100%;padding:30px;border:1px solid #f1f1f1;background:#fff;box-shadow:0 0 0 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)}.container.svelte-1lvh82t h1.svelte-1lvh82t{width:30%;margin:0 auto;padding-bottom:10px}button.svelte-1lvh82t.svelte-1lvh82t{background-color:#33ccff;color:white;padding:8px 20px;margin:10px 0;border:none;cursor:pointer;width:100%}button.svelte-1lvh82t.svelte-1lvh82t:hover{background-color:white;color:#33ccff;border:1px solid #33ccff}form.svelte-1lvh82t .message a.svelte-1lvh82t{color:#ff99cc;text-decoration:none}table.svelte-1lvh82t.svelte-1lvh82t{width:100%;margin-top:20px;border-collapse:collapse}th.svelte-1lvh82t.svelte-1lvh82t{padding:8px;text-align:left}.text-primary.svelte-1lvh82t.svelte-1lvh82t{color:blue}.pagination.svelte-1lvh82t.svelte-1lvh82t{display:flex;justify-content:center;margin-top:20px}.pagination.svelte-1lvh82t a.svelte-1lvh82t{color:black;padding:8px 16px;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let page;
  let startIndex;
  let endIndex;
  let displayLocations;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  page = data?.index;
  startIndex = (page - 1) * 20;
  endIndex = startIndex + 20;
  displayLocations = data?.locations?.slice(startIndex, endIndex);
  return `<div class="${"container svelte-1lvh82t"}"><form method="${"post"}" action="${"?"}" class="${"svelte-1lvh82t"}"><h1 class="${"svelte-1lvh82t"}">Locations</h1>
  ${data?.user?.role == "admin" ? `<a href="${"/locations/add"}" class="${"svelte-1lvh82t"}">Add a Location</a>` : ``}
    <table class="${"svelte-1lvh82t"}">${displayLocations ? `${each(displayLocations, (location) => {
    return `<tr><th class="${"svelte-1lvh82t"}"><p class="${"svelte-1lvh82t"}">${escape(location.filmName)}</p></th>
          <th class="${"svelte-1lvh82t"}"><a class="${"text-primary svelte-1lvh82t"}" href="${"/locations/" + escape(location._id, true)}">More details</a></th> 

          ${data?.user?.role == "admin" ? `<input type="${"hidden"}" name="${"locationId"}"${add_attribute("value", location._id, 0)}>
          <th class="${"svelte-1lvh82t"}"><a href="${"/locations/" + escape(location._id, true)}" class="${"svelte-1lvh82t"}">Edit</a></th>
          <th class="${"svelte-1lvh82t"}"><button formaction="${"?/delete"}" type="${"submit"}" class="${"svelte-1lvh82t"}">Delete</button></th>` : ``}

        </tr>`;
  })}` : ``}</table>
    <div class="${"pagination svelte-1lvh82t"}">${page > 1 ? `<a${add_attribute("href", `/locations?page=${page - 1}`, 0)} class="${"svelte-1lvh82t"}">Prev</a>` : ``}
      <a${add_attribute("href", `/locations?page=${page}`, 0)} class="${"svelte-1lvh82t"}">${escape(page)}</a>
      ${endIndex < data?.locations?.length ? `<a${add_attribute("href", `/locations?page=${page + 1}`, 0)} class="${"svelte-1lvh82t"}">Next</a>` : ``}</div></form>
</div>`;
});
export {
  Page as default
};
