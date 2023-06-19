<script lang="ts">
</script>

<header class="bg-cover background-img" style="background-image: url('/images/coast.jpg');">
	<div class="container mx-auto py-32 mb-4  px-4 relative text-center">
		<h1 class="text-4xl lg:text-6xl leading-tight mb-4">&nbsp;</h1>
		<!-- <h1 class="text-4xl lg:text-6xl leading-tight mb-4">Your Details</h1>
		<h3 class="text-xl lg:text-2xl leading-tight mb-8 ">
			Please share your address so we can send your invite in the post
		</h3> 
		</h1> -->
	</div>
</header>

<h1 class="mb-0 text-primary-500 text-center my-16">Your Details</h1>
<p class="text-xl lg:text-2xl mb-0 text-primary-500 text-center text-primary-500 my-6">
	Please share your address so we can send your invite in the post
</p>
<div class="flex items-center justify-center">
	<form
		class="md:w-1/2 rounded px-8 pt-2 pb-8 mb-4 "
		name="your-details-form"
		method="POST"
		data-netlify="true"
		action="/success"
		style=""
		enctype="application/x-www-form-urlencoded"
	>
		<input class="input " type="hidden" name="form-name" value="your-details-form" />
		<!-- <label class="label" for="name">Name</label> -->
		<br />
		<!-- <h2 class="mb-0 text-primary-500 text-left">About You</h2> -->
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
		<!-- <br /><br /> -->
		<!-- <h2 class="mb-0 text-primary-500 text-center">Your Address</h2> -->

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
			name="country"
			id="country"
			required
			placeholder="Country"
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
		background-position: 0px 0px;
		background-repeat: no-repeat;
		/* -webkit-filter: grayscale(100%);  */
		/* Safari 6.0 - 9.0 */
		/* filter: grayscale(100%); */
	}
	@media screen and (max-width: 900px) {
		.background-img {
			background-position: 0px 0px !important;
		}
	}

	@media screen and (min-width: 1400px) {
		.background-img {
			background-position: 0px -700px !important;
			/* min-height: 700px; */
		}
	}
</style>
