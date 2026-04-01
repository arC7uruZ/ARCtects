<script lang="ts">
	import type { Category } from '$lib/types';

	interface Props {
		selected: Category;
		onselect: (cat: Category) => void;
		counts: Record<Category, number>;
	}

	let { selected, onselect, counts }: Props = $props();

	const categories: { value: Category; label: string }[] = [
		{ value: 'All', label: 'Todos' },
		{ value: 'Residential', label: 'Residencial' },
		{ value: 'Commercial', label: 'Comercial' },
		{ value: 'Cultural', label: 'Cultural' },
	];
</script>

<div
	class="flex flex-wrap gap-6 md:gap-10"
	role="group"
	aria-label="Filtrar projetos por categoria"
>
	{#each categories as cat}
		<button
			class="group font-body flex cursor-pointer items-center gap-2 pb-1 text-[11px] tracking-[0.2em] uppercase transition-all duration-200"
			style={selected === cat.value
				? 'color: var(--color-ink); border-bottom: 1px solid var(--color-ink);'
				: 'color: var(--color-muted); border-bottom: 1px solid transparent;'}
			onclick={() => onselect(cat.value)}
			aria-pressed={selected === cat.value}
		>
			{cat.label}
			<span
				class="text-[10px] transition-opacity duration-200"
				style={selected === cat.value ? 'opacity: 1;' : 'opacity: 0.5;'}
			>
				({counts[cat.value]})
			</span>
		</button>
	{/each}
</div>
