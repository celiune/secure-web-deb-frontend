import { c as create_ssr_component } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url(https://fonts.googleapis.com/css?family=Roboto:300);.container.svelte-190avdo.svelte-190avdo{width:400px;margin:0 auto;margin-top:5%;background:linear-gradient(to bottom, #33ccff, #ff99cc)}form.svelte-190avdo.svelte-190avdo{height:300;width:100%;padding:30px;border:1px solid #f1f1f1;background:#fff;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)}.container.svelte-190avdo h1.svelte-190avdo{width:40%;margin:0 auto;padding-bottom:10px}button.svelte-190avdo.svelte-190avdo{background-color:#33ccff;color:white;padding:15px 20px;margin:10px 0;border:none;cursor:pointer;width:100%}button.svelte-190avdo.svelte-190avdo:hover{background-color:white;color:#33ccff;border:1px solid #33ccff}form.svelte-190avdo .message.svelte-190avdo{margin:15px 0 0;color:#b3b3b3;font-size:15px}form.svelte-190avdo .message a.svelte-190avdo{color:#ff99cc;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="${"container svelte-190avdo"}"><form method="${"post"}" action="${"?/logout"}" class="${"svelte-190avdo"}"><h1 class="${"svelte-190avdo"}">Sign out</h1>
    <br>
    <p>Thank you for coming, hope you had nice time on this web app.</p>
    <p>See you next time!</p>

    <button type="${"submit"}" class="${"svelte-190avdo"}">Log Out</button>
    <p class="${"message svelte-190avdo"}">Don&#39;t want to log out anymore? <a href="${"/"}" class="${"svelte-190avdo"}">Go back</a></p>


    ${form?.success ? `  
    <p>Successfully logged out! Goodbye</p>` : ``}</form>
</div>`;
});
export {
  Page as default
};
