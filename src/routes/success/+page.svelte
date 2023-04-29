<script lang="ts">
	import { IconChecks } from '@tabler/icons-svelte';
</script>

<header
	class="bg-cover bg-center relative background-img"
	style="background-image: url('images/ali-artie-kitchen.png');"
>
	<div class="container mx-auto py-32 px-4 relative text-center min-h-[90vh]">
		<h1 class="text-6xl  text-white leading-tight mt-16 mb-4">Sucess <IconChecks /></h1>
		<p class="text-xl lg:text-2xl text-white leading-tight mb-8 italic">
			You have successfully submitted the form.
			<br />
			We will be in touch soon.
		</p>
	</div>
</header>

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

	@media screen and (min-width: 2000px) {
		.background-img {
			background-position: 0px -1200px !important;
			/* min-height: 700px; */
		}
	}
</style>
