<script lang="ts">
	import { IconChecks } from '@tabler/icons-svelte';
	import ImageCopyBlock from '../../components/ImageCopyBlock.svelte';
</script>

<header class="bg-cover bg-center relative" style="background-image: url('hero.jpg');">
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-0" />
	<div class="container mx-auto py-32 px-4 relative text-center">
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
	<p class="text-xl lg:text-2xl  leading-tight mb-8  text-primary-500 text-center" />

	<ImageCopyBlock
		imageUrl="./flowers.jpg"
		title=" Location Name "
		bodyText="Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
	euismod auctor augue, in hendrerit velit accumsan vel."
	/>

	<ImageCopyBlock
		imageUrl="./flowers.jpg"
		title=" Location Name "
		bodyText="Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
euismod auctor augue, in hendrerit velit accumsan vel."
	/>

	<ImageCopyBlock
		imageUrl="./flowers.jpg"
		title=" Location Name "
		bodyText="Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
euismod auctor augue, in hendrerit velit accumsan vel."
	/>
</div>
