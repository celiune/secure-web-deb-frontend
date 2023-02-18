import { c as create_ssr_component, f as add_attribute } from "../../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url(https://fonts.googleapis.com/css?family=Roboto:300);.container.svelte-18cbg94.svelte-18cbg94{width:900px;margin:0 auto;margin-top:5%;background:linear-gradient(to bottom, #33ccff, #ff99cc)}form.svelte-18cbg94.svelte-18cbg94{height:800px;width:100%;padding:30px;border:1px solid #f1f1f1;background:#fff;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)}.container.svelte-18cbg94 h1.svelte-18cbg94{width:51%;margin:0 auto;padding-bottom:10px}input.svelte-18cbg94.svelte-18cbg94{width:100%;padding:10px 15px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.edit-button.svelte-18cbg94.svelte-18cbg94{background-color:#33ccff;color:white;padding:10px 15px;margin:5px 5px;border:none;cursor:pointer;width:40%;float:left}.delete-button.svelte-18cbg94.svelte-18cbg94{background-color:#33ccff;color:white;padding:10px 15px;margin:5px 5px ;border:none;cursor:pointer;width:40%;float:right}button.svelte-18cbg94.svelte-18cbg94:hover{background-color:white;color:#33ccff;border:1px solid #33ccff}.message.svelte-18cbg94.svelte-18cbg94{text-align:center;margin:8px auto;color:#b3b3b3;font-size:15px}.message.svelte-18cbg94 a.svelte-18cbg94{color:#ff99cc;text-decoration:none}label.svelte-18cbg94.svelte-18cbg94{display:inline-block;width:100%;padding:10px 15px;margin:7px 0}.section-left.svelte-18cbg94.svelte-18cbg94{width:25%;float:left}.section-right.svelte-18cbg94.svelte-18cbg94{width:75%;float:right}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let startDate;
  let endDate;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  startDate = new Date(data.location.startDate).toISOString().substr(0, 10);
  endDate = new Date(data.location.endDate).toISOString().substr(0, 10);
  return `<div class="${"container svelte-18cbg94"}"><form method="${"post"}" class="${"svelte-18cbg94"}">${data?.user ? `${data?.user?.role == "admin" ? `<h1 class="${"svelte-18cbg94"}">Look/ Edit/ Delete a location</h1>` : `<h1 class="${"svelte-18cbg94"}">Look at a location</h1>`}
    <div class="${"section-left svelte-18cbg94"}"><label for="${"filmType"}" class="${"svelte-18cbg94"}">Film Type: </label><br>
        <label for="${"filmProducerName"}" class="${"svelte-18cbg94"}">Film Producer Name: </label><br>
        <label for="${"endDate"}" class="${"svelte-18cbg94"}">End Date: </label><br>
        <label for="${"filmName"}" class="${"svelte-18cbg94"}">Film Name: </label><br>
        <label for="${"district"}" class="${"svelte-18cbg94"}">District: </label><br>
        <label for="${"geolocation1"}" class="${"svelte-18cbg94"}">Geolocation Coordinate 1: </label><br>
        <label for="${"geolocation2"}" class="${"svelte-18cbg94"}">Geolocation Coordinate 2: </label><br>
        <label for="${"sourceLocationId"}" class="${"svelte-18cbg94"}">Source Location ID: </label><br>
        <label for="${"filmDirectorName"}" class="${"svelte-18cbg94"}">Film Director Name: </label><br>
        <label for="${"address"}" class="${"svelte-18cbg94"}">Address: </label><br>
        <label for="${"startDate"}" class="${"svelte-18cbg94"}">Start Date: </label><br>
        <label for="${"year"}" class="${"svelte-18cbg94"}">Year: </label><br></div>
    <div class="${"section-right svelte-18cbg94"}"><input id="${"filmName"}" name="${"filmName"}" type="${"text"}"${add_attribute("value", data.location.filmName, 0)} class="${"svelte-18cbg94"}">
        <input id="${"filmType"}" name="${"filmType"}" type="${"text"}"${add_attribute("value", data.location.filmType, 0)} class="${"svelte-18cbg94"}">
        <input id="${"filmProducerName"}" name="${"filmProducerName"}" type="${"text"}"${add_attribute("value", data.location.filmProducerName, 0)} class="${"svelte-18cbg94"}">
        <input id="${"endDate"}" name="${"endDate"}" type="${"date"}"${add_attribute("value", endDate, 0)} class="${"svelte-18cbg94"}">
        <input id="${"district"}" name="${"district"}" type="${"text"}"${add_attribute("value", data.location.district, 0)} class="${"svelte-18cbg94"}">
        <input id="${"geolocation1"}" name="${"geolocation1"}" type="${"number"}"${add_attribute("value", data.location.geolocation.coordinates[0], 0)} class="${"svelte-18cbg94"}">
        <input id="${"geolocation2"}" name="${"geolocation2"}" type="${"number"}"${add_attribute("value", data.location.geolocation.coordinates[1], 0)} class="${"svelte-18cbg94"}">
        <input id="${"sourceLocationId"}" name="${"sourceLocationId"}" type="${"text"}"${add_attribute("value", data.location.sourceLocationId, 0)} class="${"svelte-18cbg94"}">
        <input id="${"filmDirectorName"}" name="${"filmDirectorName"}" type="${"text"}"${add_attribute("value", data.location.filmDirectorName, 0)} class="${"svelte-18cbg94"}">
        <input id="${"address"}" name="${"address"}" type="${"text"}"${add_attribute("value", data.location.address, 0)} class="${"svelte-18cbg94"}">
        <input id="${"startDate"}" name="${"startDate"}" type="${"date"}"${add_attribute("value", startDate, 0)} class="${"svelte-18cbg94"}">
        <input id="${"year"}" name="${"year"}" type="${"text"}"${add_attribute("value", data.location.year, 0)} class="${"svelte-18cbg94"}"></div>` : `<p>Location not found</p>`}
    <p class="${"message svelte-18cbg94"}"><a href="${"/locations"}" class="${"svelte-18cbg94"}">Go back</a></p>

    ${data?.user?.role == "admin" ? `<button class="${"edit-button svelte-18cbg94"}" formaction="${"?/edit"}">Update</button>
    <button class="${"delete-button svelte-18cbg94"}" formaction="${"?/delete"}" type="${"submit"}">Delete</button>` : ``}</form>    
</div>`;
});
export {
  Page as default
};
