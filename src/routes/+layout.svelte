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
		<div class=" " style="opacity: 100;z-index: 10;">
			<span class="relative">
				<button class="btn" use:menu={{ menu: 'nav-items' }}>
					<IconMenu2 />
				</button>
				<nav class="menu " data-menu="nav-items">
					<ul class="bg-secondary-50 list-nav card p-4 text-primary-600">
						<li><a href="/">Home</a></li>
						<!-- <li><a href="#venue">Venue</a></li>
						<li><a href="#travel-and-accommodation">Travel and Accommodation</a></li>
						<li><a href="#faqs">FAQs</a></li>
						<li><a href="#contact-us">Contact Us</a></li> -->
						<!-- <li><a href="/rsvp">RSVP</a></li> -->
						<li><a href="/your-details">Your Details</a></li>
					</ul>
				</nav>
			</span>
		</div>

		<!-- <LightSwitch /> -->
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter"
		><footer class="variant-soft-primary text-primary-600 py-8 px-4 py-24">
			<div class="container mx-auto justify-between text-center h-50">
				<div class="w-full sm:w-auto  text-center">
					<p>&copy; 2023 Ali & Dan</p>
					<!-- <p class="italic">Created by us, for us, with love</p> -->
				</div>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
