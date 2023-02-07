<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */  
    export let form

</script>

    <div class="container">
        <form method="post" action="?/login" use:enhance >
            <h1>Sign in</h1>
                <input 
                    id="username"
                    name="username" 
                    type="text" 
                    value={form?.username ?? ''} 
                    placeholder="Username"
                    >

                <input 
                    id="password"
                    name="password" 
                    type="password"
                    placeholder="Password"
                >

            <button type="submit">Log In</button>

            <p class="message">Not registered? <a href="/register">Register</a></p>

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
    </div>


<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.container{
    width:400px;
    margin:0 auto;
    margin-top:5%;
    background: linear-gradient(to bottom, #33ccff, #ff99cc);
}
/* Bordered form */
form {
    height: 350px;
    width:100%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.container h1{
    width: 30%;
    margin: 0 auto;
    padding-bottom: 10px;
}

/* Full-width inputs */
input[type=text], input[type=password] {
    width: 100%;
    padding: 20px 30px;
    margin: 22px 0 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type=password] {
    width: 100%;
    padding: 20px 30px;
    margin: 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button{
    background-color: #33ccff;
    color: white;
    padding: 20px 30px;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
button:hover {
    background-color: white;
    color: #33ccff;
    border: 1px solid #33ccff;
}

form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 15px;
}
form .message a {
  color: #ff99cc;
  text-decoration: none;
} 


</style>