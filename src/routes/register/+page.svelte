<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */  
    export let form

</script>

<form method="post" use:enhance>
    <label>
        Email
        <input 
            id="email"
            name="email" 
            type="email" 
            value={form?.email ?? ''} 
            required
        > 
    </label>
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
    <label>
        Confirm Password
        <input 
            id="confirmPassword"
            name="confirmPassword" 
            type="password"
            required
        >
    </label>

    <button type="submit">Register</button>

    <button formaction="?/login">Log In</button>

    {#if form?.missing}
    <p class="error">Please fill out all fields</p>
    {/if}

    {#if form?.mismatch}
    <p class="error">Passwords do not match</p>
    {/if}

    {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in response to a form submission. it will vanish if the user reloads -->  
    <p>Successfully registered! Welcome, {form.username}</p>
    {/if}
</form>
