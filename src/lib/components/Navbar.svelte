<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

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
		{ href: resolve('/projects'), label: 'Projetos' },
		{ href: resolve('/about'), label: 'Sobre' },
		{ href: resolve('/contact'), label: 'Contato' },
	];

	function isActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
	style={scrolled || menuOpen
		? 'background-color: var(--color-primary);'
		: 'background-color: transparent;'}
>
	<nav
		class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12"
		aria-label="Navegação principal"
	>
		<!-- Logo -->
		<a
			href={resolve('/')}
			class="font-display text-xl font-semibold tracking-widest text-white transition-colors duration-200 hover:text-[var(--color-cta)]"
		>
			ARC<span class="font-light">tects</span>
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-12 md:flex" role="list">
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
			class="flex h-[18px] w-6 cursor-pointer flex-col justify-between md:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
			aria-expanded={menuOpen}
		>
			<span
				class="block h-px w-full origin-center bg-white transition-all duration-300"
				style={menuOpen ? 'transform: translateY(8.5px) rotate(45deg)' : ''}
			></span>
			<span
				class="block h-px w-full bg-white transition-opacity duration-200"
				style={menuOpen ? 'opacity: 0' : ''}
			></span>
			<span
				class="block h-px w-full origin-center bg-white transition-all duration-300"
				style={menuOpen ? 'transform: translateY(-8.5px) rotate(-45deg)' : ''}
			></span>
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div
			class="px-6 pt-4 pb-10 md:hidden"
			style="background-color: var(--color-primary); border-top: 1px solid rgba(255,255,255,0.1);"
		>
			<ul class="flex flex-col gap-8" role="list">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="font-display cursor-pointer text-3xl text-white/80 transition-colors duration-200 hover:text-white"
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
