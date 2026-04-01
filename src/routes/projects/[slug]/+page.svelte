<script lang="ts">
	import { resolve } from '$app/paths';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { project, related } = $derived(data);
	let activeImage = $state(0);

	function categoryLabel(cat: string): string {
		if (cat === 'Residential') return 'Residencial';
		if (cat === 'Commercial') return 'Comercial';
		return 'Cultural';
	}
</script>

<svelte:head>
	<title>{project.title} — ARCtects</title>
	<meta name="description" content={project.shortDescription} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden" style="height: 100svh; min-height: 560px;">
	<img
		src={project.heroImage}
		alt="{project.title} — {project.location}"
		loading="eager"
		fetchpriority="high"
		width="1600"
		height="900"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, rgba(2,6,23,0.8) 0%, rgba(2,6,23,0.3) 50%, rgba(2,6,23,0.1) 100%);"
	></div>

	<div class="absolute right-0 bottom-0 left-0 z-10 mx-auto max-w-7xl px-6 pb-14 md:pb-20 lg:px-12">
		<div class="mb-5 flex flex-wrap items-center gap-3">
			<span
				class="font-body px-3 py-1.5 text-[10px] tracking-[0.2em] text-white uppercase"
				style="background-color: rgba(202,138,4,0.9); letter-spacing: 0.2em;"
			>
				{categoryLabel(project.category)}
			</span>
			<span class="font-body text-xs text-white/60">{project.year}</span>
			<span class="font-body text-xs text-white/60">·</span>
			<span class="font-body text-xs text-white/60">{project.location}</span>
		</div>
		<h1
			class="font-display leading-tight text-white"
			style="font-size: clamp(2.5rem, 7vw, 7rem); letter-spacing: -0.02em;"
		>
			{project.title}
		</h1>
	</div>
</section>

<!-- Descrição do projeto -->
<section class="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-12">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-20">
		<div class="lg:col-span-2">
			<p
				class="font-body text-base leading-[1.85] font-light lg:text-lg"
				style="color: var(--color-secondary); max-width: 68ch;"
			>
				{project.description}
			</p>
		</div>

		<!-- Ficha técnica -->
		<div class="space-y-8">
			{#each [{ label: 'Projeto', value: project.title }, { label: 'Tipologia', value: categoryLabel(project.category) }, { label: 'Ano', value: String(project.year) }, { label: 'Localização', value: project.location }] as meta}
				<div>
					<p
						class="font-body mb-1.5 text-[10px] tracking-[0.2em] uppercase"
						style="color: var(--color-muted);"
					>
						{meta.label}
					</p>
					<p class="font-display text-base" style="color: var(--color-ink);">{meta.value}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Galeria -->
<section class="mx-auto max-w-7xl px-6 pb-20 md:pb-28 lg:px-12">
	<!-- Imagem principal -->
	<div class="relative mb-4 overflow-hidden" style="aspect-ratio: 16/9;">
		<img
			src={project.images[activeImage]}
			alt="{project.title} — vista {activeImage + 1}"
			loading="lazy"
			width="1200"
			height="675"
			class="h-full w-full object-cover transition-opacity duration-300"
		/>
		{#if project.images.length > 1}
			<button
				class="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center transition-colors duration-200"
				style="background-color: rgba(15,23,42,0.6);"
				onclick={() =>
					(activeImage = (activeImage - 1 + project.images.length) % project.images.length)}
				aria-label="Imagem anterior"
				onmouseenter={(e) =>
					((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(15,23,42,0.9)')}
				onmouseleave={(e) =>
					((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(15,23,42,0.6)')}
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					stroke-width="1.5"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
			</button>
			<button
				class="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center transition-colors duration-200"
				style="background-color: rgba(15,23,42,0.6);"
				onclick={() => (activeImage = (activeImage + 1) % project.images.length)}
				aria-label="Próxima imagem"
				onmouseenter={(e) =>
					((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(15,23,42,0.9)')}
				onmouseleave={(e) =>
					((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(15,23,42,0.6)')}
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					stroke-width="1.5"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/>
				</svg>
			</button>
			<div
				class="font-body absolute right-4 bottom-4 text-xs text-white"
				style="background-color: rgba(15,23,42,0.6); padding: 4px 10px;"
			>
				{activeImage + 1} / {project.images.length}
			</div>
		{/if}
	</div>

	<!-- Miniaturas -->
	<div class="grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));">
		{#each project.images as img, i}
			<button
				class="relative cursor-pointer overflow-hidden transition-opacity duration-200"
				style="aspect-ratio: 4/3; {i === activeImage
					? 'opacity: 1; outline: 2px solid var(--color-cta);'
					: 'opacity: 0.55;'}"
				onclick={() => (activeImage = i)}
				aria-label="Ver imagem {i + 1}"
			>
				<img
					src={img}
					alt="{project.title} — miniatura {i + 1}"
					loading="lazy"
					width="400"
					height="300"
					class="h-full w-full object-cover"
				/>
			</button>
		{/each}
	</div>
</section>

<!-- Projetos relacionados -->
{#if related.length > 0}
	<section class="py-20 md:py-28" style="background-color: var(--color-warm-gray);">
		<div class="mx-auto max-w-7xl px-6 lg:px-12">
			<p
				class="font-body mb-4 text-[11px] tracking-[0.25em] uppercase"
				style="color: var(--color-muted);"
			>
				Relacionados
			</p>
			<h2
				class="font-display mb-12"
				style="font-size: clamp(1.8rem, 4vw, 3.5rem); color: var(--color-ink);"
			>
				Mais Projetos {categoryLabel(project.category)}s
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each related as rel}
					<ProjectCard project={rel} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Link de volta -->
<div class="mx-auto max-w-7xl px-6 py-12 lg:px-12">
	<a
		href={resolve('/projects')}
		class="font-body inline-flex cursor-pointer items-center gap-3 text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
		style="color: var(--color-secondary);"
		onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-ink)')}
		onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)')}
	>
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
			/>
		</svg>
		Todos os Projetos
	</a>
</div>
