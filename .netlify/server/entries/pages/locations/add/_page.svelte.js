import { c as create_ssr_component } from "../../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url(https://fonts.googleapis.com/css?family=Roboto:300);.container.svelte-1qzim0r.svelte-1qzim0r{width:900px;margin:0 auto;margin-top:5%;background:linear-gradient(to bottom, #33ccff, #ff99cc)}form.svelte-1qzim0r.svelte-1qzim0r{height:800px;width:100%;padding:30px;border:1px solid #f1f1f1;background:#fff;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)}.container.svelte-1qzim0r h1.svelte-1qzim0r{width:40%;margin:0 auto;padding-bottom:10px}input.svelte-1qzim0r.svelte-1qzim0r{width:100%;padding:10px 15px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button.svelte-1qzim0r.svelte-1qzim0r{background-color:#33ccff;color:white;padding:15px 20px;margin:50px auto 0 auto;border:none;cursor:pointer;width:60%;display:block;text-align:center}button.svelte-1qzim0r.svelte-1qzim0r:hover{background-color:white;color:#33ccff;border:1px solid #33ccff}.message.svelte-1qzim0r.svelte-1qzim0r{text-align:center;margin:8px auto;color:#b3b3b3;font-size:15px}.message.svelte-1qzim0r a.svelte-1qzim0r{color:#ff99cc;text-decoration:none}label.svelte-1qzim0r.svelte-1qzim0r{display:inline-block;width:100%;padding:10px 15px;margin:7px 0}.section-left.svelte-1qzim0r.svelte-1qzim0r{width:25%;float:left}.section-right.svelte-1qzim0r.svelte-1qzim0r{width:75%;float:right}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="${"container svelte-1qzim0r"}"><form method="${"post"}" action="${"?/add"}" class="${"svelte-1qzim0r"}"><h1 class="${"svelte-1qzim0r"}">Add a new location</h1>
    <div class="${"section-left svelte-1qzim0r"}"><label for="${"filmType"}" class="${"svelte-1qzim0r"}">Film Type: </label><br>
        <label for="${"filmProducerName"}" class="${"svelte-1qzim0r"}">Film Producer Name: </label><br>
        <label for="${"endDate"}" class="${"svelte-1qzim0r"}">End Date: </label><br>
        <label for="${"filmName"}" class="${"svelte-1qzim0r"}">Film Name: </label><br>
        <label for="${"district"}" class="${"svelte-1qzim0r"}">District: </label><br>
        <label for="${"geolocation1"}" class="${"svelte-1qzim0r"}">Geolocation Coordinate 1: </label><br>
        <label for="${"geolocation2"}" class="${"svelte-1qzim0r"}">Geolocation Coordinate 2: </label><br>
        <label for="${"sourceLocationId"}" class="${"svelte-1qzim0r"}">Source Location ID: </label><br>
        <label for="${"filmDirectorName"}" class="${"svelte-1qzim0r"}">Film Director Name: </label><br>
        <label for="${"address"}" class="${"svelte-1qzim0r"}">Address: </label><br>
        <label for="${"startDate"}" class="${"svelte-1qzim0r"}">Start Date: </label><br>
        <label for="${"year"}" class="${"svelte-1qzim0r"}">Year: </label><br></div>
<div class="${"section-right svelte-1qzim0r"}"><input id="${"filmType"}" name="${"filmType"}" type="${"text"}" placeholder="${"Film Type"}" class="${"svelte-1qzim0r"}">    
            
        <input id="${"filmProducerName"}" name="${"filmProducerName"}" type="${"text"}" placeholder="${"Film Producer Name"}" class="${"svelte-1qzim0r"}">
    
        <input id="${"endDate"}" name="${"endDate"}" type="${"date"}" placeholder="${"End Date"}" class="${"svelte-1qzim0r"}">
        
        <input id="${"filmName"}" name="${"filmName"}" type="${"text"}" placeholder="${"Film Name"}" class="${"svelte-1qzim0r"}">
        
        <input id="${"district"}" name="${"district"}" type="${"number"}" placeholder="${"District"}" class="${"svelte-1qzim0r"}">
    
        <input id="${"geolocation1"}" name="${"geolocation1"}" type="${"number"}" placeholder="${"Geolocation Coordinate 1"}" class="${"svelte-1qzim0r"}">

        <input id="${"geolocation2"}" name="${"geolocation2"}" type="${"number"}" placeholder="${"Geolocation Coordinate 2"}" class="${"svelte-1qzim0r"}">
    
        <input id="${"sourceLocationId"}" name="${"sourceLocationId"}" type="${"text"}" placeholder="${"Source Location ID"}" class="${"svelte-1qzim0r"}">
    
        <input id="${"filmDirectorName"}" name="${"filmDirectorName"}" type="${"text"}" placeholder="${"Film Director Name"}" class="${"svelte-1qzim0r"}">
        
        <input id="${"address"}" name="${"address"}" type="${"text"}" placeholder="${"Address"}" class="${"svelte-1qzim0r"}">

        <input id="${"startDate"}" name="${"startDate"}" type="${"date"}" placeholder="${"Start Date"}" class="${"svelte-1qzim0r"}">
        
        <input id="${"year"}" name="${"year"}" type="${"number"}" placeholder="${"Year"}" class="${"svelte-1qzim0r"}"></div>
        
        <button type="${"submit"}" class="${"svelte-1qzim0r"}">Add Film</button>

        <p class="${"message svelte-1qzim0r"}">Don&#39;t want to add location anymore? <a href="${"/locations"}" class="${"svelte-1qzim0r"}">Go back</a></p>
        
        ${form?.missing ? `<p class="${"error"}">All fields are required</p>` : ``}
        
        ${form?.incorrect ? `<p class="${"error"}">Adding Film failed, please try again</p>` : ``}

        ${form?.success ? `
        <p>Successfully added in!</p>` : ``}</form>
</div>`;
});
export {
  Page as default
};
