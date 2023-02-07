<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */  
    export let form

</script>


<div class="container">
<form method="post" action="?/add" use:enhance>
    <h1>Add a new location</h1>
    <div class="section-left">
        <label for="filmType">Film Type: </label><br>
        <label for="filmProducerName">Film Producer Name: </label><br>
        <label for="endDate">End Date: </label><br>
        <label for="filmName">Film Name: </label><br>
        <label for="district">District: </label><br>
        <label for="geolocation1">Geolocation Coordinate 1: </label><br>
        <label for="geolocation2">Geolocation Coordinate 2: </label><br>
        <label for="sourceLocationId">Source Location ID: </label><br>
        <label for="filmDirectorName">Film Director Name: </label><br>
        <label for="address">Address: </label><br>
        <label for="startDate">Start Date: </label><br>
        <label for="year">Year: </label><br>
    </div>
<div class="section-right">
    <input 
            id="filmType"
            name="filmType" 
            type="text" 
            placeholder="Film Type"
            >    
            
        <input 
            id="filmProducerName"
            name="filmProducerName" 
            type="text" 
            placeholder="Film Producer Name"
            >
    
        <input 
            id="endDate"
            name="endDate" 
            type="date" 
            placeholder="End Date"
            >
        
        <input 
            id="filmName"
            name="filmName" 
            type="text" 
            placeholder="Film Name"
            >
        
        <input 
            id="district"
            name="district" 
            type="number" 
            placeholder="District"
            >
    
        <input 
            id="geolocation1"
            name="geolocation1" 
            type="number" 
            placeholder="Geolocation Coordinate 1"
            >

        <input 
            id="geolocation2"
            name="geolocation2" 
            type="number" 
            placeholder="Geolocation Coordinate 2"
            >
    
        <input 
            id="sourceLocationId"
            name="sourceLocationId" 
            type="text" 
            placeholder="Source Location ID"
            >
    
        <input 
            id="filmDirectorName"
            name="filmDirectorName" 
            type="text" 
            placeholder="Film Director Name"
            >
        
        <input 
            id="address"
            name="address" 
            type="text" 
            placeholder="Address"
            >

        <input 
            id="startDate"
            name="startDate" 
            type="date" 
            placeholder="Start Date"
            >
        
        <input 
            id="year"
            name="year" 
            type="number" 
            placeholder="Year"
            >  
        </div>
        
        <button type="submit">Add Film</button>

        <p class="message">Don't want to add location anymore? <a href="/locations">Go back</a></p>
        
        {#if form?.missing}
        <p class="error">All fields are required</p>
        {/if}
        
        {#if form?.incorrect}
        <p class="error">Adding Film failed, please try again</p>
        {/if}

        {#if form?.success}
        <!-- this message is ephemeral; it exists because the page was rendered in response to a form submission. it will vanish if the user reloads -->
        <p>Successfully added in!</p>
        {/if}
</form>
</div>

<style>
    @import url(https://fonts.googleapis.com/css?family=Roboto:300);

.container{
    width:900px;
    margin:0 auto;
    margin-top:5%;
    background: linear-gradient(to bottom, #33ccff, #ff99cc);
}
/* Bordered form */
form {
    height: 800px;
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

/* Full-width inputs */
input{
    width: 100%;
    padding: 10px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}



/* Set a style for all buttons */
button{
    background-color: #33ccff;
    color: white;
    padding: 15px 20px;
    margin: 50px auto 0 auto;
    border: none;
    cursor: pointer;
    width: 60%;
    display: block;
    text-align: center;
}
button:hover {
    background-color: white;
    color: #33ccff;
    border: 1px solid #33ccff;
}

.message {
  text-align: center;
  margin: 8px auto;
  color: #b3b3b3;
  font-size: 15px;
}
.message a {
  color: #ff99cc;
  text-decoration: none;
} 

label {
  display: inline-block;
  width: 100%;
  padding: 10px 15px;
  margin: 7px 0;
}

.section-left{
  width: 25%;
  float: left;
}

.section-right{
  width: 75%;
  float: right;
}


</style>

