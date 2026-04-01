<script lang="ts">
	import { resolve } from '$app/paths';
	import type { TeamMember } from '$lib/types';

	const team: TeamMember[] = [
		{
			name: 'Welton Carvalho',
			role: 'Sócio-Fundador',
			image: 'https://picsum.photos/seed/team-ana/600/600',
		},
		{
			name: 'Oscar Niemeyer',
			role: 'Diretor de Design',
			image: 'https://picsum.photos/seed/team-carlos/600/600',
		},
		{
			name: 'Napoleão Bonaparte',
			role: 'Coordenador de Projetos',
			image: 'https://picsum.photos/seed/team-sofia/600/600',
		},
		{
			name: 'Ragnar Lodbrok',
			role: 'Diretor Técnico',
			image: 'https://picsum.photos/seed/team-bruno/600/600',
		},
	];

	const values = [
		{
			title: 'Clareza',
			description:
				'Eliminamos o supérfluo para revelar o essencial. Cada detalhe precisa justificar sua existência.',
		},
		{
			title: 'Diálogo',
			description:
				'Arquitetura nunca é monólogo. Ouvimos com atenção clientes, comunidades e o contexto de cada obra.',
		},
		{
			title: 'Ofício',
			description:
				'Do croqui conceitual à textura de um corrimão — precisão e cuidado em todas as escalas.',
		},
		{
			title: 'Permanência',
			description:
				'Construímos para o próximo século, não para a próxima tendência. Atemporal sempre vence o efêmero.',
		},
	];
</script>

<svelte:head>
	<title>Sobre — ARCtects</title>
	<meta
		name="description"
		content="O ARCtects é um escritório de arquitetura fundado em São Paulo em 2015. Conheça nossa filosofia, nossa equipe e os valores que guiam nosso trabalho."
	/>
</svelte:head>

<!-- Cabeçalho -->
<section class="pt-40 pb-0" style="background-color: var(--color-primary);">
	<div class="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
		<p
			class="font-body mb-6 text-[11px] tracking-[0.3em] uppercase"
			style="color: var(--color-cta);"
		>
			O Escritório
		</p>
		<h1
			class="font-display leading-none text-white"
			style="font-size: clamp(3rem, 8vw, 8rem); letter-spacing: -0.02em;"
		>
			Sobre o<br />ARCtects
		</h1>
	</div>
	<img
		src="https://picsum.photos/seed/about-header/1920/700"
		alt="Escritório ARCtects — espaço interno durante sessão de projeto"
		loading="lazy"
		width="1920"
		height="700"
		class="w-full object-cover"
		style="max-height: 60vh; display: block;"
	/>
</section>

<!-- História do escritório -->
<section class="mx-auto max-w-7xl px-6 py-24 md:py-36 lg:px-12">
	<div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-28">
		<div>
			<h2
				class="font-display mb-8 leading-tight"
				style="font-size: clamp(1.8rem, 3.5vw, 3rem); color: var(--color-ink);"
			>
				Um escritório fundado na crença de que a arquitetura transforma vidas
			</h2>
		</div>
		<div class="space-y-5">
			<p
				class="font-body text-sm leading-relaxed font-light"
				style="color: var(--color-secondary);"
			>
				O ARCtects foi fundado em São Paulo em 2015 por Welton Carvalho e Oscar Niemeyer, dois
				arquitetos que compartilhavam uma convicção: o ambiente construído molda não apenas como
				vivemos, mas quem somos. De um único estúdio, o escritório cresceu até se tornar uma equipe
				de quinze pessoas com atuação em arquitetura, interiores e paisagismo.
			</p>
			<p
				class="font-body text-sm leading-relaxed font-light"
				style="color: var(--color-secondary);"
			>
				Nosso portfólio vai de residências íntimas a grandes instituições cívicas — mas a abordagem
				permanece constante. Começamos com uma escuta cuidadosa, avançamos com rigor intelectual e
				chegamos a projetos que parecem inevitáveis. Não modais, não arbitrários. Inevitáveis.
			</p>
			<p
				class="font-body text-sm leading-relaxed font-light"
				style="color: var(--color-secondary);"
			>
				Em 2021, expandimos para um segundo escritório no Rio de Janeiro, aprofundando nossa relação
				com o rico patrimônio arquitetônico do país enquanto atuamos em alguns dos projetos mais
				ambiciosos do Brasil contemporâneo.
			</p>
		</div>
	</div>
