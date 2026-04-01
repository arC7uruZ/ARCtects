<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Project } from '$lib/types';

	interface Props {
		project: Project;
		eager?: boolean;
	}

	let { project, eager = false }: Props = $props();
</script>

<a
	href={resolve(`/projects/${project.slug}`)}
	class="group block cursor-pointer"
	aria-label="Ver projeto {project.title}"
>
	<!-- Imagem -->
	<div class="relative overflow-hidden" style="aspect-ratio: 4/3;">
		<img
			src={project.heroImage}
			alt="{project.title} — {project.location}"
			loading={eager ? 'eager' : 'lazy'}
			width="1200"
			height="800"
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
		/>
		<!-- Overlay ao passar o mouse -->
		<div
			class="absolute inset-0 transition-opacity duration-500"
			style="background-color: rgba(15,23,42,0);"
			onmouseenter={(e) =>
				((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(15,23,42,0.35)')}
			onmouseleave={(e) =>
				((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(15,23,42,0)')}
			aria-hidden="true"
		></div>
		<!-- Categoria -->
		<div
			class="font-body absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white uppercase"
			style="background-color: rgba(15,23,42,0.6); letter-spacing: 0.2em;"
		>
			{#if project.category === 'Residential'}
				Residencial
			{:else if project.category === 'Commercial'}
				Comercial
			{:else}
				Cultural
			{/if}
		</div>
	</div>

	<!-- Informações -->
	<div class="mt-4 pb-2">
		<p
			class="font-body text-[11px] tracking-[0.18em] uppercase"
			style="color: var(--color-muted); letter-spacing: 0.18em;"
		>
			{project.location} — {project.year}
		</p>
		<h3
			class="font-display mt-1 text-xl transition-colors duration-300 lg:text-2xl"
			style="color: var(--color-ink);"
			onmouseenter={(e) =>
				((e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)')}
			onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-ink)')}
		>
			{project.title}
		</h3>
		<p class="font-body mt-1.5 line-clamp-2 text-sm font-light" style="color: var(--color-muted);">
			{project.shortDescription}
		</p>
	</div>
</a>
