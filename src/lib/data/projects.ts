import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		slug: 'volta-house',
		title: 'Volta House',
		category: 'Residential',
		year: 2023,
		location: 'São Paulo, Brasil',
		shortDescription:
			'Uma residência de concreto ousada que redefine a fronteira urbana entre o público e o privado.',
		description:
			'A Volta House emerge da paisagem urbana como uma forma monolítica, com a fachada de concreto aparente suavizada por jardins verticais exuberantes. O interior se abre dramaticamente para um pátio central, criando um santuário em meio à energia da cidade. Os envidraçamentos do piso ao teto dissolvem o limite entre o dentro e o fora, enquanto um pavilhão suspenso na cobertura oferece vistas panorâmicas do horizonte paulistano.',
		heroImage: 'https://picsum.photos/seed/volta-hero/1600/900',
		images: [
			'https://picsum.photos/seed/volta-1/1200/800',
			'https://picsum.photos/seed/volta-2/1200/800',
			'https://picsum.photos/seed/volta-3/800/1200',
			'https://picsum.photos/seed/volta-4/1200/800',
			'https://picsum.photos/seed/volta-5/1200/800'
		],
		featured: true
	},
	{
		slug: 'meridian-tower',
		title: 'Meridian Tower',
		category: 'Commercial',
		year: 2022,
		location: 'Rio de Janeiro, Brasil',
		shortDescription:
			'Uma torre de escritórios de 32 andares que reinterpreta a tipologia do arranha-céu por meio de terraços sobrepostos.',
		description:
			'A Meridian Tower se eleva como uma série de volumes empilhados, com cada laje levemente deslocada em relação à anterior, criando uma cascata de jardins suspensos. A fachada dupla da edificação regula o ganho solar e ao mesmo tempo confere um ritmo visual distintivo. No nível da rua, uma generosa praça pública ativa o térreo com comércio, cafés e programação cultural.',
		heroImage: 'https://picsum.photos/seed/meridian-hero/1600/900',
		images: [
			'https://picsum.photos/seed/meridian-1/1200/800',
			'https://picsum.photos/seed/meridian-2/1200/800',
			'https://picsum.photos/seed/meridian-3/1200/800',
			'https://picsum.photos/seed/meridian-4/800/1200'
		],
		featured: true
	},
	{
		slug: 'casa-serena',
		title: 'Casa Serena',
		category: 'Residential',
		year: 2023,
		location: 'Búzios, Brasil',
		shortDescription: 'Um refúgio costeiro onde paredes caiadas se encontram com o horizonte do Atlântico.',
		description:
			'Erguida sobre uma encosta com vista para o Atlântico, a Casa Serena incorpora uma contenção mediterrânea filtrada por uma sensibilidade tropical. Grossas paredes caiadas fornecem massa térmica e sombra, enquanto aberturas estreitas enquadram vistas selecionadas do mar. A paisagem se dissolve nos níveis em terraço da edificação, e cada degrau é uma meditação sobre a relação entre forma construída e terreno natural.',
		heroImage: 'https://picsum.photos/seed/serena-hero/1600/900',
		images: [
			'https://picsum.photos/seed/serena-1/1200/800',
			'https://picsum.photos/seed/serena-2/1200/800',
			'https://picsum.photos/seed/serena-3/800/1200',
			'https://picsum.photos/seed/serena-4/1200/800'
		],
		featured: true
	},
	{
		slug: 'pavilhao-cultural',
		title: 'Pavilhão Cultural',
		category: 'Cultural',
		year: 2021,
		location: 'Brasília, Brasil',
		shortDescription:
			'Um pavilhão público que funciona como espaço de convivência cívica e centro de arte contemporânea.',
		description:
			'O Pavilhão Cultural é concebido como uma sala urbana coberta — uma extensão abrigada da praça pública que o envolve. Uma cobertura de concreto dramaticamente fina flutua sobre o plano do solo, sustentada por uma floresta de esbeltas colunas de aço. No interior, espaços flexíveis abrigam exposições, espetáculos e a vida cotidiana da comunidade, criando uma arquitetura democrática que pertence igualmente a todos.',
		heroImage: 'https://picsum.photos/seed/pavilhao-hero/1600/900',
		images: [
			'https://picsum.photos/seed/pavilhao-1/1200/800',
			'https://picsum.photos/seed/pavilhao-2/1200/800',
			'https://picsum.photos/seed/pavilhao-3/1200/800',
			'https://picsum.photos/seed/pavilhao-4/800/1200',
			'https://picsum.photos/seed/pavilhao-5/1200/800'
		],
		featured: true
	},
	{
		slug: 'terra-office',
		title: 'Terra Office Campus',
		category: 'Commercial',
		year: 2022,
		location: 'Campinas, Brasil',
		shortDescription: 'Um ambiente de trabalho pós-pandemia reimaginado como um campus-jardim.',
		description:
			'O Terra Office Campus reinventa o local de trabalho corporativo como uma série de pavilhões íntimos inseridos em uma paisagem cuidadosamente cultivada. Em vez de um único bloco monolítico, o campus é composto por cinco edificações interligadas por passarelas cobertas e jardins biodiversos. A arquitetura prioriza ventilação natural, luz do dia e acesso à natureza — qualidades que definem o futuro do trabalho.',
		heroImage: 'https://picsum.photos/seed/terra-hero/1600/900',
		images: [
			'https://picsum.photos/seed/terra-1/1200/800',
			'https://picsum.photos/seed/terra-2/1200/800',
			'https://picsum.photos/seed/terra-3/800/1200',
			'https://picsum.photos/seed/terra-4/1200/800'
		],
		featured: false
	},
	{
		slug: 'museu-forma',
		title: 'Museu da Forma',
		category: 'Cultural',
		year: 2020,
		location: 'Curitiba, Brasil',
		shortDescription:
			'Um museu de design contemporâneo onde o próprio edifício é a primeira peça do acervo.',
		description:
			'O Museu da Forma é projetado a partir da premissa de que a arquitetura é em si uma forma de design. Seu exterior é composto por volumes geométricos entrelaçados, revestidos de cobre oxidado, criando uma superfície em constante transformação à medida que o material envelhece. No interior, uma sequência de galerias de pé-direito duplo proporciona o cenário ideal para objetos de design, enquanto um terraço na cobertura oferece vistas sobre a mata urbana de Curitiba.',
		heroImage: 'https://picsum.photos/seed/museu-hero/1600/900',
		images: [
			'https://picsum.photos/seed/museu-1/1200/800',
			'https://picsum.photos/seed/museu-2/1200/800',
			'https://picsum.photos/seed/museu-3/1200/800',
			'https://picsum.photos/seed/museu-4/800/1200'
		],
		featured: false
	},
	{
		slug: 'residencia-luz',
		title: 'Residência Luz',
		category: 'Residential',
		year: 2024,
		location: 'Florianópolis, Brasil',
		shortDescription: 'Uma residência na encosta projetada como uma sequência de vãos preenchidos de luz.',
		description:
			'A Residência Luz é organizada em torno de um poço de luz central que conduz a claridade solar às profundezas da planta, eliminando a necessidade de iluminação artificial durante o dia. A seção responde à topografia da encosta, com cada nível descendo a ladeira para capturar as vistas da baía. Pedra e madeira de origem local ancoram a linguagem formal contemporânea em seu entorno natural.',
		heroImage: 'https://picsum.photos/seed/luz-hero/1600/900',
		images: [
			'https://picsum.photos/seed/luz-1/1200/800',
			'https://picsum.photos/seed/luz-2/800/1200',
			'https://picsum.photos/seed/luz-3/1200/800',
			'https://picsum.photos/seed/luz-4/1200/800'
		],
		featured: false
	},
	{
		slug: 'centro-civico',
		title: 'Centro Cívico',
		category: 'Cultural',
		year: 2021,
		location: 'Porto Alegre, Brasil',
		shortDescription: 'Um centro cívico que reativa uma quadra urbana esquecida com vida pública.',
		description:
			'O Centro Cívico transforma uma quadra subutilizada da cidade em uma instituição pública vibrante, abrigando biblioteca, centro comunitário e anfiteatro ao ar livre. O térreo poroso do edifício permite a circulação de pedestres pelo lote, dissolvendo a fronteira entre a rua e a instituição. Uma cobertura verde estende o parque por cima, criando uma conexão fluida entre paisagem e arquitetura.',
		heroImage: 'https://picsum.photos/seed/civico-hero/1600/900',
		images: [
			'https://picsum.photos/seed/civico-1/1200/800',
			'https://picsum.photos/seed/civico-2/1200/800',
			'https://picsum.photos/seed/civico-3/800/1200',
			'https://picsum.photos/seed/civico-4/1200/800'
		],
		featured: false
	}
];

export const featuredProjects = projects.filter((p) => p.featured);
