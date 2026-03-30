<script lang="ts">
	const navLinks = [
		{ href: '/', label: 'Início' },
		{ href: '/projects', label: 'Projetos' },
		{ href: '/about', label: 'Sobre' },
		{ href: '/contact', label: 'Contato' }
	];
</script>

<footer style="background-color: var(--color-primary); color: rgba(255,255,255,0.65);">
	<div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-14">
			<!-- Marca -->
			<div>
				<a
					href="/"
					class="font-display text-2xl font-semibold tracking-widest text-white hover:text-[var(--color-cta)] transition-colors duration-200"
				>
					ARC<span class="font-light">tects</span>
				</a>
				<p class="mt-5 text-sm font-light leading-relaxed max-w-xs">
					Arquitetura como diálogo entre espaço, luz e a experiência humana.
				</p>
			</div>

			<!-- Navegação -->
			<div>
				<h3
					class="font-display text-[10px] tracking-[0.25em] uppercase text-white mb-6"
					style="letter-spacing: 0.25em;"
				>
					Navegar
				</h3>
				<ul class="space-y-3" role="list">
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm font-light hover:text-white transition-colors duration-200"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Localização + Redes -->
			<div>
				<h3
					class="font-display text-[10px] tracking-[0.25em] uppercase text-white mb-6"
					style="letter-spacing: 0.25em;"
				>
					Nos Encontre
				</h3>
				<address class="not-italic text-sm font-light space-y-1">
					<p>Rua dos bobos, 0</p>
					<p>São Paulo, SP 01002-020</p>
					<p>Brasil</p>
					<p class="mt-4">
						<a href="mailto:studio@arctects.com" class="hover:text-white transition-colors duration-200">
							studio@arctects.com
						</a>
					</p>
					<p>
						<a href="tel:+551132985600" class="hover:text-white transition-colors duration-200">
							+55 11 9999 9999
						</a>
					</p>
				</address>

				<!-- Redes sociais -->
				<div class="mt-6 flex gap-5">
					<a
						href="https://www.instagram.com/arcturuz.dev"
						aria-label="Instagram"
						class="hover:text-white transition-colors duration-200 cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.439 1.441 1.439c.795 0 1.439-.644 1.439-1.439s-.644-1.44-1.439-1.44z"/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/welton-carvalho-b55900128"
						aria-label="LinkedIn"
						class="hover:text-white transition-colors duration-200 cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</a>
					<a
						href="https://behance.net"
						aria-label="Behance"
						class="hover:text-white transition-colors duration-200 cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.16 1.35-.49.35-1.05.61-1.69.78-.63.17-1.29.26-1.98.26H0V4.51h6.938v-.007zM16.94 4.5H22v1.57h-5.06V4.5zM3.5 10.68h2.89c.64 0 1.16-.16 1.54-.49.39-.33.58-.81.58-1.43 0-.66-.19-1.15-.57-1.47-.38-.32-.9-.48-1.56-.48H3.5v3.87zm0 5.78h3.27c.71 0 1.27-.18 1.69-.56.42-.37.62-.92.62-1.63 0-.66-.21-1.17-.63-1.52-.42-.35-.98-.52-1.69-.52H3.5v4.23zm13.44-7.7c-.98 0-1.76.28-2.35.84-.59.56-.93 1.35-.99 2.37h6.57c-.07-1.04-.4-1.83-.99-2.38-.59-.55-1.36-.83-2.24-.83zm3.38 6.38c-.26.4-.64.69-1.11.86-.48.17-1.02.26-1.63.26-.7 0-1.31-.12-1.83-.36-.52-.24-.94-.58-1.27-1.01-.33-.43-.57-.93-.72-1.5-.15-.57-.21-1.18-.2-1.83h9.87c.03-1.15-.1-2.17-.4-3.06-.3-.89-.73-1.64-1.29-2.24-.56-.6-1.24-1.06-2.03-1.38-.79-.32-1.67-.48-2.64-.48-1.04 0-1.97.18-2.78.54-.82.36-1.5.85-2.06 1.47-.55.62-.97 1.36-1.26 2.22-.29.86-.43 1.79-.43 2.79 0 1.07.14 2.03.43 2.88.28.84.7 1.56 1.25 2.15.55.59 1.23 1.04 2.04 1.35.81.31 1.74.47 2.8.47.75 0 1.45-.09 2.09-.27.64-.18 1.22-.45 1.72-.81.5-.36.91-.82 1.24-1.37.33-.55.55-1.19.65-1.91h-2.65c-.1.44-.33.83-.59 1.23z"/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div
			class="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
			style="border-top: 1px solid rgba(255,255,255,0.1);"
		>
			<p>&copy; {new Date().getFullYear()} ARCtects. Todos os direitos reservados.</p>
			<p class="italic" style="font-family: var(--font-display); letter-spacing: 0.05em; font-size: 11px;">
				Arquitetura para um futuro mais consciente.
			</p>
		</div>
	</div>
</footer>
