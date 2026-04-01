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
<div style="height: 100svh; min-height: 600px;"></div>
<section
	class="fixed -z-10 top-0 flex w-full items-end overflow-hidden"
	style="height: 100svh; min-height: 600px;"
>
	<video
		src="videos/bg.mp4"
		aria-hidden="true"
		autoplay
		muted
		loop
		class="absolute inset-0 size-full object-cover brightness-90"
	></video>
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.35) 60%, rgba(2,6,23,0.2) 100%);"
	></div>

	<div
		class="relative z-10 flex w-full items-center justify-between px-6 pb-10 lg:px-12"
	>
		<h1
			class="font-display font-regular leading-none text-[clamp(3.2rem,9vw,9.5rem)] tracking-tighter text-white uppercase"
		>
			Espaço<br />Como Arte
		</h1>
		<p class="mr-40 hidden text-white lg:block">São Paulo - Rio de Janeiro</p>
	</div>

	<!-- Indicador de rolagem -->
	<div class="absolute right-8 bottom-8 z-10 flex flex-col items-center gap-2 md:right-12">
		<span
			class="font-body text-[9px] tracking-[0.3em] uppercase"
			style="color: rgba(255,255,255,0.5); writing-mode: vertical-rl;">Rolar</span
		>
		<div class="h-12 w-px overflow-hidden" style="background-color: rgba(255,255,255,0.2);">
			<div
				class="h-full w-full"
				style="background-color: rgba(255,255,255,0.6); animation: scrollLine 2s ease-in-out infinite;"
			></div>
		</div>
	</div>
</section>

<div class="relative z-10">
	<!-- Projetos em Destaque -->
	<section class="bg-white py-24 md:py-36">
		<div class="mx-auto max-w-7xl px-6 lg:px-12">
			<div class="mb-16 flex items-end justify-between md:mb-20">
				<div>
					<p
						class="font-body mb-3 text-[11px] tracking-[0.25em] uppercase"
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
					href={resolve('/projects')}
					class="font-body hidden cursor-pointer items-center gap-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 md:flex"
					style="color: var(--color-secondary);"
					onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-ink)')}
					onmouseleave={(e) =>
						((e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)')}
				>
					Todos os Projetos
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
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
				{#each featuredProjects.slice(0, 4) as project, i}
					<ProjectCard {project} eager={i === 0} />
				{/each}
			</div>

			<div class="mt-12 md:hidden">
				<a
					href={resolve('/projects')}
					class="font-body flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase"
					style="color: var(--color-secondary);"
				>
					Todos os Projetos
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
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<!-- Teaser Sobre -->
	<section class="py-24 md:py-36" style="background-color: var(--color-primary);">
		<div class="mx-auto max-w-7xl px-6 lg:px-12">
			<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
				<div>
					<p
						class="font-body mb-6 text-[11px] tracking-[0.25em] uppercase"
						style="color: var(--color-cta);"
					>
						Sobre o Escritório
					</p>
					<h2
						class="font-display mb-8 leading-tight text-white"
						style="font-size: clamp(2rem, 4.5vw, 3.75rem);"
					>
						Acreditamos que arquitetura é a mais humana de todas as artes
					</h2>
					<p
						class="font-body mb-4 text-sm leading-relaxed font-light"
						style="color: rgba(255,255,255,0.65);"
					>
						Fundado em São Paulo em 2015, o ARCtects cresceu e se tornou um dos escritórios de
						arquitetura mais respeitados do Brasil. Nosso trabalho abrange projetos residenciais,
						comerciais e culturais por todo o país, cada um enraizado na crença de que a grande
						arquitetura transforma não apenas o espaço, mas as pessoas que o habitam.
					</p>
					<p
						class="font-body mb-10 text-sm leading-relaxed font-light"
						style="color: rgba(255,255,255,0.65);"
					>
						Abordamos cada projeto como um diálogo singular — entre programa e sítio, entre cliente
						e contexto, entre passado e futuro. O resultado é uma arquitetura de clareza, substância
						e beleza duradoura.
					</p>
					<a
						href={resolve('/about')}
						class="font-body inline-flex cursor-pointer items-center gap-3 text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
						style="color: var(--color-cta);"
						onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
						onmouseleave={(e) =>
							((e.currentTarget as HTMLElement).style.color = 'var(--color-cta)')}
					>
						Saiba Mais
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
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							/>
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
						class="absolute -bottom-6 -left-6 hidden h-24 w-24 lg:block"
						style="border: 1px solid var(--color-cta); opacity: 0.4;"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Números -->
	<section class="py-24" style="background-color: var(--color-warm-gray);">
		<div class="mx-auto max-w-7xl px-6 lg:px-12">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
				{#each [{ value: '10+', label: 'Anos de prática' }, { value: '60+', label: 'Projetos concluídos' }, { value: '12', label: 'Prêmios recebidos' }, { value: '3', label: 'Países' }] as stat}
					<div class="text-center md:text-left">
						<p
							class="font-display mb-3 leading-none font-semibold"
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
</div>
