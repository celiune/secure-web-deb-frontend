<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */  
    export let form

</script>

<form method="post" action="?/login" use:enhance>
    <label>
        Username
        <input 
            id="username"
            name="username" 
            type="username" 
            value={form?.username ?? ''} 
            required
        > 
    </label>
    <label>
        Password
        <input 
            id="password"
            name="password" 
            type="password"
            required
        >
    </label>

    <button type="submit">Log In</button>

    <button formaction="?/register">Register</button>

    {#if form?.missing}
    <p class="error">The username field is required</p>
    {/if}

    {#if form?.incorrect}
    <p class="error">Invalid credentials!</p>
    {/if}

    {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in response to a form submission. it will vanish if the user reloads -->  
    <p>Successfully logged in! Welcome back, {form.username}</p>
    {/if}
</form>

