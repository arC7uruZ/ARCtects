<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import type { Category } from '$lib/types';

	let selectedCategory = $state<Category>('All');

	let filtered = $derived(
		selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory)
	);

	const counts: Record<Category, number> = {
		All: projects.length,
		Residential: projects.filter((p) => p.category === 'Residential').length,
		Commercial: projects.filter((p) => p.category === 'Commercial').length,
		Cultural: projects.filter((p) => p.category === 'Cultural').length,
	};
</script>

<svelte:head>
	<title>Projetos — ARCtects</title>
	<meta
		name="description"
		content="Explore o portfólio de projetos residenciais, comerciais e culturais do ARCtects em todo o Brasil."
	/>
</svelte:head>

<!-- Cabeçalho da página -->
<div class="mx-auto max-w-7xl px-6 pt-40 pb-16 lg:px-12">
	<p
		class="font-body mb-4 text-[11px] tracking-[0.3em] uppercase"
		style="color: var(--color-muted);"
	>
		Portfólio
	</p>
	<h1
		class="font-display mb-12 leading-none"
		style="font-size: clamp(3rem, 8vw, 8rem); color: var(--color-ink); letter-spacing: -0.02em;"
	>
		Todos os<br />Projetos
	</h1>
	<CategoryFilter
		selected={selectedCategory}
		{counts}
		onselect={(cat) => (selectedCategory = cat)}
	/>
</div>

<!-- Divisor -->
<div class="mx-auto max-w-7xl px-6 lg:px-12">
	<hr style="border-color: var(--color-warm-gray);" />
</div>

<!-- Grade de projetos -->
<section class="mx-auto max-w-7xl px-6 py-12 pb-32 lg:px-12">
	{#if filtered.length === 0}
		<p class="font-body py-24 text-center" style="color: var(--color-muted);">
			Nenhum projeto nesta categoria ainda.
		</p>
	{:else}
		<div class="columns-1 gap-8 md:columns-2 lg:gap-12">
			{#each filtered as project, i}
				<div class="mb-8 break-inside-avoid lg:mb-12">
					<ProjectCard {project} eager={i < 2} />
				</div>
			{/each}
		</div>
	{/if}
</section>
