<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import type { Category } from '$lib/types';

	let selectedCategory = $state<Category>('All');

	let filtered = $derived(
		selectedCategory === 'All'
			? projects
			: projects.filter((p) => p.category === selectedCategory)
	);

	const counts: Record<Category, number> = {
		All: projects.length,
		Residential: projects.filter((p) => p.category === 'Residential').length,
		Commercial: projects.filter((p) => p.category === 'Commercial').length,
		Cultural: projects.filter((p) => p.category === 'Cultural').length
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
<div class="pt-40 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
	<p
		class="font-body text-[11px] tracking-[0.3em] uppercase mb-4"
		style="color: var(--color-muted);"
	>
		Portfólio
	</p>
	<h1
		class="font-display leading-none mb-12"
		style="font-size: clamp(3rem, 8vw, 8rem); color: var(--color-ink); letter-spacing: -0.02em;"
	>
		Todos os<br />Projetos
	</h1>
	<CategoryFilter selected={selectedCategory} {counts} onselect={(cat) => (selectedCategory = cat)} />
</div>

<!-- Divisor -->
<div class="max-w-7xl mx-auto px-6 lg:px-12">
	<hr style="border-color: var(--color-warm-gray);" />
</div>

<!-- Grade de projetos -->
<section class="max-w-7xl mx-auto px-6 lg:px-12 py-12 pb-32">
	{#if filtered.length === 0}
		<p class="font-body text-center py-24" style="color: var(--color-muted);">
			Nenhum projeto nesta categoria ainda.
		</p>
	{:else}
		<div class="columns-1 md:columns-2 gap-8 lg:gap-12">
			{#each filtered as project, i}
				<div class="mb-8 lg:mb-12 break-inside-avoid">
					<ProjectCard {project} eager={i < 2} />
				</div>
			{/each}
		</div>
	{/if}
</section>
