<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../../src/theme.postcss';
	import '../../src/app.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import ImageCopyBlock from '../components/ImageCopyBlock.svelte';
	import QA from '../components/q-and-aBlock.svelte';
	import { IconMail } from '@tabler/icons-svelte';
</script>

<!-- Banner Section -->
<header
	class="bg-cover bg-center relative background-img"
	style="background-image: url('images/alex-wedding-2.jpeg');"
>
	<div class="absolute top-0 left-0 right-0 bottom-0 text-secondary-200 " />
	<div class="container mx-auto  py-44 px-4 relative text-center">
		<h1
			style="font-size: 80px !important;"
			class="text-10xl text-secondary-200 leading-tight mt-60"
		>
			Ali & Dan
		</h1>
		<h3 class=" text-secondary-200 leading-tight mb-8 pt-6 ">15th June 2024</h3>
	</div>
</header>
<!-- Banner Section End -->

<!-- Introduction -->
<div id="intro" class="svg-top bg-primary-50  ">
	<div class="container text-center mx-auto py-32 p-8 space-y-8 text-tertiary-600">
		<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4 ">
			We're getting married!
		</h1>
		<p class="text-primary-600">
			Dan and Ali are tying the knot! Please save the date, 15th June 2024, so you can join us in
			celebrating with a day of food, drink and dancing in beautiful Cornwall. We can’t wait to have
			you with us!
		</p>
		<p class="text-primary-600">
			For now, some important admin – to ensure that we have the correct address and that you
			receive your invite by post please, fill in
			<a href="/your-details">‘Your Details' here</a>.
		</p>
	</div>
</div>

<!-- About -->
<div id="venue">
	<div class="container text-center mx-auto py-32 p-8 space-y-8 text-tertiary-600">
		<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4 ">
			The Venue
		</h1>
		<p class="text-primary-600">
			Both the wedding ceremony and reception will take place at a stunning venue near Bude in
			Cornwall. Steeped in history and set amidst spectacular wooded countryside we are confident
			that you will fall in love with Launcells Barton just as much as we have.
		</p>
		<p class="text-primary-600">
			More info: <a href="https://launcellsbarton.co.uk/">launcellsbarton.co.uk</a>
		</p>
	</div>
</div>

<!-- Image -->
<div class="beach" style="background-image: url('/images/coast.jpg');">
	<div class="py-64 px-4" />
</div>

<!-- Travel -->
<div id="travel-and-accommodation" class="svg-top bg-primary-50  ">
	<div class="container text-center mx-auto py-32 p-8 space-y-8 text-tertiary-600">
		<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4 ">
			Travel and Accommodation
		</h1>
		<p class="text-xl lg:text-2xl  leading-tight mb-8  text-primary-600">
			There is onsite parking at the venue; however, staying in campers is prohibited. Pre-booking
			taxis is a must if you’re not planning on driving to the wedding; there’s no Ubers round these
			parts!
			<br /><br />
			Launcells Barton is very close to the coastal town of Bude and its neighbouring parish, Stratton.
			If you’re looking to make your trip into a weekend away, there are plenty of hotels, self-catering
			cottages and campsites in the area. We recommend booking early as it can get very busy in the summer
			months.

			<br /> <br />
			Find accommodation here:
			<a href="https://www.visitbude.info/accommodation/">Accommodation near Bude & Stratton</a>
		</p>
	</div>
</div>

<!-- FAqs -->
<!-- <div id="faqs" class="bg-primary-50" style="min-height: 70vh;">
	<div class="container my-auto mx-auto p-8 space-y-8 py-32 ">
		<h1 class="text-4xl lg:text-6xl  text-primary-600 text-center leading-tight mt-4  mb-6 ">
			Frequently Asked Questions
		</h1> -->
<!-- <QA
			question="Should I bring a waterproof jacket or umbrella?"
			answer="Yes please bring a coat the weather in Cornwall can be unpredictable!"
			isLast="no"
		/>
		<QA
			question="Should we eat before the ceremony?"
			answer="If you are a greedy guts like Dan, then we recommend a light lunch, or late breakfast before
		the Ceremony at 2PM."
			isLast="no"
		/>
		<QA
			question="Is there a dress code?"
			answer="Nope, while we all want to you look fantastic on the day, your comfort is paramount. Usual
		Wedding attire is fine!"
			isLast="yes"
		/> -->
<!-- <QA question="123?" answer="ABC" /> -->
<!-- </div>
</div> -->

<!-- Image -->
<div class="wedding-img" style="background-image: url('/images/alex-wedding.JPG');">
	<div class="py-64 px-4" />
</div>

<!-- Contact -->
<div id="contact-us" class="  flex items-center justify-center" style="height: 50vh;">
	<div class="container  mx-auto p-8 space-y-8  py-32">
		<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4">
			Contact Us
		</h1>
		<p class="text-xl lg:text-2xl  leading-tight mb-8 text-primary-600 text-center mb-8">
			If you’re unsure about anything, please contact us!
		</p>
		<p class="text-xl lg:text-2xl  leading-tight mb-8 text-primary-600  text-center">
			Contact us via <a
				href="mailto:danpetersen@hotmail.co.uk?cc=25aliwright@gmail.com&subject=Ali%20%26%20Dan%20Wedding%20-%20Contact "
				>Email: <IconMail style="display: inline;" /></a
			>
		</p>
	</div>
</div>

<style>
	@media screen and (max-width: 600px) {
		.background-img {
			background-position: -290px 0px !important;
		}
		.beach {
			background-position: -420px -640px !important;
			background-size: auto !important;
		}
		.wedding-img {
			background-position: -200px -00px !important;
		}
		.venue {
			height: 75vh !important;
		}
	}
	.background-img {
		background-position: 0px 0px;
		background-repeat: no-repeat;
		/* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		/* filter: grayscale(100%);  */
	}
	.beach {
		background-position: 0px -250px;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.venue {
		height: 50vh;
	}
	.wedding-img {
		/* background-position: center; */
		background-repeat: no-repeat;
		min-height: 50vh;
		background-size: cover;
	}

	@media screen and (min-width: 1600px) {
		.background-img {
			background-position: 0px -240px !important;
		}
		.wedding-img {
			min-height: 75vh !important;
			background-position: top;
		}
		.beach {
			background-position: 0px -450px;
			background-repeat: no-repeat;
			background-size: cover;
			min-height: 75vh !important;
		}
	}
</style>
