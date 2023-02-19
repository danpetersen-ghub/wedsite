<script lang="ts">
	import { AppShell, menu } from '@skeletonlabs/skeleton';
	import '../../src/theme.postcss';
	import '../../src/app.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { IconMenu2 } from '@tabler/icons-svelte';
	import { storePrefersDarkScheme, storeLightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<span class="relative ">
			<button class="btn variant-soft-primary" use:menu={{ menu: 'nav-items' }}>
				<IconMenu2 />
			</button>
			<nav class="list-nav card p-4 w-64 shadow-xl text-gray-600" data-menu="nav-items">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/rsvp">RSVP</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</span>
		<!-- <LightSwitch /> -->
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter"
		><footer class="bg-gray-800 text-gray-400 py-8 px-4">
			<div class="container mx-auto  justify-between text-center h-50">
				<div class="w-full sm:w-auto  text-center">
					<p>&copy; 2023 Dan & Ali</p>
					<br />
					<p class="italic">Created by us, for us, with love</p>
				</div>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
