<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../../src/theme.postcss';
	import '../../src/app.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import ImageCopyBlock from '../components/ImageCopyBlock.svelte';
</script>

<header class="bg-cover bg-center relative" style="background-image: url('hero.jpg');">
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-50" />
	<div class="container mx-auto py-32 px-4 relative text-center">
		<h1 class="text-4xl lg:text-6xl  text-white leading-tight mb-4">Ali & Dan</h1>
		<p class="text-xl lg:text-2xl text-white leading-tight mb-8 italic">15th June 2024</p>
	</div>
</header>

<div class="container mx-auto p-8 space-y-8 text-gray-600">
	<h2>Welcome</h2>
	<p>
		Welcome to our wedding website, where we invite you to join us for the celebration of our love
		in the beautiful coastal region of Cornwall. We are thrilled to have you as part of our special
		day and cannot wait to share this momentous occasion with our loved ones.
	</p>
	<p>
		For those who have never visited Cornwall, we can promise you an unforgettable experience.
		Nestled in the southwestern part of England, Cornwall boasts some of the most breathtaking
		landscapes in the country. From the rugged cliffs and picturesque coves to the rolling hills and
		quaint villages, this region is a treasure trove of natural beauty and charm.
	</p>

	<ImageCopyBlock
		imageUrl="/flowers.jpg"
		title="Lorem ipsum dolor sit amet"
		bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus mauris. Donec euismod nulla ut justo commodo, ut iaculis libero tempor. Sed ut ante nisl."
	/>
	<p>
		Our wedding will take place at a stunning venue in Cornwall, which we chose for its stunning sea
		views and rustic charm. We are confident that you will fall in love with this location just as
		much as we did.
	</p>
	<p>
		To make your stay in Cornwall as comfortable as possible, we have put together a list of
		accommodation options that are located in close proximity to our wedding venue. From cozy B&Bs
		to luxurious hotels, you can find a range of options that cater to different budgets and
		preferences. We highly recommend booking your accommodation as soon as possible, as Cornwall is
		a popular holiday destination and accommodation can fill up quickly.
	</p>
</div>
