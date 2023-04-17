<script lang="ts">
</script>

<header class="bg-cover background-img" style="background-image: url('/images/coast.jpg');">
	<div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-0" />
	<div class="container mx-auto py-64 px-4 relative text-center">
		<!-- <h1 class="text-4xl lg:text-6xl  text-white leading-tight mb-4">Sucess <IconChecks /></h1>
		<p class="text-xl lg:text-2xl text-white leading-tight mb-8 italic">
			You have submitted an RSVP, thank you!
		</p> -->
	</div>
</header>

<div class="container mx-auto p-8 my-8 text-gray-600 text-left" />
<h1 class="mb-0 text-primary-500 text-center">Your Details</h1>
<div class="flex items-center justify-center">
	<form
		class="md:w-1/2 rounded px-8 pt-6 pb-8 mb-4 "
		name="your-details-form"
		method="POST"
		data-netlify="true"
		action="/success"
		style=""
		enctype="application/x-www-form-urlencoded"
	>
		<input class="input " type="hidden" name="form-name" value="rsvp-form" />
		<h2 class="mb-0 text-primary-500 text-left">About You</h2>
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
		<!-- <label class="label" for="Town">Town</label> -->
		<h2 class="mb-0 text-primary-500 text-left">Your Address</h2>
		<input
			class="input m-2 bg-secondary-500 text-primary-500 text-base"
			name="Street"
			id="Street"
			required
			placeholder="Street / House Name"
			type="text"
		/>
		<input
			class="input m-2 bg-secondary-500 text-primary-500 text-base"
			name="Town"
			id="Town"
			required
			placeholder="Town"
			type="text"
		/>
		<input
			class="input m-2 bg-secondary-500 text-primary-500 text-base"
			name="City"
			id="City"
			required
			placeholder="City"
			type="text"
		/>
		<input
			class="input m-2 bg-secondary-500 text-primary-500 text-base"
			name="County"
			id="County"
			required
			placeholder="County"
			type="text"
		/>
		<input
			class="input m-2 bg-secondary-500 text-primary-500 text-base"
			name="Post Code"
			id="PostCode"
			required
			placeholder="Post Code"
			type="text"
		/>
		<input
			class="input pt-2 pb-2 m-2 bg-primary-400 text-secondary-500 text-lg"
			type="submit"
			value="SEND"
			style="border-radius: 5px;margin-top: 20px;"
		/>
	</form>
</div>
<p class="text-xl lg:text-2xl  leading-tight mb-8  text-primary-500 text-center" />
<p class="text-xl lg:text-2xl  leading-tight mb-8  text-primary-500 text-center" />

<style>
	.background-img {
		background-position: 0px 0px !important;
		background-repeat: no-repeat;
		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		filter: grayscale(100%);
	}
	@media screen and (max-width: 600px) {
		.background-img {
			background-position: 0px 0px !important;
		}
	}

	@media screen and (min-width: 1100px) {
		.background-img {
			background-position: 0px -450px !important;
		}
	}
</style>
