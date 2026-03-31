<script lang="ts">
	import { resolve } from '$app/paths';
import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { featuredProjects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>ARCtects — Escritório de Arquitetura</title>
	<meta
		name="description"
		content="ARCtects é um escritório de arquitetura sediado em São Paulo, criando espaços ousados e reflexivos que redefinem a relação entre as pessoas e o ambiente construído."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative flex items-end overflow-hidden" style="height: 100svh; min-height: 600px;">
	<img
		src="https://picsum.photos/seed/arc-hero-main/1920/1080"
		alt="ARCtects — detalhe arquitetônico de um projeto em destaque"
		loading="eager"
		fetchpriority="high"
		width="1920"
		height="1080"
		class="absolute inset-0 w-full h-full object-cover"
	/>
	<div class="absolute inset-0" style="background: linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.35) 60%, rgba(2,6,23,0.2) 100%);"></div>

	<div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
		<p
			class="font-body font-light text-[11px] tracking-[0.35em] uppercase mb-6"
			style="color: var(--color-cta); letter-spacing: 0.35em;"
		>
			Escritório de Arquitetura — São Paulo, Brasil
		</p>
		<h1
			class="font-display font-bold text-white leading-none mb-10"
			style="font-size: clamp(3.2rem, 9vw, 9.5rem); letter-spacing: -0.02em;"
		>
			Espaço<br />Como Arte
		</h1>
		<a
			href={resolve("/projects")}
			class="inline-flex items-center gap-4 font-body text-[11px] tracking-[0.25em] uppercase text-white transition-all duration-300 cursor-pointer px-8 py-4"
			style="border: 1px solid rgba(255,255,255,0.4);"
			onmouseenter={(e) => {
				const el = e.currentTarget as HTMLElement;
				el.style.borderColor = 'white';
				el.style.backgroundColor = 'rgba(255,255,255,0.08)';
			}}
			onmouseleave={(e) => {
				const el = e.currentTarget as HTMLElement;
				el.style.borderColor = 'rgba(255,255,255,0.4)';
				el.style.backgroundColor = 'transparent';
			}}
		>
			Ver Projetos
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
			</svg>
		</a>
	</div>

	<!-- Indicador de rolagem -->
	<div class="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 z-10">
		<span
			class="font-body text-[9px] tracking-[0.3em] uppercase"
			style="color: rgba(255,255,255,0.5); writing-mode: vertical-rl;"
		>Rolar</span>
		<div class="w-px h-12 overflow-hidden" style="background-color: rgba(255,255,255,0.2);">
			<div
				class="w-full h-full"
				style="background-color: rgba(255,255,255,0.6); animation: scrollLine 2s ease-in-out infinite;"
			></div>
		</div>
	</div>
</section>

<style>
	@keyframes scrollLine {
		0% { transform: translateY(-100%); }
		100% { transform: translateY(200%); }
	}
</style>

<!-- Projetos em Destaque -->
<section class="py-24 md:py-36">
	<div class="max-w-7xl mx-auto px-6 lg:px-12">
		<div class="flex items-end justify-between mb-16 md:mb-20">
			<div>
				<p
					class="font-body text-[11px] tracking-[0.25em] uppercase mb-3"
					style="color: var(--color-muted);"
				>
					Portfólio
				</p>
				<h2
					class="font-display leading-tight"
					style="font-size: clamp(2rem, 5vw, 4rem); color: var(--color-ink);"
				>
					Trabalhos<br />Selecionados
				</h2>
			</div>
			<a
				href={resolve("/projects")}
				class="hidden md:flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer"
				style="color: var(--color-secondary);"
				onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-ink)')}
				onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)')}
			>
				Todos os Projetos
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
				</svg>
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
			{#each featuredProjects.slice(0, 4) as project, i}
				<ProjectCard {project} eager={i === 0} />
			{/each}
		</div>

		<div class="mt-12 md:hidden">
			<a
				href={resolve("/projects")}
				class="flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase"
				style="color: var(--color-secondary);"
			>
				Todos os Projetos
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Teaser Sobre -->
<section class="py-24 md:py-36" style="background-color: var(--color-primary);">
	<div class="max-w-7xl mx-auto px-6 lg:px-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
			<div>
				<p
					class="font-body text-[11px] tracking-[0.25em] uppercase mb-6"
					style="color: var(--color-cta);"
				>
					Sobre o Escritório
				</p>
				<h2
					class="font-display text-white leading-tight mb-8"
					style="font-size: clamp(2rem, 4.5vw, 3.75rem);"
				>
					Acreditamos que arquitetura é a mais humana de todas as artes
				</h2>
				<p class="font-body text-sm font-light leading-relaxed mb-4" style="color: rgba(255,255,255,0.65);">
					Fundado em São Paulo em 2015, o ARCtects cresceu e se tornou um dos escritórios de
					arquitetura mais respeitados do Brasil. Nosso trabalho abrange projetos residenciais,
					comerciais e culturais por todo o país, cada um enraizado na crença de que a grande
					arquitetura transforma não apenas o espaço, mas as pessoas que o habitam.
				</p>
				<p class="font-body text-sm font-light leading-relaxed mb-10" style="color: rgba(255,255,255,0.65);">
					Abordamos cada projeto como um diálogo singular — entre programa e sítio, entre cliente
					e contexto, entre passado e futuro. O resultado é uma arquitetura de clareza,
					substância e beleza duradoura.
				</p>
				<a
					href={resolve("/about")}
					class="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200"
					style="color: var(--color-cta);"
					onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
					onmouseleave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-cta)')}
				>
					Saiba Mais
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
				</a>
			</div>
			<div class="relative">
				<img
					src="https://picsum.photos/seed/about-teaser/800/1000"
					alt="Escritório ARCtects — fotografia arquitetônica"
					loading="lazy"
					width="800"
					height="1000"
					class="w-full object-cover"
					style="aspect-ratio: 4/5;"
				/>
				<div
					class="absolute -bottom-6 -left-6 w-24 h-24 hidden lg:block"
					style="border: 1px solid var(--color-cta); opacity: 0.4;"
				></div>
			</div>
		</div>
	</div>
</section>

<!-- Números -->
<section class="py-24" style="background-color: var(--color-warm-gray);">
	<div class="max-w-7xl mx-auto px-6 lg:px-12">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
			{#each [
				{ value: '10+', label: 'Anos de prática' },
				{ value: '60+', label: 'Projetos concluídos' },
				{ value: '12', label: 'Prêmios recebidos' },
				{ value: '3', label: 'Países' }
			] as stat}
				<div class="text-center md:text-left">
					<p
						class="font-display font-semibold leading-none mb-3"
						style="font-size: clamp(2.5rem, 5vw, 4rem); color: var(--color-primary);"
					>
						{stat.value}
					</p>
					<p
						class="font-body text-xs tracking-[0.15em] uppercase"
						style="color: var(--color-secondary);"
					>
						{stat.label}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
