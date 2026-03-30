<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	$effect(() => {
		// Reactive dependency — closes menu on navigation
		const _path = page.url.pathname;
		menuOpen = false;
	});

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 60;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	const links = [
		{ href: '/projects', label: 'Projetos' },
		{ href: '/about', label: 'Sobre' },
		{ href: '/contact', label: 'Contato' }
	];

	function isActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
	style={scrolled || menuOpen
		? 'background-color: var(--color-primary);'
		: 'background-color: transparent;'}
>
	<nav
		class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20"
		aria-label="Navegação principal"
	>
		<!-- Logo -->
		<a
			href="/"
			class="font-display text-xl font-semibold tracking-widest text-white transition-colors duration-200 hover:text-[var(--color-cta)]"
		>
			ARC<span class="font-light">tects</span>
		</a>

		<!-- Desktop nav -->
		<ul class="hidden md:flex items-center gap-12" role="list">
			{#each links as link}
				<li>
					<a
						href={link.href}
						aria-current={isActive(link.href) ? 'page' : undefined}
						class="font-body text-xs font-light tracking-[0.2em] uppercase transition-colors duration-200"
						style={isActive(link.href) ? 'color: white;' : 'color: rgba(255,255,255,0.7);'}
						onmouseenter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
						onmouseleave={(e) =>
							((e.currentTarget as HTMLElement).style.color = isActive(link.href)
								? 'white'
								: 'rgba(255,255,255,0.7)')}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden flex flex-col justify-between w-6 h-[18px] cursor-pointer"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
			aria-expanded={menuOpen}
		>
			<span
				class="block h-px w-full bg-white transition-all duration-300 origin-center"
				style={menuOpen ? 'transform: translateY(8.5px) rotate(45deg)' : ''}
			></span>
			<span
				class="block h-px w-full bg-white transition-opacity duration-200"
				style={menuOpen ? 'opacity: 0' : ''}
			></span>
			<span
				class="block h-px w-full bg-white transition-all duration-300 origin-center"
				style={menuOpen ? 'transform: translateY(-8.5px) rotate(-45deg)' : ''}
			></span>
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div
			class="md:hidden px-6 pb-10 pt-4"
			style="background-color: var(--color-primary); border-top: 1px solid rgba(255,255,255,0.1);"
		>
			<ul class="flex flex-col gap-8" role="list">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="font-display text-3xl text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
							onclick={() => (menuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
