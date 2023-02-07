<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */  
    export let data;

    $: startDate = new Date(data.location.startDate).toISOString().substr(0, 10);
	$: endDate = new Date(data.location.endDate).toISOString().substr(0, 10);


</script>



<div class="container">
<form method="post" use:enhance>
    {#if data?.user}
    {#if data?.user?.role == "admin"}
    <h1>Look/ Edit/ Delete a location</h1>
    {:else}
    <h1>Look at a location</h1>
    {/if}
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
        <input id="filmName" name="filmName" type="text" value={data.location.filmName}>
        <input id="filmType" name="filmType" type="text" value={data.location.filmType}>
        <input id="filmProducerName" name="filmProducerName" type="text" value={data.location.filmProducerName}>
        <input id="endDate" name="endDate" type="date" value={endDate}>
        <input id="district" name="district" type="text" value={data.location.district}>
        <input id="geolocation1" name="geolocation1" type="number" value={data.location.geolocation.coordinates[0]}>
        <input id="geolocation2" name="geolocation2" type="number" value={data.location.geolocation.coordinates[1]}>
        <input id="sourceLocationId" name="sourceLocationId" type="text" value={data.location.sourceLocationId}>
        <input id="filmDirectorName" name="filmDirectorName" type="text" value={data.location.filmDirectorName}>
        <input id="address" name="address" type="text" value={data.location.address}>
        <input id="startDate" name="startDate" type="date" value={startDate}>
        <input id="year" name="year" type="text" value={data.location.year}>
    </div>
    {:else}
    <p>Location not found</p>  
    {/if}
    <p class="message"><a href="/locations">Go back</a></p>

    {#if data?.user?.role == "admin"}
    <button class="edit-button" formaction="?/edit"> Update</button>
    <button class="delete-button" formaction="?/delete" type="submit"> Delete</button>
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
    width: 51%;
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
.edit-button{
    background-color: #33ccff;
    color: white;
    padding: 10px 15px;
    margin: 5px 5px;
    border: none;
    cursor: pointer;
    width: 40%;
    float: left;
}

.delete-button{
    background-color: #33ccff;
    color: white;
    padding: 10px 15px;
    margin: 5px 5px ;
    border: none;
    cursor: pointer;
    width: 40%;
    float: right;
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
