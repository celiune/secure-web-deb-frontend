<script >
	import { page } from '$app/stores';
	/** @type {import('./$types').LayoutData} */
	export let data;

</script>

<nav
	class="navbar navbar-expand-lg navbar-light bg-light justify-content-between mb-3"
>
	<div class="container">
		<h2 class="navbar-brand">Secure Web Dev</h2>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a
					class="nav-link"
					class:active={$page.url.pathname === '/'}
					href="/"
				>
					Home
				</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					class:active={$page.url.pathname === '/locations'}
					href="/locations"
				>
					Locations
				</a>
			</li>
			{#if !data.user}
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/login'}
						href="/login"
					>
						Login
					</a>
				</li>
				<li class="nav-item">
					<a 
						href="/register" 
						class="nav-link" 
						class:active={$page.url.pathname === '/register'}
						>
						Register
					</a>
				</li>
				{:else}
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$page.url.pathname === '/logout'}
						href="/logout"
					>
						Log Out
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>

<style>

.navbar-brand {
  font-weight: bold;
}

.nav-link {
  color: #343a40;
  font-size: 1.2em;
  margin-right: 20px;
}

.pull-xs-right {
  float: right;
}

.navbar-brand {
  display: inline-block;
  vertical-align: middle;
}

.nav-item {
  display: inline-block;
  vertical-align: middle;
  margin-left: 1rem;
}


</style>
