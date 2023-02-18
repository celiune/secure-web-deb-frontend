import { c as create_ssr_component, f as add_attribute, e as escape } from "../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url(https://fonts.googleapis.com/css?family=Roboto:300);.container.svelte-1rond3c.svelte-1rond3c{width:400px;margin:0 auto;margin-top:5%;background:linear-gradient(to bottom, #33ccff, #ff99cc)}form.svelte-1rond3c.svelte-1rond3c{height:350px;width:100%;padding:30px;border:1px solid #f1f1f1;background:#fff;box-shadow:0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)}.container.svelte-1rond3c h1.svelte-1rond3c{width:30%;margin:0 auto;padding-bottom:10px}input[type=text].svelte-1rond3c.svelte-1rond3c,input[type=password].svelte-1rond3c.svelte-1rond3c{width:100%;padding:20px 30px;margin:22px 0 10px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}input[type=password].svelte-1rond3c.svelte-1rond3c{width:100%;padding:20px 30px;margin:10px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button.svelte-1rond3c.svelte-1rond3c{background-color:#33ccff;color:white;padding:20px 30px;margin:10px 0;border:none;cursor:pointer;width:100%}button.svelte-1rond3c.svelte-1rond3c:hover{background-color:white;color:#33ccff;border:1px solid #33ccff}form.svelte-1rond3c .message.svelte-1rond3c{margin:15px 0 0;color:#b3b3b3;font-size:15px}form.svelte-1rond3c .message a.svelte-1rond3c{color:#ff99cc;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="${"container svelte-1rond3c"}"><form method="${"post"}" action="${"?/login"}" class="${"svelte-1rond3c"}"><h1 class="${"svelte-1rond3c"}">Sign in</h1>
                <input id="${"username"}" name="${"username"}" type="${"text"}"${add_attribute("value", form?.username ?? "", 0)} placeholder="${"Username"}" class="${"svelte-1rond3c"}">

                <input id="${"password"}" name="${"password"}" type="${"password"}" placeholder="${"Password"}" class="${"svelte-1rond3c"}">

            <button type="${"submit"}" class="${"svelte-1rond3c"}">Log In</button>

            <p class="${"message svelte-1rond3c"}">Not registered? <a href="${"/register"}" class="${"svelte-1rond3c"}">Register</a></p>

            ${form?.missing ? `<p class="${"error"}">The username field is required</p>` : ``}

            ${form?.incorrect ? `<p class="${"error"}">Invalid credentials!</p>` : ``}


            ${form?.success ? `  
            <p>Successfully logged in! Welcome back, ${escape(form.username)}</p>` : ``}</form>
    </div>`;
});
export {
  Page as default
};
