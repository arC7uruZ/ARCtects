<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import NavItem from './NavItem.svelte';

	let scrolled = $state(false);
	let hidden = $state(false);
	let menuOpen = $state(false);

	$effect(() => {
		// Reactive dependency — closes menu on navigation
		const _path = page.url.pathname;
		menuOpen = false;
	});

	onMount(() => {
		let lastY = window.scrollY;

		const onScroll = () => {
			const currentY = window.scrollY;
			const delta = currentY - lastY;

			scrolled = currentY > 60;

			if (menuOpen) {
				lastY = currentY;
				return;
			}

			if (currentY < 60) {
				hidden = false;
			} else if (delta > 4) {
				hidden = true;
			} else if (delta < -4) {
				hidden = false;
			}

			lastY = currentY;
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
	style="{scrolled || menuOpen
		? 'background-color: var(--color-primary);'
		: 'background-color: transparent;'} transform: translateY({hidden ? '-100%' : '0'});"
	inert={hidden || undefined}
>
	<div
		class="absolute inset-0 -z-10 h-40 bg-linear-to-b from-black/40 from-0% to-black/0"
		aria-hidden="true"
	></div>
	<nav
		class="mx-auto flex h-20 items-center justify-between px-6 py-12 lg:px-12"
		aria-label="Navegação principal"
	>
		<!-- Logo -->
		<a
			href={resolve('/')}
			class="font-display text-3xl font-semibold tracking-tight text-white transition-all duration-800 md:text-xl lg:text-3xl"
		>
			ARC<span class="font-light">TECTS</span>
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-12 md:flex" role="list">
			{#each links as link}
				<li>
                    <NavItem text={link.label} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined}/>
				</li>
			{/each}
		</ul>

		<!-- Mobile hamburger -->
		<button
			class="flex h-4.5 w-6 cursor-pointer flex-col justify-between md:hidden"
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
