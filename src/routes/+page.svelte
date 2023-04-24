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
	style="background-image: url('images/lakes.JPG');"
>
	<div class="absolute top-0 left-0 right-0 bottom-0 text-secondary-200 " />
	<div class="container mx-auto py-56 px-4 relative text-center">
		<h1
			style="font-size: 80px !important;"
			class="text-10xl text-secondary-200 leading-tight mb-2 pt-20"
		>
			Ali & Dan
		</h1>
		<p class="text-2xl lg:text-3xl text-secondary-200 leading-tight mb-8">15.06.25</p>
	</div>
</header>
<!-- Banner Section End -->

<!-- Introduction -->
<div class="svg-top ">
	<div class=" svg-bottom">
		<div class="container p-8 space-y-8 text-tertiary-400 mx-auto lg:pl-20 ">
			<h1 class="text-primary-600 ">Welcome</h1>
			<p>
				Welcome to our wedding website, where we invite you to join us for the celebration of our
				love in the beautiful coastal region of Cornwall. We are thrilled to have you as part of our
				special day and cannot wait to share this momentous occasion with our loved ones.
			</p>
			<p>
				For those who have never visited Cornwall, we can promise you an unforgettable experience.
				Nestled in the southwestern part of England, Cornwall boasts some of the most breathtaking
				landscapes in the country. From the rugged cliffs and picturesque coves to the rolling hills
				and quaint villages, this region is a treasure trove of natural beauty and charm.
			</p>
			<ImageCopyBlock
				imageUrl="/IMG_7416BW.jpg"
				title=" ''We look forward to the day when we can share our love and commitment with all of the special people in our lives.'' "
				bodyText="-love Ali & Dan"
			/>
			<p>
				Our wedding will take place at a stunning venue in Cornwall, which we chose for its stunning
				sea views and rustic charm. We are confident that you will fall in love with this location
				just as much as we did.
			</p>
			<p>
				To make your stay in Cornwall as comfortable as possible, we have put together a list of
				accommodation options that are located in close proximity to our wedding venue. From cozy
				B&Bs to luxurious hotels, you can find a range of options that cater to different budgets
				and preferences. We highly recommend booking your accommodation as soon as possible, as
				Cornwall is a popular holiday destination and accommodation can fill up quickly.
			</p>
		</div>
	</div>
</div>

<!-- About -->
<div
	id="venue"
	class="bg-primary-50  flex items-center justify-center venue "
	style="height: 50vh;"
>
	<div class="container  mx-auto p-8 space-y-8">
		<h2 class="text-primary-600">The Venue</h2>
		<p class="text-primary-600">
			Steeped in history and set amidst spectacular wooded countryside, Launcells Barton is a
			family-owned exclusive use wedding venue in Launcells, a small parish situated near Bude in
			North Cornwall. Along with boutique accommodation in our historic country manor house, we
			provide the perfect setting for both your wedding ceremony and reception, with the capacity to
			seat up to 200 guests. From the minute you arrive to the moment you leave, you’ll be made to
			feel like part of the family.
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
<div id="travel-and-accommodation" class=" bg-secondary-100 container mx-auto p-8 space-y-8 ">
	<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4">
		Travel and Accommodation
	</h1>
	<p class="text-xl lg:text-2xl  leading-tight mb-8  text-secondary-900 text-left">
		The Wedding Location is convenient for Bude & Stratton only being a 5 minute drive. We recommend
		booking a hotel early as it can get very busy in the summer months as it is a popular tourist
		destination.

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

<!-- FAqs -->
<div id="faqs" class="bg-primary-50" style="min-height: 70vh;">
	<div class="container my-auto mx-auto p-8 space-y-8 ">
		<h1 class="text-4xl lg:text-6xl  text-primary-600 text-center leading-tight mt-4  mb-6 ">
			Frequently Asked Questions
		</h1>
		<QA
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
		/>
		<!-- <QA question="123?" answer="ABC" /> -->
	</div>
</div>

<!-- Image -->
<div class="wedding-img" style="background-image: url('/images/alex-wedding.JPG');">
	<div class="py-64 px-4" />
</div>

<!-- Contact -->
<div
	id="contact-us"
	class=" bg-secondary-100 flex items-center justify-center"
	style="height: 50vh;"
>
	<div class="container  mx-auto p-8 space-y-8 ">
		<h1 class="text-4xl lg:text-6xl  text-primary-500 text-center leading-tight mb-4">
			Contact Us
		</h1>
		<p class="text-xl lg:text-2xl  leading-tight mb-8 text-tertiary-400 text-center mb-8">
			Should you have any questions or queries you can contact us at any time.
		</p>
		<p class="text-xl lg:text-2xl  leading-tight mb-8 text-tertiary-400  text-center">
			Contact us via <a href="mailto:danpetersen@hotmail.co.uk"
				>Email:<IconMail style="display: inline;" /></a
			>
		</p>
	</div>
</div>

<style>
	@media screen and (max-width: 600px) {
		.background-img {
			background-position: 0px 0px !important;
		}
		.beach {
			background-position: 0px -500px !important;
		}
		.wedding-img {
			background-position: -200px -00px !important;
		}
		.venue {
			height: 75vh !important;
		}
	}
	.background-img {
		background-position: 0px -100px;
		background-repeat: no-repeat;
		/* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		/* filter: grayscale(100%);  */
	}
	.beach {
		background-position: bottom;
		background-repeat: no-repeat;
	}
	.venue {
		height: 50vh;
	}
	.wedding-img {
		background-position: center;
		background-repeat: no-repeat;
		min-height: 50vh;
		background-size: cover;
	}

	@media screen and (min-width: 1200px) {
		/* .background-img {
			background-position: 0px -400px !important;
			background-image: url('images/lakedistrict.png') !important;
		} */
		.wedding-img {
			min-height: 75vh !important;
			background-position: top;
		}
	}
</style>
