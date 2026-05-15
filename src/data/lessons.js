export const lessons = [
  {
    id: 1,
    title: 'Fundamentos da Inovação',
    description: 'O que é inovar e como identificar e definir problemas de forma precisa.',
    moduleIds: [1, 2],
    tools: [
      {
        name: 'Leonardo AI',
        url: 'https://app.leonardo.ai',
        logo: '/tools/leonardo.svg',
        description:
          'Plataforma de geração de imagens com IA. Crie assets visuais para apresentações, protótipos e comunicações com apenas uma descrição de texto.',
        category: 'Criação Visual',
      },
      {
        name: 'Miro',
        url: 'https://miro.com',
        logo: '/tools/miro.svg',
        description:
          'Quadro colaborativo online. Ideal para mapas mentais, diagramas de Ishikawa e sessões de ideação em equipe — presencial ou remotamente.',
        category: 'Colaboração',
      },
      {
        name: 'NotebookLM',
        url: 'https://notebooklm.google',
        logo: '/tools/notebooklm.svg',
        description:
          'Assistente de pesquisa do Google. Cole documentos e PDFs e converse com sua própria biblioteca de conhecimento usando IA.',
        category: 'Pesquisa',
      },
    ],
  },
  {
    id: 2,
    title: 'Design e Agilidade',
    description: 'Abordagem centrada no usuário com Design Thinking e entrega de valor em ciclos curtos.',
    moduleIds: [3, 4],
    tools: [
      {
        name: 'Excalidraw',
        url: 'https://excalidraw.com',
        logo: '/tools/excalidraw.svg',
        description:
          'Quadro branco virtual open-source. Perfeito para sketches rápidos de fluxos, wireframes e diagramas de processo de forma simples e visual.',
        category: 'Diagramação',
      },
      {
        name: 'Notion',
        url: 'https://notion.so',
        logo: '/tools/notion.svg',
        description:
          'Plataforma all-in-one para notas, wikis e gestão de projetos. Organize backlogs, documente sprints e crie bases de conhecimento compartilhadas.',
        category: 'Produtividade',
      },
    ],
  },
  {
    id: 3,
    title: 'Usuário e Produto',
    description: 'Jobs to Be Done, jornada do usuário e MVP para criar soluções centradas no cidadão.',
    moduleIds: [5, 6, 8],
    tools: [
      {
        name: 'Figma',
        url: 'https://figma.com',
        logo: '/tools/figma.svg',
        description:
          'Ferramenta de design colaborativo líder de mercado. Crie protótipos de alta fidelidade, mapeie jornadas e construa sistemas de design em equipe.',
        category: 'Design',
      },
      {
        name: 'Canva',
        url: 'https://canva.com',
        logo: '/tools/canva.svg',
        description:
          'Design gráfico simplificado. Crie apresentações, infográficos e materiais visuais profissionais sem precisar de experiência em design.',
        category: 'Criação Visual',
      },
    ],
  },
  {
    id: 4,
    title: 'IA, Resultados e Escala',
    description: 'Inteligência Artificial no setor público, métricas de impacto e difusão de inovações.',
    moduleIds: [7, 9, 10],
    tools: [
      {
        name: 'Claude',
        url: 'https://claude.ai',
        logo: '/tools/claude.svg',
        description:
          'Assistente de IA da Anthropic. Auxilia na análise de documentos, redação, brainstorming, síntese de pesquisas e automação de tarefas cognitivas.',
        category: 'IA Generativa',
      },
      {
        name: 'Claude Code',
        url: 'https://claude.ai/code',
        logo: '/tools/claude-code.svg',
        description:
          'Agente de IA para desenvolvimento de software. Escreve, revisa e depura código com compreensão profunda do contexto do projeto. Usado para criar este próprio site.',
        category: 'Desenvolvimento',
      },
    ],
  },
]
