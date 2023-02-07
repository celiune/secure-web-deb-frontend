<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container">

	<h1 class="text-center">Welcome to the home page</h1>

	<div class="text-left">
		<p>Would you like to know all details of different film locations?</p>
		{#if !data?.user}
		<p>Hurry and <a href="/login">sign in </a> or <a href="/register">sign up</a></p>
		{/if}
		<p>Look in the right to know what kind of information are waiting for you</p>
		<img src="https://sites.google.com/site/seinfeldfilmlocations/_/rsrc/1298413977318/home/map%20image.jpg?height=400&width=336"  alt="Locations Image">
	</div>
	<div class="text-right">
		{#if data?.user}
		<p>One location has all these details</p>
		<li >Film Type</li>
        <li >Film Producer Name</li>
        <li >End Date</li>
        <li >Film Name</li>
        <li >District</li>
		<li >Geolocation Coordinate 1</li>
        <li >Geolocation Coordinate 2</li>
        <li >Source Location ID</li>
        <li >Film Director Name</li>
        <li >Address</li>
        <li >Start Date</li>
        <li >Year</li>
		{:else}
		<img src="https://streamnews.be/wp-content/uploads/2022/05/HeroImage_MysteryBox-800x532.jpg" alt="Mysterious image">
		{/if}
	</div>
</div>

	<style>

		.container{
			width:auto;
			margin:auto;
		}
		h1 {
		  font-size: 36px;
		  margin-bottom: 20px;
		  text-align: center;
		}
	  
		a {
		  color: blue;
		  text-decoration: none;
		}
	  
		.text-left {
		  width: 40%;
		  float: left;
		  margin-left: 10%;
		}
	  
		.text-right {	
		  width: 40%;
		  float: right;
		  margin-right: 10%;
		}
	  
		p {
		  font-size: 18px;
		  margin-bottom: 10px;
		  text-align: left;
		}
	  
		li {
		  font-size: 18px;
		  margin-bottom: 10px;
		}
	  
		img {
		  width: 50%;
		  margin-top: 20px;
		}
	  </style>
	  