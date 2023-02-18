import { c as create_ssr_component } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1cqq28s{width:auto;margin:auto}h1.svelte-1cqq28s{font-size:36px;margin-bottom:20px;text-align:center}a.svelte-1cqq28s{color:blue;text-decoration:none}.text-left.svelte-1cqq28s{width:40%;float:left;margin-left:10%}.text-right.svelte-1cqq28s{width:40%;float:right;margin-right:10%}p.svelte-1cqq28s{font-size:18px;margin-bottom:10px;text-align:left}li.svelte-1cqq28s{font-size:18px;margin-bottom:10px}img.svelte-1cqq28s{width:50%;margin-top:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1anpopb_START -->${$$result.title = `<title>Home</title>`, ""}<!-- HEAD_svelte-1anpopb_END -->`, ""}

<div class="${"container svelte-1cqq28s"}"><h1 class="${"text-center svelte-1cqq28s"}">Welcome to the home page</h1>

	<div class="${"text-left svelte-1cqq28s"}"><p class="${"svelte-1cqq28s"}">Would you like to know all details of different film locations?</p>
		${!data?.user ? `<p class="${"svelte-1cqq28s"}">Hurry and <a href="${"/login"}" class="${"svelte-1cqq28s"}">sign in </a> or <a href="${"/register"}" class="${"svelte-1cqq28s"}">sign up</a></p>` : ``}
		<p class="${"svelte-1cqq28s"}">Look in the right to know what kind of information are waiting for you</p>
		<img src="${"https://sites.google.com/site/seinfeldfilmlocations/_/rsrc/1298413977318/home/map%20image.jpg?height=400&width=336"}" alt="${"Locations Image"}" class="${"svelte-1cqq28s"}"></div>
	<div class="${"text-right svelte-1cqq28s"}">${data?.user ? `<p class="${"svelte-1cqq28s"}">One location has all these details</p>
		<li class="${"svelte-1cqq28s"}">Film Type</li>
        <li class="${"svelte-1cqq28s"}">Film Producer Name</li>
        <li class="${"svelte-1cqq28s"}">End Date</li>
        <li class="${"svelte-1cqq28s"}">Film Name</li>
        <li class="${"svelte-1cqq28s"}">District</li>
		<li class="${"svelte-1cqq28s"}">Geolocation Coordinate 1</li>
        <li class="${"svelte-1cqq28s"}">Geolocation Coordinate 2</li>
        <li class="${"svelte-1cqq28s"}">Source Location ID</li>
        <li class="${"svelte-1cqq28s"}">Film Director Name</li>
        <li class="${"svelte-1cqq28s"}">Address</li>
        <li class="${"svelte-1cqq28s"}">Start Date</li>
        <li class="${"svelte-1cqq28s"}">Year</li>` : `<img src="${"https://streamnews.be/wp-content/uploads/2022/05/HeroImage_MysteryBox-800x532.jpg"}" alt="${"Mysterious image"}" class="${"svelte-1cqq28s"}">`}</div>
</div>`;
});
export {
  Page as default
};