</section>

<!-- Valores -->
<section class="py-24 md:py-28" style="background-color: var(--color-warm-gray);">
	<div class="mx-auto max-w-7xl px-6 lg:px-12">
		<p
			class="font-body mb-4 text-[11px] tracking-[0.25em] uppercase"
			style="color: var(--color-muted);"
		>
			Filosofia
		</p>
		<h2
			class="font-display mb-16"
			style="font-size: clamp(2rem, 4vw, 3.5rem); color: var(--color-ink);"
		>
			Nossos Valores
		</h2>
		<div class="grid grid-cols-1 gap-0 md:grid-cols-2">
			{#each values as value, i}
				<div
					class="py-10"
					style="{i < 2 ? 'border-bottom: 1px solid rgba(51,65,85,0.2);' : ''} {i % 2 === 0
						? 'border-right: 1px solid rgba(51,65,85,0.2); padding-right: 2rem;'
						: 'padding-left: 2rem;'}"
				>
					<span
						class="font-body text-[10px] tracking-[0.25em] uppercase"
						style="color: var(--color-cta);"
					>
						0{i + 1}
					</span>
					<h3 class="font-display mt-3 mb-4 text-2xl" style="color: var(--color-primary);">
						{value.title}
					</h3>
					<p
						class="font-body text-sm leading-relaxed font-light"
						style="color: var(--color-secondary); max-width: 42ch;"
					>
						{value.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Equipe -->
<section class="mx-auto max-w-7xl px-6 py-24 md:py-36 lg:px-12">
	<p
		class="font-body mb-4 text-[11px] tracking-[0.25em] uppercase"
		style="color: var(--color-muted);"
	>
		Pessoas
	</p>
	<h2
		class="font-display mb-16"
		style="font-size: clamp(2rem, 4vw, 3.5rem); color: var(--color-ink);"
	>
		A Equipe
	</h2>
	<div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-10">
		{#each team as member}
			<div>
				<div class="mb-5 overflow-hidden" style="aspect-ratio: 3/4;">
					<img
						src={member.image}
						alt="{member.name} — {member.role} no ARCtects"
						loading="lazy"
						width="600"
						height="800"
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
					/>
				</div>
				<h3 class="font-display text-base" style="color: var(--color-ink);">{member.name}</h3>
				<p class="font-body mt-1 text-xs font-light" style="color: var(--color-muted);">
					{member.role}
				</p>
			</div>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="py-24" style="background-color: var(--color-primary);">
	<div class="mx-auto max-w-7xl px-6 text-center lg:px-12">
		<h2 class="font-display mb-6 text-white" style="font-size: clamp(2rem, 4vw, 3.5rem);">
			Vamos construir algo juntos?
		</h2>
		<p
			class="font-body mx-auto mb-10 text-sm font-light"
			style="color: rgba(255,255,255,0.6); max-width: 48ch;"
		>
			Adoraríamos ouvir sobre o seu projeto. Vamos iniciar uma conversa.
		</p>
		<a
			href={resolve('/contact')}
			class="font-body inline-flex cursor-pointer items-center gap-3 px-8 py-4 text-[11px] tracking-[0.2em] text-white uppercase transition-all duration-300"
			style="border: 1px solid rgba(255,255,255,0.35);"
			onmouseenter={(e) => {
				const el = e.currentTarget as HTMLElement;
				el.style.borderColor = 'var(--color-cta)';
				el.style.color = 'var(--color-cta)';
			}}
			onmouseleave={(e) => {
				const el = e.currentTarget as HTMLElement;
				el.style.borderColor = 'rgba(255,255,255,0.35)';
				el.style.color = 'white';
			}}
		>
			Entre em Contato
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
</section>
