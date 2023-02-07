<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */  
    export let form

</script>

<div class="container">
<form method="post" action="?/logout" use:enhance>
    <h1>Sign out</h1>
    <br/>
    <p>Thank you for coming, hope you had nice time on this web app.</p>
    <p>See you next time!</p>

    <button type="submit">Log Out</button>
    <p class="message">Don't want to log out anymore? <a href="/"> Go back</a></p>


    {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in response to a form submission. it will vanish if the user reloads -->  
    <p>Successfully logged out! Goodbye</p>
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
        height: 300;
        width:100%;
        padding: 30px;
        border: 1px solid #f1f1f1;
        background: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .container h1{
        width: 40%;
        margin: 0 auto;
        padding-bottom: 10px;
    }

    /* Set a style for all buttons */
    button{
        background-color: #33ccff;
        color: white;
        padding: 15px 20px;
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