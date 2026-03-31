# ARCtects

Site de portfólio para um escritório de arquitetura sediado em São Paulo, apresentando projetos residenciais, comerciais e culturais.

Construído com **SvelteKit** + **TypeScript** + **Tailwind CSS v4**, publicado como site estático no GitHub Pages.

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | SvelteKit 2.16 (Svelte 5) |
| Linguagem | TypeScript 5.7 |
| Estilização | Tailwind CSS 4.1 + variáveis CSS |
| Build | Vite 6.2 |
| Adapter | `@sveltejs/adapter-static` |
| Hospedagem | GitHub Pages |

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Início — hero, projetos em destaque e visão geral do escritório |
| `/projects` | Listagem do portfólio com filtro por categoria |
| `/projects/[slug]` | Detalhe do projeto com galeria de imagens e projetos relacionados |
| `/about` | Histórico do escritório, equipe e valores |
| `/contact` | Formulário de contato e endereços dos escritórios |

---

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Verificar tipos
npm run check
```

---

## Build

```bash
# Gerar site estático em ./build
npm run build

# Visualizar o build de produção localmente
npm run preview
```

O conteúdo gerado em `./build` é um site completamente estático — sem necessidade de servidor.

---

## Deploy

O deploy é automatizado via GitHub Actions a cada push na branch `main`.

O workflow (`.github/workflows/static.yml`) instala as dependências, executa `npm run build` e publica o diretório `./build` no GitHub Pages.

O site é servido sob o caminho base `/ARCtects`, configurado em `svelte.config.js`.

---

## Estrutura do Projeto

```
src/
├── routes/
│   ├── +layout.svelte       # Navbar e footer globais
│   ├── +page.svelte         # Página inicial
│   ├── about/
│   ├── contact/
│   └── projects/
│       ├── +page.svelte     # Listagem com filtro por categoria
│       └── [slug]/          # Páginas de detalhe dinâmicas
├── lib/
│   ├── components/          # Navbar, Footer, ProjectCard, CategoryFilter
│   ├── data/
│   │   └── projects.ts      # Dados de todos os projetos
│   └── types/
│       └── index.ts         # Interfaces TypeScript
└── app.css                  # Estilos globais e tokens de design
```

---

## Tokens de Design

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#0f172a` | Azul-marinho escuro — cor principal da marca |
| `--color-cta` | `#ca8a04` | Âmbar dourado — botões e destaques |
| `--color-secondary` | `#334155` | Ardósia — texto secundário |
| `--color-ink` | `#020617` | Quase preto — texto do corpo |
| `--color-warm-gray` | `#e8e4df` | Fundos |

Fontes: **Cinzel** (títulos e display) e **Josefin Sans** (corpo do texto).
