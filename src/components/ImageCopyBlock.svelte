<script lang="ts">
	export let imageUrl: string;
	export let title: string;
	export let bodyText: string;
</script>

<div class="flex flex-col md:flex-row">
	<div class="md:w-1/2 max-w-sm">
		<img src={imageUrl} alt={title} class="w-full" />
	</div>
	<div class="md:w-1/2 p-4">
		<h2 class="text-2xl text-primary-600 mb-4">{title}</h2>
		<p class="text-gray-600">{bodyText}</p>
	</div>
</div>
