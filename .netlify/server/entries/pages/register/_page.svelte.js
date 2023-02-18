import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url(https://fonts.googleapis.com/css?family=Roboto:300);.container.svelte-i9g4hp.svelte-i9g4hp{width:400px;margin:0 auto;margin-top:5%;background:linear-gradient(to bottom, #33ccff, #ff99cc)}form.svelte-i9g4hp.svelte-i9g4hp{height:425px;width:100%;padding:30px;border:1px solid #f1f1f1;background:#fff;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)}.container.svelte-i9g4hp h1.svelte-i9g4hp{width:30%;margin:0 auto;padding-bottom:10px}input[type=text].svelte-i9g4hp.svelte-i9g4hp,input[type=password].svelte-i9g4hp.svelte-i9g4hp{width:100%;padding:20px 30px;margin:22px 0 10px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}input[type=password].svelte-i9g4hp.svelte-i9g4hp{width:100%;padding:20px 30px;margin:10px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button.svelte-i9g4hp.svelte-i9g4hp{background-color:#33ccff;color:white;padding:20px 30px;margin:10px 0;border:none;cursor:pointer;width:100%}button.svelte-i9g4hp.svelte-i9g4hp:hover{background-color:white;color:#33ccff;border:1px solid #33ccff}form.svelte-i9g4hp .message.svelte-i9g4hp{margin:15px 0 0;color:#b3b3b3;font-size:15px}form.svelte-i9g4hp .message a.svelte-i9g4hp{color:#ff99cc;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="${"container svelte-i9g4hp"}"><form method="${"post"}" action="${"?/register"}" class="${"svelte-i9g4hp"}"><h1 class="${"svelte-i9g4hp"}">Sign up</h1>
        <input id="${"username"}" name="${"username"}" type="${"text"}"${add_attribute("value", form?.username ?? "", 0)} placeholder="${"Username"}" class="${"svelte-i9g4hp"}"> 
        <input id="${"password"}" name="${"password"}" type="${"password"}" placeholder="${"Password"}" class="${"svelte-i9g4hp"}">
        <input id="${"confirmPassword"}" name="${"confirmPassword"}" type="${"password"}" placeholder="${"Confirm Passsword"}" class="${"svelte-i9g4hp"}">
    <button type="${"submit"}" class="${"svelte-i9g4hp"}">Register</button>

    <p class="${"message svelte-i9g4hp"}">Already registered? <a href="${"/login"}" class="${"svelte-i9g4hp"}">Log In</a></p>



    ${form?.missing ? `<p class="${"error"}">Please fill out all fields</p>` : ``}

    ${form?.mismatch ? `<p class="${"error"}">Passwords do not match</p>` : ``}

    ${form?.invalidUsername ? `<p class="${"error"}">Username already taken</p>` : ``}

    ${form?.success ? `  
    <p>Successfully registered! Welcome, ${escape(form.username)}</p>` : ``}</form>
</div>`;
});
export {
  Page as default
};
