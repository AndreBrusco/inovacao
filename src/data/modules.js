export const modules = [
  {
    id: 1,
    icon: '💡',
    title: 'O que é Inovação?',
    accentColor: '#007A40',
    accentLight: '#E8F5E9',
    pills: [
      {
        title: 'Invenção vs. Inovação',
        body: 'Invenção é criar algo novo. Inovação é implementar isso gerando valor. Exemplo clássico: a lâmpada foi inventada por Edison — mas a iluminação pública em massa foi a inovação que mudou o mundo. Sem adoção e geração de valor, é só invenção.',
      },
      {
        title: 'Manual de Oslo',
        body: 'Inovação não precisa ser inédita no mundo. O Manual de Oslo — referência internacional da OCDE — define que inovação pode ser um produto, processo ou serviço novo *para você ou sua organização*, desde que gere valor real. A régua é o impacto, não o ineditismo.',
      },
      {
        title: 'Incremental vs. Disruptiva',
        body: 'Inovação incremental são pequenas melhorias contínuas — uma atualização de sistema, um novo campo num formulário, uma reunião mais curta. Inovação disruptiva rompe modelos existentes e cria novos mercados — como a Netflix fez com as locadoras. Ambas são necessárias; o erro é apostar só em disrupção.',
      },
      {
        title: 'Inovação não depende de TI',
        body: 'Reorganizar um agendamento, simplificar um formulário, mudar o fluxo de atendimento, criar um roteiro de onboarding para novos servidores — tudo isso já é inovar. Tecnologia é meio, não fim. A pergunta não é "qual sistema usar?" mas "qual problema resolver?"',
      },
      {
        title: 'O Boom da Inovação',
        body: 'Investimentos globais em P&D ultrapassaram US$ 2,4 trilhões. 90% das organizações planejam aumentar investimentos em inovação digital até 2027 (Gartner/McKinsey). Não inovar também é uma escolha — e tem custo. A diferença entre organizações que crescem e as que encolhem está na capacidade de se adaptar.',
      },
    ],
    challenge: {
      intro:
        'O Manual de Oslo é a referência mundial para medir e entender inovação — publicado pela OCDE, ele define o que conta como inovação, como classificá-la e como ela é medida. Sim, ele tem mais de 200 páginas... e não esperamos que você leia tudo agora. 😄 Por isso, criamos dois desafios para você explorar o Manual de uma forma mais inteligente e criativa.',
      task1Questions: [
        'O que define uma inovação e como ela é medida?',
        'Quais as diferenças entre inovação de produto e de processo?',
      ],
    },
  },
  {
    id: 2,
    icon: '🔍',
    title: 'Identificação e Definição de Problemas',
    accentColor: '#003366',
    accentLight: '#E3EAF4',
    pills: [
      {
        title: 'Por que definir bem o problema?',
        body: 'Um problema mal definido leva a soluções erradas — e desperdício de tempo, dinheiro e energia. "Precisamos de um novo sistema" já é uma solução embutida num problema mal descrito. A inovação começa em entender o problema real, não o sintoma visível.',
      },
      {
        title: 'Técnica dos 5W',
        body: 'Who (Quem), What (O quê), When (Quando), Where (Onde), Why (Por quê). Cinco perguntas simples para descrever qualquer problema com clareza e precisão — sem embutir a solução. Use quando precisar alinhar uma equipe sobre o que exatamente está sendo resolvido.',
      },
      {
        title: '5 Porquês',
        body: 'Pergunte "por quê?" cinco vezes até chegar à causa raiz. Exemplo: "O evento começou atrasado." Por quê? "A rampa estava escorregadia." Por quê? "Havia sabão no chão." Por quê? "O sabonete foi substituído por detergente." A causa raiz não era a rampa — era a falta de controle de insumos.',
      },
      {
        title: 'Diagrama de Ishikawa',
        body: 'Também chamado de espinha de peixe. Organiza as causas de um problema em seis categorias: Método, Mão de obra, Máquina, Material, Meio ambiente e Medição (os 6Ms). Ideal para problemas complexos onde várias causas se combinam — e visualizar isso em equipe.',
      },
      {
        title: 'Erro clássico: problema com solução embutida',
        body: '"Precisamos de um novo sistema de TI" já contém a solução — e fecha o pensamento antes de explorar alternativas. O correto: "Servidores não conseguem acompanhar o andamento de seus processos em tempo real." Aí sim você pode considerar um sistema, uma planilha compartilhada, um painel físico ou outras opções.',
      },
    ],
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Design Thinking',
    accentColor: '#00897B',
    accentLight: '#E0F2F1',
    pills: [
      {
        title: 'O que é Design Thinking?',
        body: 'Uma abordagem colaborativa e centrada no ser humano para desenvolver soluções criativas de forma iterativa. Não começa nas soluções — começa nas dores das pessoas. Surgiu em Stanford e foi popularizada pela IDEO. A premissa é simples: entender antes de propor.',
      },
      {
        title: 'Fase 1 — Empatia',
        body: 'Entender profundamente as pessoas envolvidas. Isso significa sair do achismo e ir a campo: conversar, observar, acompanhar. Sair de "o usuário é resistente" e chegar em algo concreto: "o servidor evita o SIGAD porque ele trava justamente quando há mais pressa." Detalhe que muda tudo.',
      },
      {
        title: 'Fase 2 — Definição (HMW)',
        body: 'Transformar o aprendizado da empatia em uma pergunta clara de desafio: *"Como nós poderíamos...?"* (How Might We). Exemplo: "Como nós poderíamos ajudar servidores a acompanhar processos sem depender de um sistema instável?" A pergunta certa abre espaço criativo sem prender em uma solução específica.',
      },
      {
        title: 'Fase 3 — Ideação',
        body: 'Gerar o máximo de ideias possíveis sem julgamento. Ferramentas: Brainstorming clássico, Crazy 8 (8 ideias em 8 minutos, sem levantar a caneta), SCAMPER. Regra de ouro: quantidade antes de qualidade. A filtragem vem depois. Ideias absurdas às vezes geram soluções brilhantes.',
      },
      {
        title: 'Fase 4 — Prototipagem',
        body: 'Construir representações rápidas e baratas das melhores ideias. Um protótipo de papel custa 15 minutos e pode ser jogado fora sem culpa. O objetivo não é acertar — é aprender barato. "Falhe rápido, falhe barato" é o mantra aqui.',
      },
      {
        title: 'Fase 5 — Teste',
        body: 'Colocar o protótipo na frente de usuários reais e observar sem interferir. Não explique — deixe a pessoa interagir e anote o que acontece. O teste é para aprender, não para validar sua ideia. Itere com o que você descobriu.',
      },
      {
        title: 'Cases reais',
        body: 'IBM redesenhou toda a experiência do usuário interno com Design Thinking — reduzindo reuniões e aumentando satisfação. Airbnb salvou a empresa de quase falir ao fotografar melhor os imóveis depois de entrevistar hospedeiros pessoalmente. O Airbnb não criou um novo produto — mudou a percepção com empatia.',
      },
    ],
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Mentalidade Ágil',
    accentColor: '#D97706',
    accentLight: '#FEF3C7',
    pills: [
      {
        title: 'Manifesto Ágil',
        body: 'Publicado em 2001 por 17 desenvolvedores, o Manifesto Ágil define 4 valores: indivíduos e interações > processos e ferramentas; produto funcionando > documentação abrangente; colaboração com o cliente > negociação de contratos; responder a mudanças > seguir um plano. Os itens à direita têm valor — mas os à esquerda têm mais.',
      },
      {
        title: 'Scrum em resumo',
        body: 'Framework ágil com sprints — ciclos curtos de 1 a 4 semanas com entrega ao final. Três papéis: Product Owner (dono do produto), Scrum Master (facilitador do processo), Time de Desenvolvimento. Quatro cerimônias: Planning (o que fazer), Daily (o que está rolando), Review (o que entregamos) e Retrospectiva (como melhoramos).',
      },
      {
        title: 'Kanban',
        body: 'Visualizar o fluxo de trabalho em colunas simples: A Fazer / Em Andamento / Concluído. Regra principal: limitar o WIP (Work In Progress) — quantidade de tarefas simultâneas. Evita o acúmulo de demandas e revela gargalos. Pode ser implementado com post-its em 10 minutos.',
      },
      {
        title: 'Ágil fora da TI',
        body: 'Metodologias ágeis se aplicam a qualquer contexto: gestão de equipes, projetos de capacitação, auditorias, processos legislativos, campanhas de comunicação. O princípio é o mesmo: entregar valor em ciclos curtos, aprender com feedback real e adaptar o plano — em vez de seguir um roteiro rígido.',
      },
      {
        title: 'Gestão Tradicional vs. Ágil',
        body: 'Tradicional: planejar tudo antes de começar (TAP, TEP, escopo fechado). Ágil: planejar o suficiente para começar e adaptar no caminho. Cada abordagem tem seu contexto ideal. Projetos com requisitos estáveis e previsíveis funcionam bem no modelo tradicional. Projetos em ambientes incertos e mutáveis pedem agilidade.',
      },
    ],
  },
  {
    id: 5,
    icon: '🎯',
    title: 'Jobs to Be Done',
    accentColor: '#7C3AED',
    accentLight: '#EDE9FE',
    pills: [
      {
        title: 'O conceito',
        body: 'Jobs to Be Done (JTBD) é um framework criado por Clayton Christensen. A ideia central: as pessoas não compram produtos — elas "contratam" produtos para fazer um trabalho para elas. A pergunta certa não é "o que você quer comprar?" mas "qual tarefa você está tentando realizar?"',
      },
      {
        title: 'Três tipos de Jobs',
        body: 'Funcional: o que a pessoa precisa fazer (agendar uma consulta, acessar um benefício). Emocional: como ela quer se sentir durante o processo (segura, respeitada, capaz). Social: como ela quer ser percebida pelos outros (competente, moderna, organizada). Um bom produto resolve os três.',
      },
      {
        title: 'Framework de Declaração',
        body: '"Quando [situação], eu quero [motivação], para que [resultado esperado]." Exemplo aplicado ao setor público: "Quando preciso marcar uma consulta no Senado, eu quero que o sistema funcione no celular, para que eu consiga resolver sem ligar para ninguém e esperar na linha."',
      },
      {
        title: 'Cases',
        body: 'McDonald\'s descobriu que milkshakes eram "contratados" de manhã para acompanhar o trajeto de carro — o job era ter algo para fazer e comer devagar. Duolingo usa gamificação para o job emocional de se sentir progredindo. Amazon criou a "regra de 1 clique" para minimizar a fricção entre intenção e compra.',
      },
      {
        title: 'Aplicação no setor público',
        body: 'O cidadão não quer um login no portal — quer acessar o benefício sem fricção. Não quer um chatbot com FAQ — quer uma resposta clara em 2 minutos. Não quer um processo digitalizado que replica o papel — quer que o serviço funcione. JTBD nos força a pensar no resultado real, não no recurso entregue.',
      },
    ],
  },
  {
    id: 6,
    icon: '🗺️',
    title: 'UX e a Jornada do Usuário',
    accentColor: '#DC2626',
    accentLight: '#FEE2E2',
    pills: [
      {
        title: 'O que é UX?',
        body: 'Experiência do Usuário (UX) inclui todas as emoções, percepções e respostas que ocorrem antes, durante e após o uso de um produto ou serviço — definição da norma ISO 9241-210. UX não é sobre o design de telas. É sobre a experiência completa que alguém tem ao interagir com qualquer serviço.',
      },
      {
        title: 'UX não é sobre telas bonitas',
        body: 'É sobre reduzir dor e aumentar fluidez. Um serviço pode ter visual moderno e ainda ser frustrante de usar. O oposto também existe — sistemas feios que funcionam perfeitamente. O usuário sempre "tem razão" no sentido de que se algo gera confusão, o problema é do serviço, não do usuário.',
      },
      {
        title: 'A Jornada do Usuário',
        body: 'Mapa visual que representa o caminho completo de uma pessoa ao interagir com um serviço: desde o primeiro contato até a conclusão (ou abandono) da tarefa. Inclui pontos de dor, emoções, canais usados e oportunidades de melhoria. Ferramenta poderosa para visualizar onde a experiência quebra.',
      },
      {
        title: 'Quantos cliques?',
        body: 'Na Amazon com "Comprar agora" e dados salvos: 1 a 2 cliques. No SIGAD para abrir um processo: quantos? Cada clique desnecessário é fricção. Cada campo obrigatório que não deveria ser é fricção. Cada mensagem de erro genérica é fricção. Redesenhar a jornada é eliminar esses obstáculos um por um.',
      },
      {
        title: 'UI vs. UX',
        body: 'UI (User Interface) é o visual e a interação: botões, cores, tipografia, layout. UX (User Experience) é o todo: desde entender a necessidade até a satisfação pós-uso. Um app pode ter UI bonita e UX péssima (lindo mas confuso). E vice-versa. Nos melhores produtos, os dois andam juntos.',
      },
    ],
  },
  {
    id: 7,
    icon: '🤖',
    title: 'IA e Inovação no Setor Público',
    accentColor: '#4338CA',
    accentLight: '#EEF2FF',
    pills: [
      {
        title: 'O cenário atual',
        body: 'Patentes relacionadas a IA cresceram 600% desde 2010. 70% dos governos da OCDE já possuem estratégias formais de inovação pública (OCDE, 2023). O setor público não está de fora dessa transformação — está cada vez mais pressionado a usar IA para melhorar serviços sem aumentar custos.',
      },
      {
        title: 'IA como ferramenta, não solução mágica',
        body: 'IA resolve problemas bem definidos. Sem clareza sobre o problema (módulo 2), a IA amplifica o caos. Automatizar um processo ruim cria um processo ruim automatizado. A ordem correta é: entender o problema → redesenhar o processo → então considerar IA como habilitadora.',
      },
      {
        title: 'Casos no setor público brasileiro',
        body: 'ChatPetrobras: assistente interno de IA para consultas técnicas e documentos. Lê-AI (TCU): sistema de análise automatizada de documentos de licitação. RaI: ferramenta de IA do TCU para geração de relatórios de auditoria. O Brasil já tem casos concretos — e o Senado está no caminho.',
      },
      {
        title: 'Inovação em todos os tamanhos',
        body: 'Em 2024, o primeiro humano recebeu implante do chip Neuralink para controle de dispositivos pelo pensamento. Uma startup chamada Just Water vendeu água em pó e captou US$ 7 milhões — inovação de embalagem e modelo. Inovação não tem tamanho mínimo: o que importa é o impacto gerado.',
      },
      {
        title: 'Como o Senado pode inovar com IA?',
        body: 'Triagem e classificação automática de petições. Análise de projetos de lei e precedentes legislativos. Automação de relatórios e sumários de reuniões. Assistentes para servidores em consultas de normas internas. Monitoramento de processos em tempo real com alertas. O potencial é enorme — e começa com um problema bem definido.',
      },
    ],
  },
  {
    id: 8,
    icon: '🚀',
    title: 'MVP e Prototipagem',
    accentColor: '#059669',
    accentLight: '#D1FAE5',
    pills: [
      {
        title: 'O que é MVP?',
        body: 'Mínimo Produto Viável (MVP) é a versão mais simples possível de uma solução que ainda entrega valor real e permite aprender com feedback real. Não é um produto incompleto — é um produto focado. O objetivo não é o produto perfeito, é a aprendizagem mais rápida com o menor investimento.',
      },
      {
        title: 'Metodologia Lean',
        body: 'O ciclo Lean é: Construir → Medir → Aprender → repetir. Lançar rápido, medir o que importa, incorporar os aprendizados, iterar. Evita gastar meses construindo a coisa errada. Eric Ries popularizou o conceito no livro *The Lean Startup* — que transformou a forma de criar produtos e serviços.',
      },
      {
        title: 'Lean Inception',
        body: 'Workshop intensivo — normalmente 1 semana — para alinhar um time inteiro sobre o MVP antes de começar a construir. Cobre: visão do produto, personas, jornadas, features essenciais vs. descartáveis. Criado por Paulo Caroli, muito usado no Brasil. Economiza semanas de retrabalho.',
      },
      {
        title: 'Prototipagem: do papel ao digital',
        body: 'Um protótipo de papel custa 15 minutos e pode ser descartado sem nenhuma culpa. Um wireframe digital leva algumas horas. Um sistema legacy mal planejado pode custar anos de manutenção. A prototipagem permite testar suposições com custo baixo antes de comprometer recursos reais.',
      },
      {
        title: 'Erro e Aprendizagem',
        body: 'Sucesso não é nunca errar — é aprender rápido e corrigir o curso. Culturas organizacionais que aceitam o erro controlado inovam mais rápido. A diferença: erro não controlado é desperdício. Erro planejado, dentro de um experimento, é aprendizado. O fracasso deve ser pequeno, rápido e barato.',
      },
    ],
  },
  {
    id: 9,
    icon: '📊',
    title: 'Foco em Resultados',
    accentColor: '#B45309',
    accentLight: '#FEF3C7',
    pills: [
      {
        title: 'OKR (Objectives and Key Results)',
        body: 'Objetivos ambiciosos e qualitativos + resultados-chave mensuráveis. Exemplo: Objetivo — "Transformar o atendimento ao servidor em referência nacional." Resultados-chave: reduzir tempo médio de resposta de 5 para 2 dias; aumentar satisfação de 60% para 85%. Usado pelo Google, Spotify e crescente no setor público.',
      },
      {
        title: 'KPI (Key Performance Indicator)',
        body: 'Indicadores que medem o desempenho contínuo de um processo — diferente de OKRs. KPIs monitoram a saúde da operação; OKRs impulsionam mudança. Exemplos de KPI: taxa de respostas no prazo, número de processos abertos por semana, percentual de resolução no primeiro contato. Ambos são necessários e complementares.',
      },
      {
        title: 'Metas SMART',
        body: 'Specific (específica), Measurable (mensurável), Achievable (atingível), Relevant (relevante), Time-bound (com prazo). Toda meta de inovação deve passar por esse filtro. "Melhorar o atendimento" não é SMART. "Reduzir o tempo médio de resposta de 5 para 2 dias úteis até 31/12" é SMART.',
      },
      {
        title: 'O papel da liderança',
        body: 'Líderes que focam em resultados criam clareza — as pessoas sabem o que importa e por quê. Líderes que focam em atividades criam burocracia — as pessoas ficam ocupadas sem necessariamente avançar. A diferença prática: perguntar "qual foi o impacto dessa reunião?" em vez de "quantas reuniões fizemos essa semana?"',
      },
      {
        title: 'Six-Page Memo',
        body: 'Usado pela Amazon em vez de apresentações de slides. Um documento narrativo de até 6 páginas que força o autor a pensar de forma completa: contexto, problema, solução, impacto esperado, riscos. A premissa de Jeff Bezos: quem não consegue escrever claramente sobre o que propõe, não entende o suficiente para propor.',
      },
    ],
  },
  {
    id: 10,
    icon: '🌊',
    title: 'Difusão da Inovação',
    accentColor: '#0891B2',
    accentLight: '#CFFAFE',
    pills: [
      {
        title: 'A teoria',
        body: 'Everett Rogers, em 1962, descreveu como novas ideias e tecnologias se espalham em uma sociedade. O insight principal: a adoção de uma inovação não depende só da qualidade dela — depende de como ela é percebida pelas pessoas e como se encaixa na vida delas. Inovação ótima que ninguém adota não é inovação.',
      },
      {
        title: 'A Curva de Adoção',
        body: 'Rogers identificou cinco grupos: Inovadores (2,5%) — são os entusiastas que testam qualquer coisa nova. Adotantes precoces (13,5%) — influentes que adotam quando veem potencial. Maioria precoce (34%) — adotam quando veem resultado em outros. Maioria tardia (34%) — só adotam quando é inevitável. Retardatários (16%) — resistem até o fim.',
      },
      {
        title: '5 fatores de adoção',
        body: 'Vantagem relativa (é melhor que o que já existe?), Compatibilidade (combina com meus valores e rotinas?), Complexidade (é difícil de usar?), Testabilidade (posso experimentar antes de comprometer?) e Observabilidade (consigo ver resultados em quem já usou?). Quanto mais simples de testar e visível o resultado, mais rápida a adoção.',
      },
      {
        title: 'Difusão é como fofoca',
        body: 'A inovação se espalha de pessoa a pessoa, por redes de confiança — não por decreto ou comunicado oficial. O inovador abre o caminho; os adotantes precoces amplificam; a maioria observa e segue. Chefe que manda usar não gera adoção genuína. Colega de confiança que recomenda sim.',
      },
      {
        title: 'Como aplicar no Senado',
        body: 'Identifique os adotantes precoces da sua equipe — as pessoas que gostam de testar coisas novas e têm credibilidade com os colegas. Eles são seus embaixadores naturais. Não comece pela maioria cética ou pelos retardatários. Crie casos de sucesso visíveis, pequenos e reais — e deixe a difusão acontecer organicamente.',
      },
    ],
  },
]
