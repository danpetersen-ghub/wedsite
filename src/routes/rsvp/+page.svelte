<script lang="ts">
</script>

<header
	class="bg-cover bg-center relative background-img"
	style="background-image: url('images/wildflower-medow-1.jpg');"
>
	<div class="container mx-auto py-32 px-4 relative text-center">
		<h1 class="text-4xl lg:text-6xl  text-white leading-tight mb-4">RSVP!</h1>
		<p class="text-xl lg:text-2xl text-white leading-tight mb-8 italic">15th June 2024</p>
	</div>
</header>

<div class="container mx-auto p-8 space-y-8 text-tertiary-400 text-left">
	<p class="">
		We kindly request that all guests RSVP through the web form provided on our wedding website.
		This is to ensure that we have an accurate headcount for our special day and can make the
		necessary arrangements to accommodate everyone
	</p>
	<p>
		By RSVPing through the web form, you will receive all the necessary information about our
		wedding, including the schedule of events, directions to the venue, and any updates or changes
		that may occur. This will ensure that you are fully informed about the details of our special
		day and can arrive on time and fully prepared to celebrate with us.
	</p>
	<p>
		We understand that life can get busy, but we kindly ask that you RSVP as soon as possible to
		help us with our planning. Your response will help us to finalize our guest list, arrange for
		catering, and ensure that everyone has a wonderful time.
	</p>
	<p>
		Thank you for considering our request, and we look forward to seeing you at our wedding in
		Cornwall!
	</p>
	<h1 class="mb-0 text-primary-500 text-center">RSVP</h1>
	<div class="flex items-center justify-center">
		<form
			class="md:w-1/2 rounded px-8 pt-6 pb-8 mb-4"
			name="rsvp-form"
			method="POST"
			data-netlify="true"
			action="/success"
			style=""
			enctype="application/x-www-form-urlencoded"
		>
			<input class="input " type="hidden" name="form-name" value="rsvp-form" />
			<!-- <label class="label" for="name">Name</label> -->
			<input
				class="input m-2 bg-secondary-500 text-primary-500 text-base"
				name="name"
				id="name"
				required
				placeholder="Name"
				type="text"
			/>
			<!-- <label class="label" for="email">Email</label> -->
			<input
				class="input m-2 bg-secondary-500 text-primary-500 text-base"
				name="email"
				id="email"
				required
				placeholder="Email"
				type="email"
			/>
			<!-- <label class="label" for="message">Message</label> -->
			<input
				class="input m-2 bg-secondary-500 text-primary-500 text-base"
				name="message"
				id="message"
				required
				placeholder="Message"
				type="text"
			/>
			<input
				class="input pt-2 pb-2 m-2 bg-primary-400 text-secondary-500 text-lg"
				type="submit"
				value="RSVP"
				style="border-radius: 5px;margin-top: 20px;"
			/>
		</form>
	</div>
</div>

<style>
	@media screen and (max-width: 600px) {
		.background-img {
			background-position: 0px -50px !important;
		}
	}
	.background-img {
		background-position: 0px -200px;
		background-repeat: no-repeat;
		/* -webkit-filter: grayscale(100%);  */
		/* Safari 6.0 - 9.0 */
		/* filter: grayscale(100%); */
	}
	@media screen and (min-width: 1200px) {
		.background-img {
			background-position: 0px -1600px !important;
		}
	}
</style>
