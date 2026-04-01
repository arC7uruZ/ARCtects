<script lang="ts">
	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Formulário estático — sem envio real
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contato — ARCtects</title>
	<meta
		name="description"
		content="Entre em contato com o ARCtects. Adoraríamos ouvir sobre o seu projeto. Fale com nosso escritório em São Paulo."
	/>
</svelte:head>

<!-- Cabeçalho -->
<section style="background-color: var(--color-primary);" class="pt-40 pb-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-12">
		<p
			class="font-body mb-6 text-[11px] tracking-[0.3em] uppercase"
			style="color: var(--color-cta);"
		>
			Fale Conosco
		</p>
		<h1
			class="font-display leading-none text-white"
			style="font-size: clamp(3rem, 8vw, 8rem); letter-spacing: -0.02em;"
		>
			Entre em<br />Contato
		</h1>
	</div>
</section>

<!-- Conteúdo -->
<section class="mx-auto max-w-7xl px-6 py-24 md:py-36 lg:px-12">
	<div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
		<!-- Informações de contato -->
		<div>
			<h2
				class="font-display mb-8"
				style="font-size: clamp(1.5rem, 3vw, 2.5rem); color: var(--color-ink);"
			>
				Adoraríamos ouvir de você
			</h2>
			<p
				class="font-body mb-12 text-sm leading-relaxed font-light"
				style="color: var(--color-secondary); max-width: 44ch;"
			>
				Seja com um projeto específico em mente ou apenas para explorar possibilidades, nossa equipe
				está pronta para ouvir. Normalmente respondemos em até dois dias úteis.
			</p>

			<div class="space-y-10">
				<!-- Escritório SP -->
				<div>
					<p
						class="font-body mb-3 text-[10px] tracking-[0.2em] uppercase"
						style="color: var(--color-muted);"
					>
						Escritório São Paulo
					</p>
					<address
						class="font-body text-sm leading-relaxed font-light not-italic"
						style="color: var(--color-secondary);"
					>
						<p>Rua dos bobos, 0</p>
						<p>Péssima Vista, São Paulo — SP</p>
						<p>CEP 01002-020, Brasil</p>
					</address>
				</div>

				<!-- Escritório RJ -->
				<div>
					<p
						class="font-body mb-3 text-[10px] tracking-[0.2em] uppercase"
						style="color: var(--color-muted);"
					>
						Escritório Rio de Janeiro
					</p>
					<address
						class="font-body text-sm leading-relaxed font-light not-italic"
						style="color: var(--color-secondary);"
					>
						<p>Rua dos trouxas, 0</p>
						<p>Ipalerma, Rio de Janeiro — RJ</p>
						<p>CEP 20211-110, Brasil</p>
					</address>
				</div>

				<!-- Dados de contato -->
				<div>
					<p
						class="font-body mb-3 text-[10px] tracking-[0.2em] uppercase"
						style="color: var(--color-muted);"
					>
						Contato
					</p>
					<div
						class="font-body space-y-2 text-sm font-light"
						style="color: var(--color-secondary);"
					>
						<p>
							<a
								href="mailto:studio@arctects.com"
								class="transition-colors duration-200 hover:text-[var(--color-ink)]"
							>
								studio@arctects.com
							</a>
						</p>
						<p>
							<a
								href="tel:+551132985600"
								class="transition-colors duration-200 hover:text-[var(--color-ink)]"
							>
								+55 11 9999 9999 (SP)
							</a>
						</p>
						<p>
							<a
								href="tel:+552132567890"
								class="transition-colors duration-200 hover:text-[var(--color-ink)]"
							>
								+55 21 8888 8888 (RJ)
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Formulário -->
		<div>
			{#if submitted}
				<div
					class="flex flex-col items-center justify-center py-20 text-center"
					style="border: 1px solid var(--color-warm-gray); min-height: 480px;"
				>
					<div
						class="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
						style="background-color: rgba(202,138,4,0.1);"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="var(--color-cta)"
							stroke-width="1.5"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
					<h3 class="font-display mb-3 text-2xl" style="color: var(--color-ink);">
						Mensagem Enviada
					</h3>
					<p
						class="font-body text-sm font-light"
						style="color: var(--color-muted); max-width: 36ch;"
					>
						Obrigado pelo contato. Retornaremos em até dois dias úteis.
					</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} novalidate>
					<div class="space-y-6">
						<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
							<div>
								<label
									for="name"
									class="font-body mb-2 block text-[10px] tracking-[0.2em] uppercase"
									style="color: var(--color-muted);"
								>
									Nome Completo <span aria-hidden="true">*</span>
								</label>
								<input
									id="name"
									type="text"
									bind:value={name}
									required
									autocomplete="name"
									class="font-body w-full border-b bg-transparent px-0 py-3 text-sm font-light transition-colors duration-200 outline-none"
									style="border-color: var(--color-warm-gray); color: var(--color-ink);"
									onfocus={(e) =>
										((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ink)')}
									onblur={(e) =>
										((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-warm-gray)')}
									placeholder="Ana Silva"
								/>
							</div>
							<div>
								<label
									for="email"
									class="font-body mb-2 block text-[10px] tracking-[0.2em] uppercase"
									style="color: var(--color-muted);"
								>
									E-mail <span aria-hidden="true">*</span>
								</label>
								<input
									id="email"
									type="email"
									bind:value={email}
									required
									autocomplete="email"
									class="font-body w-full border-b bg-transparent px-0 py-3 text-sm font-light transition-colors duration-200 outline-none"
									style="border-color: var(--color-warm-gray); color: var(--color-ink);"
									onfocus={(e) =>
										((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ink)')}
									onblur={(e) =>
										((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-warm-gray)')}
									placeholder="ana@email.com"
								/>
							</div>
						</div>

						<div>
							<label
								for="subject"
								class="font-body mb-2 block text-[10px] tracking-[0.2em] uppercase"
								style="color: var(--color-muted);"
							>
								Assunto
							</label>
							<input
								id="subject"
								type="text"
								bind:value={subject}
								class="font-body w-full border-b bg-transparent px-0 py-3 text-sm font-light transition-colors duration-200 outline-none"
								style="border-color: var(--color-warm-gray); color: var(--color-ink);"
								onfocus={(e) =>
									((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ink)')}
								onblur={(e) =>
									((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-warm-gray)')}
								placeholder="Novo projeto residencial em São Paulo"
							/>
						</div>

						<div>
							<label
								for="message"
								class="font-body mb-2 block text-[10px] tracking-[0.2em] uppercase"
								style="color: var(--color-muted);"
							>
								Mensagem <span aria-hidden="true">*</span>
							</label>
							<textarea
								id="message"
								bind:value={message}
								required
								rows="6"
								class="font-body w-full resize-none border-b bg-transparent px-0 py-3 text-sm font-light transition-colors duration-200 outline-none"
								style="border-color: var(--color-warm-gray); color: var(--color-ink);"
								onfocus={(e) =>
									((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-ink)')}
								onblur={(e) =>
									((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-warm-gray)')}
								placeholder="Conte-nos sobre seu projeto, prazos e quaisquer dúvidas que tenha..."
							></textarea>
						</div>

						<div class="pt-4">
							<button
								type="submit"
								class="font-body inline-flex cursor-pointer items-center gap-4 px-10 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300"
								style="background-color: var(--color-primary); color: white;"
								onmouseenter={(e) =>
									((e.currentTarget as HTMLElement).style.backgroundColor =
										'var(--color-secondary)')}
								onmouseleave={(e) =>
									((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)')}
							>
								Enviar Mensagem
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
							</button>
						</div>
					</div>
				</form>
			{/if}
		</div>
	</div>
</section>
