<script lang="ts">
	export let question: string;
	export let answer: string;
	export let isLast: string;
</script>

<div>
	<h3 class="text-4xl lg:text-6xl   text-primary-600 text-left leading-tight mt-4">
		{question}
	</h3>
	<p class="text-xl lg:text-2xl  leading-tight mb-6   text-primary-600 text-left">
		{answer}
	</p>

	{#if isLast === 'yes'}
		<span />
	{:else}
		<hr style="border-top: 1px solid #c08d43;" />
	{/if}
</div>
