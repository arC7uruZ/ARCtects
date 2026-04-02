<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		text: string;
	}

	let { text, ...others }: Props = $props();

	const letters = $derived(text.split(''));

</script>

<a class="group flex cursor-pointer items-center gap-1 overflow-hidden" {...others}>
	<div class="size-3 rounded-full bg-white" aria-hidden="true"></div>
	<div class="flex h-6 overflow-hidden" aria-hidden="true">
		{#each letters as letter, i}
			<div
				aria-hidden="true"
				class="font-body relative bottom-0 -mx-[.6px] flex flex-col gap-0.5 text-xl font-light text-white uppercase transition-transform duration-400 group-hover:-translate-y-8"
				style="transition-delay: {i * 40}ms;"
			>
				<div aria-hidden="true">{letter}</div>
				<div aria-hidden="true">{letter}</div>
			</div>
		{/each}
	</div>
</a>
