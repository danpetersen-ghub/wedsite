<script lang="ts">
	import { IconChecks } from '@tabler/icons-svelte';
	import ImageCopyBlock from '../../components/ImageCopyBlock.svelte';
</script>

<header
	class=" bg-cover relative bg-bottom background-img"
	style="background-image: url('/images/bude.jpg');background-repeat: no-repeat;"
>
	<div class="absolute top-500 left-0 right-0 bottom-0 bg-gray-600 opacity-0" />
	<div class="container mx-auto py-64 px-4 relative text-center">
		<!-- <h1 class="text-4xl lg:text-6xl  text-white leading-tight mb-4">Sucess <IconChecks /></h1>
		<p class="text-xl lg:text-2xl text-white leading-tight mb-8 italic">
			You have submitted an RSVP, thank you!
		</p> -->
	</div>
</header>

<div class="container mx-auto p-8 my-8 text-gray-600 text-left">
	<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4">
		Travel and Accommodation
	</h1>
	<p class="text-xl lg:text-2xl  leading-tight mb-8  text-secondary-900 text-left">
		The Wedding Location is convienient for Bude & Stratton only being a 5 minute drive. We
		reccomend booking a hotel early as it can get very busy in the summer months as it is a poipular
		tourist destination.

		<br /> <br />
		Find hotels here:
		<a href="https://www.google.com/maps/search/Hotels/@50.8308104,-4.5334727,14.29z"
			>Hotels near Bude & Stratton</a
		>
	</p>

	<ImageCopyBlock
		imageUrl="./images/bude.jpg"
		title=" Bude Town "
		bodyText="Bude is a seaside town in north east Cornwall, England, in the civil parish of Bude-Stratton and at the mouth of the River Neet "
	/>

	<ImageCopyBlock
		imageUrl="./images/Stratton-5359.jpg"
		title="Stratton"
		bodyText="Stratton is a market town in Cornwall, England situated near the coastal town of Bude and the market town of Holsworthy."
	/>
</div>

<style>
	.background-img {
		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		filter: grayscale(100%);
	}
</style>
