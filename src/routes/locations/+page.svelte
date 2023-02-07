<script>
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';
  import { enhance } from '$app/forms';

/** @type {import('./$types').PageData} */  
export let data;

$: page = data?.index;
  // URL PATH FORCE TO `MAX_PAGES`
$: if (browser && !Number.isInteger(page)) {
      goto(`/locations?page=1`);
  } else if (browser && page >= 10) {
      goto(`/locations?page=10`);
  } else if (browser && page <= 1) {
      goto(`/locations?page=1`);
  }

$: startIndex = (page - 1) * 20;
$: endIndex = startIndex + 20;
$: displayLocations = data?.locations?.slice(startIndex, endIndex);

</script>

<div class="container">
  <form method="post" action="?" use:enhance>
  <h1>Locations</h1>
  {#if data?.user?.role == "admin"}
  <a href="/locations/add"> Add a Location</a>
  {/if}
    <table>
    {#if displayLocations}
        {#each displayLocations as location}
        <tr>

          <th><p>{location.filmName}</p></th>
          <th><a class="text-primary" href="/locations/{location._id}">More details</a></th> 

          {#if data?.user?.role == "admin"}
          <input type="hidden" name="locationId" value="{location._id}" />
          <th><a href="/locations/{location._id}"> Edit</a></th>
          <th><button formaction="?/delete" type="submit" >Delete</button></th>
          {/if}

        </tr>
        {/each}
    {/if}
    </table>
    <div class="pagination">
      {#if page > 1}
          <a href={`/locations?page=${page - 1}`}>Prev</a>
      {/if}
      <a href={`/locations?page=${page}`}>{page}</a>
      {#if endIndex < data?.locations?.length}
          <a href={`/locations?page=${page + 1}`}>Next</a>
      {/if}
    </div>
  </form>
</div>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  a {
    color: blue;
    text-decoration: none;
  }

  a.text-primary {
    color: #007bff;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }


.container{
    width:800px;
    margin:0 auto;
    margin-top:5%;
}
/* Bordered form */
form {
    height: auto;
    width:100%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

}
.container h1{
    width: 30%;
    margin: 0 auto;
    padding-bottom: 10px;
}


/* Set a style for all buttons */
button{
    background-color: #33ccff;
    color: white;
    padding: 8px 20px;
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

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}


.text-primary {
  color: blue;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination a {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: blue;
  color: white;
}


</style>
