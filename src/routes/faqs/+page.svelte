<script lang="ts">
	import { IconChecks } from '@tabler/icons-svelte';
</script>

<header class="bg-cover bg-center relative" style="background-image: url('hero.jpg');">
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-0" />
	<div class="container mx-auto py-32 px-4 relative text-left">
		<!-- <h1 class="text-4xl lg:text-6xl  text-white leading-tight mt-4">Sucess <IconChecks /></h1>
		<p class="text-xl lg:text-2xl text-white leading-tight mb-6 italic">
			You have submitted an RSVP, thank you!
		</p> -->
	</div>
</header>

<div class="container mx-auto p-8 my-8 text-gray-600 text-left">
	<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mt-4  mb-6 ">
		Frequently Asked Questions
	</h1>
	<div>
		<h3 class="text-4xl lg:text-6xl  text-primary-500 text-left leading-tight mt-4">
			Should I bring a waterproof jacket or umbrella?
		</h3>
		<p class="text-xl lg:text-2xl  leading-tight mb-6  text-secondary-900 text-left">
			Yes please bring a coat the weather in Cornwall can be unpredictable!
		</p>
		<hr />
	</div>
	<div>
		<h3 class="text-4xl lg:text-6xl  text-primary-500 text-left leading-tight mt-4">
			Should we eat before the ceremony?
		</h3>
		<p class="text-xl lg:text-2xl  leading-tight mb-6  text-secondary-900 text-left">
			If you are a greedy guts like Dan, then we recommend a light lunch, or late breakfast before
			the Ceremony at 2PM.
		</p>
		<hr />
	</div>
	<div>
		<h3 class="text-4xl lg:text-6xl  text-primary-500 text-left leading-tight mt-4">
			Is there a dress code?
		</h3>
		<p class="text-xl lg:text-2xl  leading-tight mb-6  text-secondary-900 text-left">
			Nope, while we all want to you look fantastic on the day, your comfort is paramount. Usual
			Wedding attire is fine!
		</p>
		<!-- <hr /> -->
	</div>

	<!-- <div>
		<h3 class="text-4xl lg:text-6xl  text-primary-500 text-left leading-tight mt-4">
			What is the question?
		</h3>
		<p class="text-xl lg:text-2xl  leading-tight mb-6  text-secondary-900 text-left">answer here!</p>
		<hr />
	</div> -->
</div>

<style>
	hr {
		border: 1px solid #d59d4a !important;
	}
</style>
