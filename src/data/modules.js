export const modules = [
  {
    id: 1,
    icon: '💡',
    title: 'O que é Inovação?',
    accentColor: '#007A40',
    accentLight: '#E8F5E9',
    pills: [
      {
        title: 'O que é o Manual de Oslo',
        body: '<p>O Manual de Oslo é o guia internacional da OCDE (4ª edição, 2018) para coletar, reportar e usar dados sobre inovação. É o padrão de referência mundial desde 1992, usado por governos, pesquisadores e gestores para medir e comparar inovação entre países e setores.</p><div class="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-yellow-900">Definição central: <strong>inovação é um produto ou processo novo ou melhorado que difere significativamente do anterior e foi colocado em uso ou disponibilizado para outros.</strong></p><p class="text-xs text-yellow-800 mt-2">Sem implementação, não é inovação.</p></div>',
      },
      {
        title: 'Ideia, Invenção, Inovação e Melhoria Contínua',
        body: '<div class="space-y-4"><div class="flex gap-3"><div class="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 mt-1"></div><div><p class="font-semibold text-gray-900">Ideia</p><p class="text-gray-600 text-sm">Conceito ou insight que existe apenas na mente, sem forma concreta.</p></div></div><div class="flex gap-3"><div class="w-0.5 bg-gray-300 ml-3 my-0"></div><div class="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 mt-1"></div><div><p class="font-semibold text-gray-900">Invenção</p><p class="text-gray-600 text-sm">Ideia com forma concreta, como um protótipo, patente ou modelo. Não exige uso real e pode nunca chegar ao mercado.</p></div></div><div class="flex gap-3"><div class="w-0.5 bg-gray-300 ml-3 my-0"></div><div class="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 mt-1"></div><div><p class="font-semibold text-gray-900">Inovação</p><p class="text-gray-600 text-sm">Invenção ou melhoria implementada, colocada em uso ou disponibilizada para outros. O Manual de Oslo é direto: <em>"Innovation is more than a new idea or an invention. An innovation requires implementation."</em></p></div></div><div class="flex gap-3"><div class="w-0.5 bg-gray-300 ml-3 my-0"></div><div class="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div><div><p class="font-semibold text-gray-900">Melhoria Contínua</p><p class="text-gray-600 text-sm">Ajustes incrementais regulares a processos e produtos existentes. Pode ou não ser inovação, dependendo se a mudança é significativa o suficiente para "diferir substancialmente" do que existia antes.</p></div></div></div>',
      },
      {
        title: 'Inovação Incremental vs. Disruptiva',
        body: '<table class="w-full border-collapse text-sm"><thead><tr class="bg-green-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Inovação Incremental</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Inovação Disruptiva</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3">Melhorias graduais sobre o que já existe</td><td class="border border-gray-200 p-3">Rompe modelos existentes e cria novos mercados</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3">Menor risco, menor impacto imediato</td><td class="border border-gray-200 p-3">Alto risco, alto impacto e mudança estrutural</td></tr><tr><td class="border border-gray-200 p-3"><strong>Exemplos:</strong> novo campo num formulário, reunião mais curta, digitalizar processo manual</td><td class="border border-gray-200 p-3"><strong>Exemplos:</strong> Netflix vs. locadoras, Pix vs. transferências tradicionais</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3">Base do progresso contínuo</td><td class="border border-gray-200 p-3">"Destruição criativa" (Schumpeter)</td></tr></tbody></table><p class="mt-3 text-xs text-gray-600"><strong>Importante:</strong> O Manual de Oslo distingue "novo para o mundo" (disruptivo) de "novo para a organização" (incremental). Os dois são inovação legítima. No setor público, a maioria é incremental — e isso não é fraqueza, é realidade com enorme valor acumulado.</p>',
      },
      {
        title: 'Avaliação da Inovação: Critérios da OCDE',
        body: '<p class="text-sm mb-3">O Comitê de Ajuda ao Desenvolvimento da OCDE (DAC) definiu seis critérios para avaliar programas e inovações:</p><div class="grid grid-cols-2 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Relevância</p><p class="text-gray-600 text-xs mt-1">A inovação resolve o problema certo? Responde a necessidades reais dos usuários?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Coerência</p><p class="text-gray-600 text-xs mt-1">Está alinhada com outras políticas e prioridades da organização?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Eficácia</p><p class="text-gray-600 text-xs mt-1">Os objetivos foram atingidos? Fez o que prometeu?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Eficiência</p><p class="text-gray-600 text-xs mt-1">A que custo? Os recursos de tempo, dinheiro e pessoas foram bem utilizados?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Impacto</p><p class="text-gray-600 text-xs mt-1">Que diferença fez de verdade? Quais os efeitos de médio e longo prazo?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Sustentabilidade</p><p class="text-gray-600 text-xs mt-1">Os benefícios persistem após o fim do projeto? Pode ser replicado?</p></div></div><p class="text-xs text-gray-600 mt-3"><strong>Síntese:</strong> Você está medindo se <em>fez certo</em> (eficiência), se <em>fez a coisa certa</em> (relevância e eficácia), e se <em>vai continuar fazendo</em> (sustentabilidade)?</p>',
      },
      {
        title: 'Inovação e Tecnologia',
        body: '<p><strong>Tecnologia não é requisito de inovação.</strong> O Manual de Oslo é explícito: inovação pode não envolver pesquisa e desenvolvimento (P&D) ou novas tecnologias. Inovação também ocorre pela <strong>difusão de tecnologias e práticas já existentes para novos contextos.</strong> Reorganizar um fluxo de atendimento ao cidadão pode ser tão inovador quanto criar um algoritmo.</p><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-green-900">A 4ª edição do Manual (2018) incorporou digitalização, dados e software como <strong>vetores de inovação mensuráveis, mas sem torná-los obrigatórios.</strong></p><p class="text-gray-700 text-sm mt-2">A pergunta certa: <em>"Qual problema precisamos resolver?"</em> — não <em>"Qual sistema vamos usar?"</em></p><p class="text-gray-700 text-sm mt-1"><strong>Tecnologia é meio, não fim.</strong></p></div>',
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
        body: '<p>Um problema mal definido leva a <strong>soluções erradas</strong> — e desperdício de tempo, dinheiro e energia.</p><div class="bg-red-50 border-l-4 border-red-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-red-900">"Precisamos de um novo sistema"</p><p class="text-red-800 text-sm mt-1">↑ Já é uma <strong>solução embutida</strong> num problema mal descrito.</p></div><p class="mt-3"><strong>A inovação começa em entender o problema real, não o sintoma visível.</strong></p>',
      },
      {
        title: 'Técnica dos 5W',
        body: '<p class="text-sm mb-3">Cinco perguntas simples para descrever qualquer problema com clareza e precisão — sem embutir a solução:</p><div class="grid grid-cols-2 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Who</p><p class="text-gray-600 text-xs mt-1">Quem está envolvido ou é afetado?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">What</p><p class="text-gray-600 text-xs mt-1">O quê exatamente está acontecendo?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">When</p><p class="text-gray-600 text-xs mt-1">Quando o problema ocorre?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Where</p><p class="text-gray-600 text-xs mt-1">Onde exatamente acontece?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white col-span-2"><p class="font-semibold text-gray-900 text-sm">Why</p><p class="text-gray-600 text-xs mt-1">Por quê isso é um problema? Qual o impacto real?</p></div></div><p class="text-xs text-gray-600 mt-3"><strong>Use quando:</strong> precisar alinhar uma equipe sobre o que exatamente está sendo resolvido.</p>',
      },
      {
        title: '5 Porquês',
        body: '<p>Pergunte <strong>"por quê?" cinco vezes até chegar à causa raiz.</strong></p><div class="space-y-2 my-3 text-sm"><div><p class="font-semibold text-gray-900">1. "O evento começou atrasado."</p><p class="text-gray-600">Por quê?</p></div><div class="ml-4 border-l border-gray-300 pl-3"><p class="font-semibold text-gray-900">2. "A rampa estava escorregadia."</p><p class="text-gray-600">Por quê?</p></div><div class="ml-8 border-l border-gray-300 pl-3"><p class="font-semibold text-gray-900">3. "Havia sabão no chão."</p><p class="text-gray-600">Por quê?</p></div><div class="ml-12 border-l border-gray-300 pl-3"><p class="font-semibold text-gray-900">4. "O sabonete foi substituído por detergente."</p><p class="text-gray-600">Por quê?</p></div><div class="ml-16 border-l border-green-500 pl-3"><p class="font-semibold text-gray-900">5. <strong>Falta de controle de insumos</strong></p></div></div><div class="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 rounded-r"><p class="text-gray-900 font-semibold">A causa raiz não era a rampa — era a falta de controle de insumos.</p></div>',
      },
      {
        title: 'Diagrama de Ishikawa',
        body: '<p class="text-sm mb-3">Também chamado de <strong>espinha de peixe</strong>. Organiza as causas de um problema em <strong>seis categorias (6Ms)</strong>:</p><div class="grid grid-cols-2 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Método</p><p class="text-gray-600 text-xs mt-1">Como o processo funciona? Há documentação clara?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Mão de obra</p><p class="text-gray-600 text-xs mt-1">Treinamento, competência, disponibilidade?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Máquina</p><p class="text-gray-600 text-xs mt-1">Equipamentos funcionam? Manutenção adequada?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Material</p><p class="text-gray-600 text-xs mt-1">Qualidade, quantidade, fornecimento?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Meio ambiente</p><p class="text-gray-600 text-xs mt-1">Espaço, temperatura, condições de trabalho?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Medição</p><p class="text-gray-600 text-xs mt-1">Como medir? Qual é o padrão de qualidade?</p></div></div><p class="text-xs text-gray-600 mt-3"><strong>Ideal para:</strong> problemas complexos onde várias causas se combinam — e visualizar isso em equipe.</p>',
      },
      {
        title: 'Erro clássico: problema com solução embutida',
        body: '<table class="w-full border-collapse text-sm"><thead><tr class="bg-red-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">❌ ERRADO</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">✓ CORRETO</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3 font-semibold text-red-700">"Precisamos de um novo sistema de TI"</td><td class="border border-gray-200 p-3 font-semibold text-green-700">"Servidores não conseguem acompanhar o andamento de seus processos em tempo real"</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3 text-xs">→ Já contém a solução</td><td class="border border-gray-200 p-3 text-xs">→ Descreve o problema real</td></tr><tr><td class="border border-gray-200 p-3 text-xs">→ Fecha o pensamento</td><td class="border border-gray-200 p-3 text-xs">→ Abre possibilidades</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3 text-xs">→ Bloqueia alternativas</td><td class="border border-gray-200 p-3 text-xs">→ Sistema, planilha, painel físico, etc.</td></tr></tbody></table>',
      },
    ],
    challenge: {
      type: 'image-gen',
      image: '/images/modulo2-rampa.jpg',
    },
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
        body: '<p><strong>Uma abordagem colaborativa e centrada no ser humano</strong> para desenvolver soluções criativas de forma iterativa.</p><p class="mt-2">Não começa nas soluções — <strong>começa nas dores das pessoas.</strong> Surgiu em Stanford e foi popularizada pela IDEO.</p><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-blue-900">A premissa é simples: <strong>entender antes de propor.</strong></p></div>',
      },
      {
        title: 'A história do Design Thinking',
        body: `<p class="text-sm text-gray-600 mb-4">O DT tem raízes mais antigas do que a IDEO — a história começa quase 60 anos atrás.</p>

<div class="space-y-3">

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">1919</span>
    </div>
    <div class="flex-1 border-l-2 border-gray-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">Bauhaus</p>
      <p class="text-xs text-gray-600">Escola alemã já praticava multidisciplinaridade e resolução de problemas centrada em pessoas — DNA do DT moderno.</p>
    </div>
  </div>

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1969</span>
    </div>
    <div class="flex-1 border-l-2 border-gray-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">Herbert Simon</p>
      <p class="text-xs text-gray-600"><em>The Sciences of the Artificial</em> — primeira vez que o design é descrito como "forma de pensar", não apenas forma de fazer.</p>
    </div>
  </div>

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded">1973</span>
    </div>
    <div class="flex-1 border-l-2 border-gray-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">Robert McKim</p>
      <p class="text-xs text-gray-600"><em>Experiences in Visual Thinking</em> — consolida o pensamento visual como ferramenta central de inovação na engenharia.</p>
    </div>
  </div>

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">1980s</span>
    </div>
    <div class="flex-1 border-l-2 border-gray-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">Rolf Faste — Stanford</p>
      <p class="text-xs text-gray-600">Formaliza o DT como "ação criativa" e cria o programa em Stanford — onde forma David Kelley.</p>
    </div>
  </div>

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-coral-100 text-red-700 text-xs font-bold px-2 py-1 rounded bg-red-100">1991</span>
    </div>
    <div class="flex-1 border-l-2 border-gray-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">IDEO fundada por David Kelley</p>
      <p class="text-xs text-gray-600">Aplica o DT em projetos corporativos reais — mas curiosamente ainda sem usar o nome "Design Thinking" nos primeiros anos.</p>
    </div>
  </div>

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">2004</span>
    </div>
    <div class="flex-1 border-l-2 border-gray-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">d.school — Stanford</p>
      <p class="text-xs text-gray-600">Instituto de Design de Stanford sistematiza as 5 etapas que usamos hoje: Empatia → Definição → Ideação → Prototipagem → Teste.</p>
    </div>
  </div>

  <div class="flex gap-3 items-start">
    <div class="w-16 flex-shrink-0 text-right">
      <span class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">2006–09</span>
    </div>
    <div class="flex-1 border-l-2 border-amber-200 pl-3 pb-2">
      <p class="text-sm font-semibold text-gray-900">Tim Brown globaliza o DT</p>
      <p class="text-xs text-gray-600">Apresenta no Fórum de Davos (2006) e publica <em>Change by Design</em> (2009) — bestseller que coloca o DT nas prateleiras de gestores do mundo inteiro.</p>
    </div>
  </div>

</div>

<div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800">
  <strong>Ponto-chave:</strong> inovação raramente surge do zero. O próprio DT é uma recombinação de décadas de ideias — Bauhaus + engenharia + psicologia + negócios.
</div>`,
      },
      {
        title: 'Fase 1 — Empatia',
        body: '<p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">1</span> <strong>Entender profundamente as pessoas envolvidas.</strong></p><p class="mt-2">Isso significa <strong>sair do achismo e ir a campo:</strong> conversar, observar, acompanhar. Não fique no nível superficial.</p><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="text-sm"><strong>Sair de:</strong> "o usuário é resistente"</p><p class="text-sm mt-1"><strong>Chegar em:</strong> "o servidor evita o SIGAD porque ele <em>trava justamente quando há mais pressa</em>"</p><p class="text-xs text-blue-900 mt-2">← Detalhe que muda tudo.</p></div>',
      },
      {
        title: 'Fase 2 — Definição (HMW)',
        body: '<p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">2</span> <strong>Transformar o aprendizado da empatia em uma pergunta clara de desafio.</strong></p><p class="mt-2"><span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded mr-2">HMW</span> <em>"Como nós poderíamos...?"</em> (How Might We)</p><div class="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-gray-900 text-sm">Exemplo (setor público):</p><p class="text-sm text-gray-700 mt-1">"Como nós poderíamos ajudar servidores a acompanhar processos <strong>sem depender de um sistema instável?</strong>"</p></div><p class="text-sm text-gray-600">A pergunta certa <strong>abre espaço criativo</strong> sem prender em uma solução específica.</p>',
      },
      {
        title: 'Fase 3 — Ideação',
        body: `<p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">3</span> <strong>Gerar o máximo de ideias possíveis sem julgamento.</strong></p>

<div class="bg-orange-50 border-l-4 border-orange-400 px-4 py-3 my-3 rounded-r">
  <p class="font-semibold text-orange-900">Regra de ouro: <strong>quantidade antes de qualidade</strong></p>
  <p class="text-orange-800 text-sm mt-2">A filtragem vem depois. Ideias absurdas às vezes geram soluções brilhantes.</p>
</div>

<p class="font-semibold text-gray-900 mt-4 mb-3">Principais técnicas de ideação:</p>

<div class="space-y-4">

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <p class="font-semibold text-gray-900 text-sm mb-1">🧠 Brainstorming clássico</p>
    <p class="text-gray-600 text-sm">Grupo gera ideias livremente, sem críticas. Toda ideia é bem-vinda. Depois, o grupo filtra e prioriza.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <p class="font-semibold text-gray-900 text-sm mb-1">⚡ Crazy 8s</p>
    <p class="text-gray-600 text-sm">Cada participante dobra uma folha de papel em 8 partes e tem <strong>8 minutos para esboçar 8 ideias diferentes</strong> — 1 por quadrante. O objetivo é quebrar o bloqueio criativo pela velocidade: sem tempo para autocensura, o cérebro improvisa. Ideal para a etapa individual antes de um brainstorming coletivo.</p>
    <div class="bg-yellow-50 border-l-4 border-yellow-400 px-3 py-2 mt-2 rounded-r text-xs text-yellow-900 font-medium">1 minuto por ideia. Esboços, não obras de arte.</div>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <p class="font-semibold text-gray-900 text-sm mb-2">🔄 SCAMPER</p>
    <p class="text-gray-600 text-sm mb-3">Checklist de perguntas criativas criado por Bob Eberle (1971), baseado em Alex Osborn. Cada letra é um verbo de ação que força olhar para o problema de um ângulo diferente. Aplicável na etapa de Ideação do DT — especialmente útil quando o grupo trava.</p>
    <div class="space-y-2">
      <div class="flex items-start gap-3 p-2 rounded-lg bg-purple-50 cursor-pointer hover:bg-purple-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o S do SCAMPER — Substituir — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-purple-200 text-purple-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">S</span>
        <div><p class="text-xs font-semibold text-gray-900">Substitute — Substituir</p><p class="text-xs text-gray-600">"O que posso substituir? Materiais, processos, pessoas, regras?"</p></div>
      </div>
      <div class="flex items-start gap-3 p-2 rounded-lg bg-teal-50 cursor-pointer hover:bg-teal-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o C do SCAMPER — Combinar — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-teal-200 text-teal-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">C</span>
        <div><p class="text-xs font-semibold text-gray-900">Combine — Combinar</p><p class="text-xs text-gray-600">"O que posso unir? Dois serviços, dois públicos, dois processos?"</p></div>
      </div>
      <div class="flex items-start gap-3 p-2 rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o A do SCAMPER — Adaptar — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-blue-200 text-blue-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">A</span>
        <div><p class="text-xs font-semibold text-gray-900">Adapt — Adaptar</p><p class="text-xs text-gray-600">"O que posso adaptar de outro contexto? Que ideia de fora posso trazer?"</p></div>
      </div>
      <div class="flex items-start gap-3 p-2 rounded-lg bg-amber-50 cursor-pointer hover:bg-amber-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o M do SCAMPER — Modificar — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">M</span>
        <div><p class="text-xs font-semibold text-gray-900">Modify / Magnify — Modificar / Ampliar</p><p class="text-xs text-gray-600">"O que posso ampliar, exagerar, enfatizar? O que posso reduzir?"</p></div>
      </div>
      <div class="flex items-start gap-3 p-2 rounded-lg bg-red-50 cursor-pointer hover:bg-red-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o P do SCAMPER — Put to other uses — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-red-200 text-red-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">P</span>
        <div><p class="text-xs font-semibold text-gray-900">Put to other uses — Usar de outro jeito</p><p class="text-xs text-gray-600">"Posso usar isso de uma forma diferente? Para outro público, outro fim?"</p></div>
      </div>
      <div class="flex items-start gap-3 p-2 rounded-lg bg-green-50 cursor-pointer hover:bg-green-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o E do SCAMPER — Eliminar — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-green-200 text-green-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">E</span>
        <div><p class="text-xs font-semibold text-gray-900">Eliminate — Eliminar</p><p class="text-xs text-gray-600">"O que posso remover? O que é desnecessário, redundante, burocrático?"</p></div>
      </div>
      <div class="flex items-start gap-3 p-2 rounded-lg bg-pink-50 cursor-pointer hover:bg-pink-100 transition-colors" onclick="sendPrompt && sendPrompt('Dê exemplos práticos de como usar o R do SCAMPER — Rearrange/Reverse — para inovar em serviços do setor público')">
        <span class="inline-block w-7 h-7 rounded-md bg-pink-200 text-pink-900 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">R</span>
        <div><p class="text-xs font-semibold text-gray-900">Rearrange / Reverse — Reorganizar / Inverter</p><p class="text-xs text-gray-600">"E se eu inverter a ordem? E se o usuário viesse primeiro, não último?"</p></div>
      </div>
    </div>
    <div class="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600">
      <strong class="text-gray-900">Como usar em sala:</strong> escolha um serviço público concreto, escreva no centro do quadro e passe cada letra como gatilho de pergunta para os grupos. O objetivo não é responder todas as letras — é usar as que destravarem ideias.
    </div>
  </div>

</div>`,
      },
      {
        title: 'Fase 4 — Prototipagem',
        body: '<p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">4</span> <strong>Construir representações rápidas e baratas das melhores ideias.</strong></p><p class="mt-2">Um protótipo de papel custa <strong>15 minutos</strong> e pode ser jogado fora sem culpa.</p><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-gray-900"><strong>O objetivo não é acertar — é aprender barato.</strong></p><p class="text-green-900 font-semibold mt-2">Mantra: "Falhe rápido, falhe barato"</p></div>',
      },
      {
        title: 'Fase 5 — Teste',
        body: '<p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mr-2">5</span> <strong>Colocar o protótipo na frente de usuários reais e observar sem interferir.</strong></p><div class="bg-purple-50 border-l-4 border-purple-500 px-4 py-3 my-3 rounded-r"><p class="text-sm font-semibold text-gray-900">Regra importante:</p><p class="text-purple-900 text-sm mt-1"><strong>Não explique.</strong> Deixe a pessoa interagir e anote o que acontece.</p></div><p class="mt-2"><strong>Mentalidade:</strong> O teste é para <strong>aprender</strong>, não para validar sua ideia. Itere com o que você descobriu.</p>',
      },
      {
        title: 'Cases reais',
        body: '<div class="space-y-4"><div class="border-l-4 border-blue-500 pl-4"><p class="font-semibold text-gray-900">IBM</p><p class="text-gray-600 text-sm">Redesenhou toda a experiência do usuário interno com Design Thinking — <strong>reduzindo reuniões</strong> e <strong>aumentando satisfação</strong>.</p></div><div class="border-l-4 border-blue-500 pl-4"><p class="font-semibold text-gray-900">Airbnb</p><p class="text-gray-600 text-sm">Salvou a empresa de quase falir ao fotografar melhor os imóveis depois de <strong>entrevistar hospedeiros pessoalmente.</strong></p><p class="text-xs text-blue-900 font-semibold mt-1">→ Não criou um novo produto. Mudou a percepção com empatia.</p></div></div>',
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
        body: '<p class="text-sm mb-3">Publicado em <strong>2001 por 17 desenvolvedores</strong>. Define 4 valores fundamentais:</p><div class="space-y-2"><div class="text-sm"><p class="font-semibold text-gray-900">👥 Indivíduos e interações</p><p class="text-gray-600 text-xs ml-4">> processos e ferramentas</p></div><div class="text-sm"><p class="font-semibold text-gray-900">⚙️ Produto funcionando</p><p class="text-gray-600 text-xs ml-4">> documentação abrangente</p></div><div class="text-sm"><p class="font-semibold text-gray-900">🤝 Colaboração com o cliente</p><p class="text-gray-600 text-xs ml-4">> negociação de contratos</p></div><div class="text-sm"><p class="font-semibold text-gray-900">🔄 Responder a mudanças</p><p class="text-gray-600 text-xs ml-4">> seguir um plano</p></div></div><p class="text-xs text-gray-600 mt-3"><em>Os itens à direita têm valor — mas os à esquerda têm mais.</em></p>',
      },
      {
        title: 'Scrum em resumo',
        body: '<p class="text-sm mb-3"><strong>Framework ágil com sprints</strong> — ciclos curtos de <strong>1 a 4 semanas</strong> com entrega ao final.</p><p class="text-sm font-semibold text-gray-900 mb-2">Três papéis:</p><div class="grid grid-cols-1 gap-3 mb-4"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Product Owner</p><p class="text-gray-600 text-xs mt-1">Dono do produto e prioridades — define O QUE será feito</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Scrum Master</p><p class="text-gray-600 text-xs mt-1">Facilitador do processo — remove impedimentos e protege o time</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Equipe de Desenvolvimento</p><p class="text-gray-600 text-xs mt-1">Time multidisciplinar autogerenciado — executa e decide COMO fazer. Idealmente de 3 a 9 pessoas.</p></div></div><p class="text-sm font-semibold text-gray-900 mb-2">Quatro cerimônias:</p><div class="grid grid-cols-2 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Planning</p><p class="text-gray-600 text-xs mt-1">O que fazer?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Daily</p><p class="text-gray-600 text-xs mt-1">O que está rolando?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Review</p><p class="text-gray-600 text-xs mt-1">O que entregamos?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Retrospectiva</p><p class="text-gray-600 text-xs mt-1">Como melhoramos?</p></div></div>',
      },
      {
        title: 'Kanban',
        body: '<p><strong>Visualizar o fluxo de trabalho em colunas simples:</strong></p><div class="flex gap-2 my-3 text-xs"><div class="flex-1 bg-gray-100 border border-gray-300 rounded p-2 text-center"><strong>A Fazer</strong></div><div class="flex-1 bg-blue-100 border border-blue-300 rounded p-2 text-center"><strong>Em Andamento</strong></div><div class="flex-1 bg-green-100 border border-green-300 rounded p-2 text-center"><strong>Concluído</strong></div></div><div class="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-yellow-900">Regra principal: <strong>limitar o WIP</strong> (Work In Progress)</p><p class="text-yellow-800 text-sm mt-1">Quantidade máxima de tarefas simultâneas. Evita acúmulo e revela gargalos.</p></div><p class="text-xs text-gray-600">💡 Pode ser implementado com post-its em 10 minutos.</p>',
      },
      {
        title: 'Ágil fora da TI',
        body: '<p><strong>Metodologias ágeis se aplicam a qualquer contexto:</strong></p><div class="space-y-2 mt-3 text-sm"><p class="flex items-start"><span class="mr-2">•</span> Gestão de equipes</p><p class="flex items-start"><span class="mr-2">•</span> Projetos de capacitação</p><p class="flex items-start"><span class="mr-2">•</span> Auditorias</p><p class="flex items-start"><span class="mr-2">•</span> Processos legislativos</p><p class="flex items-start"><span class="mr-2">•</span> Campanhas de comunicação</p></div><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-blue-900">O princípio é o mesmo:</p><p class="text-blue-800 text-sm mt-1"><strong>Entregar valor em ciclos curtos</strong> → aprender com feedback real → <strong>adaptar o plano</strong> (em vez de seguir um roteiro rígido)</p></div>',
      },
      {
        title: 'Gestão Tradicional vs. Ágil',
        body: '<table class="w-full border-collapse text-sm"><thead><tr class="bg-orange-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Gestão Tradicional</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Gestão Ágil</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3">Planejar tudo antes de começar</td><td class="border border-gray-200 p-3">Planejar o suficiente e adaptar no caminho</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3">TAP, TEP, escopo fechado</td><td class="border border-gray-200 p-3">Escopo adaptável, iterativo</td></tr><tr><td class="border border-gray-200 p-3">Ideal para: requisitos estáveis e previsíveis</td><td class="border border-gray-200 p-3">Ideal para: ambientes incertos e mutáveis</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3">Mudanças são custosas</td><td class="border border-gray-200 p-3">Mudanças são esperadas</td></tr></tbody></table><p class="text-xs text-gray-600 mt-3"><strong>Cada abordagem tem seu contexto ideal.</strong> Escolha baseado na natureza do projeto, não em preferência pessoal.</p>',
      },
      {
        title: 'Outras ferramentas ágeis',
        body: `<p class="text-sm text-gray-600 mb-4">Além de Scrum e Kanban, o ecossistema ágil oferece ferramentas para diferentes contextos. As tags indicam quando cada uma se encaixa melhor.</p>

<div class="space-y-3">

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">XP — Extreme Programming</p>
        <p class="text-xs text-gray-500">Kent Beck, 1996</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-medium">Equipes pequenas</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">Qualidade</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Eleva boas práticas ao extremo: revisão em pares, ciclos curtíssimos de entrega, feedback constante. <strong>Fora da TI:</strong> revisão em dupla de normas, pareceres e políticas públicas.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">FDD — Feature Driven Development</p>
        <p class="text-xs text-gray-500">Jeff De Luca, 1997</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-medium">Entregas claras</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">Médias equipes</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Organiza o trabalho em "funcionalidades" entregáveis com nome, responsável e prazo de 2 semanas. <strong>Setor público:</strong> reformas de processos organizadas por entrega — cada melhoria tem dono e data.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">Lean Thinking</p>
        <p class="text-xs text-gray-500">Toyota, anos 1950</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">Qualquer equipe</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 font-medium">Eliminar desperdício</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">A raiz cultural de todo o movimento ágil. Identifica e elimina os 7 desperdícios (<em>muda</em>): superprodução, espera, transporte, excesso de processamento, estoque, movimento e defeitos. <strong>Setor público:</strong> mapear fluxo de valor em processos de compras ou protocolo para cortar etapas que não agregam valor ao cidadão.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">Lean Startup</p>
        <p class="text-xs text-gray-500">Eric Ries, 2011</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 font-medium">Projetos-piloto</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">Incerteza alta</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Ciclo <strong>Construir → Medir → Aprender</strong>: entrega o mínimo necessário (MPV) para aprender com usuários reais antes de escalar. Diretamente ligado ao MPV do Módulo 8. <strong>Setor público:</strong> projetos piloto em políticas públicas como forma de testar antes de escalar para todo o órgão.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">Crystal Methods</p>
        <p class="text-xs text-gray-500">Alistair Cockburn, 2004</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-medium">Equipes pequenas</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">Baixa cerimônia</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Família de métodos que varia com o tamanho do time: Crystal Clear (3–8 pessoas) é o mais leve de todos. Prioriza comunicação e entrega, com cerimônias mínimas. <strong>Setor público:</strong> equipes pequenas de projetos-piloto que precisam de agilidade sem a estrutura do Scrum completo.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">DSDM — Dynamic Systems Development</p>
        <p class="text-xs text-gray-500">Consórcio DSDM, 1994</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-medium">Prazo legal/orçamentário</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">Governo</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Inverte a lógica: prazo e custo são fixos, o escopo varia. Usa priorização <strong>MoSCoW</strong> (Must, Should, Could, Won't). Muito popular no governo britânico. <strong>Setor público:</strong> projetos com deadline legal ou orçamentária fixa — o que não cabe no prazo vai para a próxima versão, não atrasa a entrega.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">SAFe — Scaled Agile Framework</p>
        <p class="text-xs text-gray-500">Dean Leffingwell, 2011</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">Equipes maiores</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-medium">Transformação digital</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Para quando uma organização inteira precisa ser ágil, não só um time. Coordena múltiplos times Scrum em torno de um backlog estratégico compartilhado. <strong>Setor público:</strong> transformações digitais de grande porte em órgãos com múltiplas áreas e sistemas legados.</p>
  </div>

  <div class="border border-gray-200 rounded-xl p-4 bg-white">
    <div class="flex items-start justify-between gap-2 mb-2">
      <div>
        <p class="text-sm font-semibold text-gray-900">OKRs — Objectives & Key Results</p>
        <p class="text-xs text-gray-500">Andy Grove / Google</p>
      </div>
      <div class="flex flex-wrap gap-1 justify-end">
        <span class="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">Qualquer equipe</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 font-medium">Alinhamento estratégico</span>
      </div>
    </div>
    <p class="text-xs text-gray-600">Não é metodologia de projeto — é ferramenta de alinhamento. Define O QUE alcançar (objetivo qualitativo) e COMO medir (resultados-chave mensuráveis) em ciclos trimestrais. Conecta sprints à estratégia institucional. Já usado no MPOG e agências reguladoras. <strong>Ver também:</strong> Módulo 9.</p>
  </div>

</div>

<div class="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-600">
  <strong class="text-gray-900">Como escolher?</strong> Não existe resposta certa — existe contexto. Equipe pequena num piloto de 3 meses → Crystal ou Lean Startup. Transformação de 2 anos com 8 equipes → SAFe. Fluxo operacional contínuo sem data de fim → Kanban. A escolha certa é a que serve ao problema, não à preferência.
</div>`,
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
        body: '<p><strong>Jobs to Be Done (JTBD)</strong> é um framework criado por <strong>Clayton Christensen.</strong></p><div class="bg-purple-50 border-l-4 border-purple-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-purple-900">Ideia central:</p><p class="text-purple-800 text-sm mt-1">As pessoas não <strong>compram produtos</strong> — elas <strong>"contratam" produtos</strong> para fazer um trabalho para elas.</p></div><p class="mt-2">A pergunta certa não é <em>"o que você quer comprar?"</em> mas <strong>"qual tarefa você está tentando realizar?"</strong></p>',
      },
      {
        title: 'Três tipos de Jobs',
        body: '<p class="text-sm mb-3">Um bom produto resolve os três:</p><div class="space-y-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900">Funcional</p><p class="text-gray-600 text-sm mt-1">O que a pessoa precisa fazer?<br/><span class="text-xs text-gray-500">Ex: agendar consulta, acessar benefício</span></p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900">Emocional</p><p class="text-gray-600 text-sm mt-1">Como ela quer se sentir?<br/><span class="text-xs text-gray-500">Ex: segura, respeitada, capaz</span></p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900">Social</p><p class="text-gray-600 text-sm mt-1">Como quer ser percebida pelos outros?<br/><span class="text-xs text-gray-500">Ex: competente, moderna, organizada</span></p></div></div>',
      },
      {
        title: 'Framework de Declaração',
        body: '<p class="text-sm mb-3 font-semibold text-gray-900">Fórmula padrão:</p><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-gray-900"><span class="font-semibold">Quando</span> <em>[situação]</em>, <span class="font-semibold">eu quero</span> <em>[motivação]</em>, <span class="font-semibold">para que</span> <em>[resultado esperado]</em>.</p></div><p class="text-sm font-semibold text-gray-900 mb-2">Exemplo (setor público):</p><div class="border border-gray-200 rounded-lg p-3 bg-white text-sm"><p class="text-gray-700"><span class="font-semibold">Quando</span> preciso marcar uma consulta no Senado,</p><p class="text-gray-700 mt-1"><span class="font-semibold">eu quero</span> que o sistema funcione no celular,</p><p class="text-gray-700 mt-1"><span class="font-semibold">para que</span> eu consiga resolver sem ligar para ninguém e esperar na linha.</p></div>',
      },
      {
        title: 'Cases',
        body: '<div class="space-y-3"><div class="border-l-4 border-orange-500 pl-4"><p class="font-semibold text-gray-900 text-sm">McDonald\'s</p><p class="text-gray-600 text-xs mt-1">Descobriu que milkshakes eram <strong>"contratados" de manhã</strong> para acompanhar o trajeto de carro. O job real: <em>ter algo para fazer e comer devagar.</em></p></div><div class="border-l-4 border-orange-500 pl-4"><p class="font-semibold text-gray-900 text-sm">Duolingo</p><p class="text-gray-600 text-xs mt-1">Usa gamificação para resolver o job <strong>emocional</strong> de <em>se sentir progredindo.</em></p></div><div class="border-l-4 border-orange-500 pl-4"><p class="font-semibold text-gray-900 text-sm">Amazon</p><p class="text-gray-600 text-xs mt-1">Criou a <strong>"regra de 1 clique"</strong> para minimizar a fricção entre <em>intenção</em> e <em>compra.</em></p></div></div>',
      },
      {
        title: 'Aplicação no setor público',
        body: '<div class="space-y-2"><p class="text-sm"><strong>O cidadão não quer um login no portal</strong> — quer <strong>acessar o benefício sem fricção.</strong></p><p class="text-sm"><strong>Não quer um chatbot com FAQ</strong> — quer <strong>uma resposta clara em 2 minutos.</strong></p><p class="text-sm"><strong>Não quer um processo digitalizado que replica o papel</strong> — quer que <strong>o serviço funcione.</strong></p></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-green-900">JTBD nos força a pensar:</p><p class="text-green-800 text-sm mt-1"><strong>no resultado real,</strong> não no recurso entregue.</p></div>',
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
        body: '<p><strong>Experiência do Usuário (UX)</strong> inclui <strong>todas as emoções, percepções e respostas</strong> que ocorrem:</p><div class="flex gap-2 my-3 text-xs font-semibold"><div class="flex-1 text-center bg-blue-100 text-blue-900 py-2 rounded">Antes</div><div class="flex-1 text-center bg-blue-100 text-blue-900 py-2 rounded">Durante</div><div class="flex-1 text-center bg-blue-100 text-blue-900 py-2 rounded">Após</div></div><p class="text-xs text-gray-600 mb-3">↳ Definição ISO 9241-210</p><div class="bg-red-50 border-l-4 border-red-500 px-4 py-3 rounded-r"><p class="font-semibold text-red-900"><strong>UX não é</strong> sobre design de telas.</p><p class="font-semibold text-red-900 mt-1"><strong>UX é</strong> sobre a <strong>experiência completa</strong> que alguém tem ao interagir com qualquer serviço.</p></div>',
      },
      {
        title: 'UX não é sobre telas bonitas',
        body: '<p class="text-sm mb-3"><strong>É sobre reduzir dor e aumentar fluidez.</strong></p><table class="w-full border-collapse text-sm"><thead><tr class="bg-green-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Cenário 1</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Cenário 2</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3">Visual moderno ✨</td><td class="border border-gray-200 p-3">Visual feio 😐</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3">Experiência: frustrante 😤</td><td class="border border-gray-200 p-3">Experiência: perfeita ✓</td></tr></tbody></table><div class="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-yellow-900">O usuário sempre "tem razão"</p><p class="text-yellow-800 text-sm mt-1">Se algo gera confusão, o problema é <strong>do serviço,</strong> não do usuário.</p></div>',
      },
      {
        title: 'A Jornada do Usuário',
        body: '<p class="text-sm mb-3"><strong>Mapa visual</strong> que representa o <strong>caminho completo</strong> de uma pessoa ao interagir com um serviço.</p><div class="space-y-1 my-3 text-xs"><p><strong>Começa:</strong> primeiro contato</p><p><strong>Termina:</strong> conclusão (ou abandono) da tarefa</p></div><p class="text-sm mb-3"><strong>Inclui:</strong></p><div class="grid grid-cols-2 gap-2 text-xs"><div class="border border-gray-200 rounded p-2">Pontos de dor</div><div class="border border-gray-200 rounded p-2">Emoções</div><div class="border border-gray-200 rounded p-2">Canais usados</div><div class="border border-gray-200 rounded p-2">Oportunidades</div></div><div class="bg-purple-50 border-l-4 border-purple-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-purple-900">Ferramenta poderosa</p><p class="text-purple-800 text-sm mt-1">Visualizar <strong>onde a experiência quebra</strong> e corrigir nos pontos certos.</p></div>',
      },
      {
        title: 'Quantos cliques?',
        body: '<table class="w-full border-collapse text-sm"><thead><tr class="bg-blue-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Amazon</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">SIGAD</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3 font-semibold text-green-700">1 a 2 cliques</td><td class="border border-gray-200 p-3 font-semibold text-red-700">?? Cliques</td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3 text-xs">"Comprar agora" + dados já salvos</td><td class="border border-gray-200 p-3 text-xs">Para abrir um processo</td></tr></tbody></table><p class="text-sm mt-4"><strong>Cada fricção conta:</strong></p><div class="space-y-2 text-xs my-3"><p>• Cada clique desnecessário = fricção</p><p>• Cada campo obrigatório que não deveria ser = fricção</p><p>• Cada mensagem de erro genérica = fricção</p></div><div class="bg-red-50 border-l-4 border-red-500 px-4 py-3 rounded-r"><p class="font-semibold text-red-900">Redesenhar a jornada</p><p class="text-red-800 text-sm mt-1">é eliminar esses obstáculos <strong>um por um.</strong></p></div>',
      },
      {
        title: 'UI vs. UX',
        body: '<table class="w-full border-collapse text-sm"><thead><tr class="bg-green-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">UI (User Interface)</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">UX (User Experience)</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3"><strong>É o visual e a interação:</strong></td><td class="border border-gray-200 p-3"><strong>É o todo:</strong></td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3 text-xs">Botões, cores, tipografia, layout</td><td class="border border-gray-200 p-3 text-xs">Da necessidade até satisfação pós-uso</td></tr><tr><td class="border border-gray-200 p-3 text-xs"><span class="text-red-700">UI bonita + UX péssima:</span> lindo mas confuso ❌</td><td class="border border-gray-200 p-3 text-xs"><span class="text-red-700">UI feia + UX excelente:</span> funciona bem ✓</td></tr></tbody></table><p class="text-xs text-gray-600 mt-3"><strong>Nos melhores produtos, os dois andam juntos.</strong> Nem beleza sem usabilidade, nem usabilidade sem beleza.</p>',
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
        body: '<div class="space-y-3"><div class="border-l-4 border-blue-500 pl-4"><p class="text-sm font-semibold text-gray-900"><strong>600%</strong> de crescimento</p><p class="text-xs text-gray-600">Patentes relacionadas a IA cresceram 600% desde 2010</p></div><div class="border-l-4 border-blue-500 pl-4"><p class="text-sm font-semibold text-gray-900"><strong>70% dos governos OCDE</strong></p><p class="text-xs text-gray-600">Já possuem estratégias formais de inovação pública (OCDE, 2023)</p></div></div><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-gray-900">O setor público <strong>não está de fora</strong> dessa transformação.</p><p class="text-sm text-blue-900 font-semibold mt-1">Está cada vez mais pressionado a usar IA para <strong>melhorar serviços</strong> <strong>sem aumentar custos.</strong></p></div>',
      },
      {
        title: 'IA como ferramenta, não solução mágica',
        body: '<p class="text-sm"><strong>IA resolve problemas bem definidos.</strong></p><div class="bg-red-50 border-l-4 border-red-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-red-900">⚠️ Risco crítico:</p><p class="text-red-800 text-sm mt-1">Sem clareza sobre o problema, <strong>a IA amplifica o caos.</strong></p><p class="text-red-800 text-xs mt-2">→ Automatizar um processo ruim = processo ruim automatizado</p></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-green-900">✓ Ordem correta:</p><p class="text-green-800 text-sm mt-1"><strong>1. Entender o problema</strong> → <strong>2. Redesenhar o processo</strong> → <strong>3. Considerar IA como habilitadora</strong></p></div>',
      },
      {
        title: 'Casos no setor público brasileiro',
        body: '<p class="text-sm mb-3">O Brasil já tem casos concretos:</p><div class="grid grid-cols-1 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">ChatPetrobras</p><p class="text-gray-600 text-xs mt-1">Assistente interno de IA para consultas técnicas e documentos</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">Lê-AI (TCU)</p><p class="text-gray-600 text-xs mt-1">Sistema de análise automatizada de documentos de licitação</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-sm">RaI (TCU)</p><p class="text-gray-600 text-xs mt-1">Ferramenta de IA para geração de relatórios de auditoria</p></div></div><p class="text-xs text-blue-700 font-semibold mt-3">E o Senado está no caminho.</p>',
      },
      {
        title: 'Inovação em todos os tamanhos',
        body: '<div class="space-y-3"><div class="border-l-4 border-purple-500 pl-4"><p class="font-semibold text-gray-900 text-sm">🧠 Neuralink (2024)</p><p class="text-gray-600 text-xs mt-1">Primeiro humano recebeu implante para controle de dispositivos <strong>pelo pensamento</strong></p></div><div class="border-l-4 border-purple-500 pl-4"><p class="font-semibold text-gray-900 text-sm">💧 Just Water</p><p class="text-gray-600 text-xs mt-1">Startup vendeu <strong>água em pó</strong> e captou US$ 7 milhões — inovação de <em>embalagem e modelo</em></p></div></div><div class="bg-purple-50 border-l-4 border-purple-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-purple-900">Inovação não tem tamanho mínimo</p><p class="text-purple-800 text-sm mt-1">O que importa é o <strong>impacto gerado.</strong></p></div>',
      },
      {
        title: 'Como o Senado pode inovar com IA?',
        body: '<p class="text-sm mb-3">Oportunidades concretas:</p><div class="grid grid-cols-2 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Triagem de Petições</p><p class="text-gray-600 text-xs mt-1">Classificação automática e priorização</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Análise Legal</p><p class="text-gray-600 text-xs mt-1">Projetos de lei e precedentes legislativos</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Automatização</p><p class="text-gray-600 text-xs mt-1">Relatórios e sumários de reuniões</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Assistentes</p><p class="text-gray-600 text-xs mt-1">Consultas de normas internas</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white col-span-2"><p class="font-semibold text-gray-900 text-xs">Monitoramento Real-time</p><p class="text-gray-600 text-xs mt-1">Acompanhamento de processos com alertas</p></div></div><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-blue-900">O potencial é enorme</p><p class="text-blue-800 text-sm mt-1">E começa com <strong>um problema bem definido.</strong></p></div>',
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
        body: '<p class="text-sm"><strong>Mínimo Produto Viável (MVP)</strong> é a <strong>versão mais simples possível</strong> de uma solução que ainda:</p><div class="space-y-2 my-3 text-xs"><div class="flex items-start gap-2"><span class="text-green-600 font-bold">✓</span> <span>Entrega valor real</span></div><div class="flex items-start gap-2"><span class="text-green-600 font-bold">✓</span> <span>Permite aprender com feedback real</span></div></div><p class="text-sm"><strong>Não é um produto incompleto</strong> — é um <strong>produto focado.</strong></p><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-green-900">Objetivo principal:</p><p class="text-green-800 text-sm mt-1"><strong>Aprendizagem mais rápida</strong> com o menor investimento.</p><p class="text-green-800 text-sm mt-1"><em>Não é o produto perfeito.</em></p></div>',
      },
      {
        title: 'Metodologia Lean',
        body: '<p class="text-sm font-semibold text-gray-900 mb-2">O ciclo Lean:</p><div class="flex gap-1 my-3 text-xs"><div class="flex-1 bg-blue-100 text-blue-900 py-2 px-1 rounded text-center font-semibold">Construir</div><div class="flex-1 bg-blue-100 text-blue-900 py-2 px-1 rounded text-center font-semibold">Medir</div><div class="flex-1 bg-blue-100 text-blue-900 py-2 px-1 rounded text-center font-semibold">Aprender</div><div class="flex-1 bg-blue-100 text-blue-900 py-2 px-1 rounded text-center font-semibold">Repetir</div></div><p class="text-sm">Lançar rápido → medir o que importa → incorporar aprendizados → iterar.</p><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-gray-900"><strong>Evita gastar meses construindo a coisa errada.</strong></p><p class="text-xs text-blue-900 mt-2">Popularizado por <strong>Eric Ries</strong> em <em>The Lean Startup</em> — transformou a forma de criar produtos.</p></div>',
      },
      {
        title: 'Lean Inception',
        body: '<p class="text-sm"><strong>Workshop intensivo</strong> — normalmente <strong>1 semana</strong> — para alinhar um time inteiro sobre o MVP antes de começar a construir.</p><p class="text-sm mt-2"><strong>Cobre:</strong></p><div class="grid grid-cols-2 gap-2 text-xs my-3"><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded text-center">Visão do produto</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded text-center">Personas</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded text-center">Jornadas</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded text-center">Features (essenciais vs. descartáveis)</div></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-green-900"><strong>Criado por Paulo Caroli</strong> — muito usado no Brasil</p><p class="text-green-800 font-semibold mt-1">Economiza semanas de retrabalho.</p></div>',
      },
      {
        title: 'Prototipagem: do papel ao digital',
        body: '<div class="space-y-3"><div class="flex gap-3"><div class="w-6 h-6 bg-yellow-300 rounded-full flex-shrink-0 mt-1 font-bold text-center text-xs">1</div><div><p class="font-semibold text-gray-900 text-sm">Protótipo de papel</p><p class="text-gray-600 text-xs">15 minutos • Sem nenhuma culpa em descartar</p></div></div><div class="flex gap-3"><div class="w-0.5 bg-gray-300 ml-3"></div><div class="w-6 h-6 bg-yellow-300 rounded-full flex-shrink-0 mt-1 font-bold text-center text-xs">2</div><div><p class="font-semibold text-gray-900 text-sm">Wireframe digital</p><p class="text-gray-600 text-xs">Algumas horas • Testa layout e fluxo</p></div></div><div class="flex gap-3"><div class="w-0.5 bg-gray-300 ml-3"></div><div class="w-6 h-6 bg-yellow-300 rounded-full flex-shrink-0 mt-1 font-bold text-center text-xs">3</div><div><p class="font-semibold text-gray-900 text-sm">Protótipo interativo</p><p class="text-gray-600 text-xs">Dias • Testável com usuários</p></div></div><div class="flex gap-3"><div class="w-0.5 bg-red-500 ml-3"></div><div class="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 font-bold text-center text-xs text-white">✗</div><div><p class="font-semibold text-red-700 text-sm">Sistema legacy mal planejado</p><p class="text-red-600 text-xs">Anos de manutenção • Custoso e inflexível</p></div></div></div><p class="text-xs text-gray-600 mt-3"><strong>Moral:</strong> Testar suposições com custo baixo antes de comprometer recursos reais.</p>',
      },
      {
        title: 'Erro e Aprendizagem',
        body: '<p class="text-sm"><strong>Sucesso não é nunca errar</strong> — é <strong>aprender rápido e corrigir o curso.</strong></p><div class="bg-orange-50 border-l-4 border-orange-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-orange-900">Mentalidade:</p><p class="text-orange-800 text-sm mt-1">Culturas que <strong>aceitam o erro controlado</strong> inovam mais rápido.</p></div><div class="space-y-2 my-3 text-sm"><div><p class="text-red-700"><strong>❌ Erro não controlado:</strong> desperdício</p></div><div><p class="text-green-700"><strong>✓ Erro planejado:</strong> dentro de um experimento = aprendizado</p></div></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 rounded-r"><p class="font-semibold text-green-900">Princípio essencial:</p><p class="text-green-800 text-sm mt-1">O fracasso deve ser <strong>pequeno, rápido e barato.</strong></p><p class="text-xs text-green-700 mt-1">Assim você aprende sem queimar a organização.</p></div>',
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
        body: '<p class="text-sm"><strong>Objetivos ambiciosos e qualitativos</strong> + <strong>resultados-chave mensuráveis.</strong></p><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-blue-900 text-sm">Exemplo:</p><p class="text-blue-900 text-sm mt-2"><strong>Objetivo:</strong> "Transformar o atendimento ao servidor em referência nacional"</p><p class="text-blue-900 text-xs mt-2"><strong>Resultados-chave:</strong></p><p class="text-blue-900 text-xs mt-1">• Reduzir tempo médio de resposta de 5 para 2 dias</p><p class="text-blue-900 text-xs">• Aumentar satisfação de 60% para 85%</p></div><p class="text-xs text-gray-600">Usado pelo <strong>Google, Spotify</strong> e crescente no setor público.</p>',
      },
      {
        title: 'KPI (Key Performance Indicator)',
        body: '<p class="text-sm"><strong>Indicadores que medem o desempenho contínuo</strong> de um processo.</p><div class="bg-purple-50 border-l-4 border-purple-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-gray-900"><strong>KPIs vs OKRs:</strong></p><p class="text-purple-900 text-xs mt-2">🔍 <strong>KPIs</strong> = monitoram a <em>saúde da operação</em></p><p class="text-purple-900 text-xs mt-1">🚀 <strong>OKRs</strong> = impulsionam <em>mudança e transformação</em></p></div><p class="text-sm font-semibold text-gray-900 mb-2">Exemplos de KPI:</p><div class="space-y-1 text-xs text-gray-600"><p>• Taxa de respostas no prazo</p><p>• Número de processos abertos por semana</p><p>• Percentual de resolução no primeiro contato</p></div><p class="text-xs text-gray-600 mt-3"><strong>Ambos são necessários e complementares.</strong> Um monitora, outro transforma.</p>',
      },
      {
        title: 'Metas SMART',
        body: '<p class="text-sm mb-3">Toda meta de inovação deve passar por esse filtro:</p><div class="space-y-2"><div class="text-xs"><p class="font-semibold text-gray-900">S - Specific (específica)</p><p class="text-gray-600">Deixe claro o quê exatamente</p></div><div class="text-xs"><p class="font-semibold text-gray-900">M - Measurable (mensurável)</p><p class="text-gray-600">Tenha números, não conceitos vagos</p></div><div class="text-xs"><p class="font-semibold text-gray-900">A - Achievable (atingível)</p><p class="text-gray-600">Desafiadora mas realista</p></div><div class="text-xs"><p class="font-semibold text-gray-900">R - Relevant (relevante)</p><p class="text-gray-600">Alinhada com a estratégia</p></div><div class="text-xs"><p class="font-semibold text-gray-900">T - Time-bound (com prazo)</p><p class="text-gray-600">Data específica de conclusão</p></div></div><div class="bg-red-50 border-l-4 border-red-400 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-red-900 text-xs">❌ Não é SMART:</p><p class="text-red-800 text-xs">"Melhorar o atendimento"</p></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 rounded-r"><p class="font-semibold text-green-900 text-xs">✓ É SMART:</p><p class="text-green-800 text-xs">"Reduzir o tempo médio de resposta de 5 para 2 dias úteis até 31/12"</p></div>',
      },
      {
        title: 'O papel da liderança',
        body: '<table class="w-full border-collapse text-sm"><thead><tr class="bg-green-100"><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Foco em Resultados</th><th class="border border-gray-200 p-3 text-left font-semibold text-gray-900">Foco em Atividades</th></tr></thead><tbody><tr><td class="border border-gray-200 p-3">Cria <strong>clareza</strong></td><td class="border border-gray-200 p-3">Cria <strong>burocracia</strong></td></tr><tr class="bg-gray-50"><td class="border border-gray-200 p-3">Pessoas sabem o que importa e por quê</td><td class="border border-gray-200 p-3">Pessoas ficam <strong>ocupadas</strong> sem avançar</td></tr><tr><td class="border border-gray-200 p-3 text-xs"><strong>Pergunta:</strong> "Qual foi o impacto dessa reunião?"</td><td class="border border-gray-200 p-3 text-xs"><strong>Pergunta:</strong> "Quantas reuniões fizemos essa semana?"</td></tr></tbody></table>',
      },
      {
        title: 'Six-Page Memo',
        body: '<p class="text-sm">Usado pela <strong>Amazon em vez de apresentações</strong> de slides.</p><p class="text-sm mt-2"><strong>Documento narrativo de até 6 páginas</strong> que força o autor a pensar de forma completa:</p><div class="space-y-2 my-3 text-xs"><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded">Contexto</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded">Problema</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded">Solução</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded">Impacto esperado</div><div class="bg-blue-100 text-blue-900 py-2 px-2 rounded">Riscos</div></div><div class="bg-orange-50 border-l-4 border-orange-400 px-4 py-3 rounded-r"><p class="font-semibold text-orange-900 text-sm">Premissa de Jeff Bezos:</p><p class="text-orange-800 text-xs mt-1">"Quem não consegue <strong>escrever claramente</strong> sobre o que propõe, não entende o suficiente para propor."</p></div>',
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
        body: '<p class="text-sm"><strong>Everett Rogers, em 1962,</strong> descreveu como novas ideias e tecnologias se espalham em uma sociedade.</p><div class="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-blue-900">Insight principal:</p><p class="text-blue-800 text-sm mt-1">A adoção de uma inovação <strong>não depende só da qualidade dela</strong> — depende de <strong>como ela é percebida</strong> pelas pessoas e <strong>como se encaixa na vida delas.</strong></p></div><p class="text-sm font-semibold text-red-700 mt-3">💡 Conclusão: Inovação ótima que ninguém adota não é inovação.</p>',
      },
      {
        title: 'A Curva de Adoção',
        body: '<p class="text-sm mb-3">Rogers identificou cinco grupos na curva de adoção:</p><div class="space-y-2"><div class="text-xs"><p class="font-semibold text-gray-900">🚀 Inovadores — <span class="text-red-600">2,5%</span></p><p class="text-gray-600">Entusiastas que testam qualquer coisa nova</p></div><div class="text-xs"><p class="font-semibold text-gray-900">⭐ Adotantes Precoces — <span class="text-orange-600">13,5%</span></p><p class="text-gray-600">Influentes que adotam quando veem potencial</p></div><div class="text-xs"><p class="font-semibold text-gray-900">📈 Maioria Precoce — <span class="text-yellow-600">34%</span></p><p class="text-gray-600">Adotam quando veem resultado em outros</p></div><div class="text-xs"><p class="font-semibold text-gray-900">⏳ Maioria Tardia — <span class="text-blue-600">34%</span></p><p class="text-gray-600">Só adotam quando é inevitável</p></div><div class="text-xs"><p class="font-semibold text-gray-900">🚫 Retardatários — <span class="text-gray-600">16%</span></p><p class="text-gray-600">Resistem até o fim ou nunca adotam</p></div></div>',
      },
      {
        title: '5 fatores de adoção',
        body: '<p class="text-sm mb-3">Quanto mais presentes esses fatores, mais rápida a adoção:</p><div class="grid grid-cols-2 gap-3"><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Vantagem Relativa</p><p class="text-gray-600 text-xs mt-1">É melhor que o que já existe?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Compatibilidade</p><p class="text-gray-600 text-xs mt-1">Combina com meus valores e rotinas?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Complexidade</p><p class="text-gray-600 text-xs mt-1">É difícil de usar? (quanto menos, melhor)</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white"><p class="font-semibold text-gray-900 text-xs">Testabilidade</p><p class="text-gray-600 text-xs mt-1">Posso experimentar antes de comprometer?</p></div><div class="border border-gray-200 rounded-lg p-3 bg-white col-span-2"><p class="font-semibold text-gray-900 text-xs">Observabilidade</p><p class="text-gray-600 text-xs mt-1">Consigo ver resultados em quem já usou?</p></div></div><p class="text-xs text-gray-600 mt-3"><strong>Resumo:</strong> Quanto mais <em>simples de testar</em> e <em>visível o resultado,</em> mais rápida a adoção.</p>',
      },
      {
        title: 'Difusão é como fofoca',
        body: '<p class="text-sm">A inovação se espalha <strong>de pessoa a pessoa, por redes de confiança</strong> — não por decreto ou comunicado oficial.</p><div class="space-y-2 my-3"><div class="flex gap-3"><div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 text-xs font-bold text-center text-white">1</div><div><p class="text-sm text-gray-900">Inovador abre o caminho</p></div></div><div class="flex gap-3"><div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 text-xs font-bold text-center text-white">2</div><div><p class="text-sm text-gray-900">Adotantes precoces amplificam</p></div></div><div class="flex gap-3"><div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 text-xs font-bold text-center text-white">3</div><div><p class="text-sm text-gray-900">Maioria observa e segue</p></div></div></div><div class="bg-red-50 border-l-4 border-red-500 px-4 py-3 my-3 rounded-r"><p class="font-semibold text-red-900">❌ Não gera adoção:</p><p class="text-red-800 text-xs mt-1">Chefe que manda usar</p></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 rounded-r"><p class="font-semibold text-green-900">✓ Gera adoção:</p><p class="text-green-800 text-xs mt-1">Colega de confiança que recomenda</p></div>',
      },
      {
        title: 'Como aplicar no Senado',
        body: '<p class="text-sm font-semibold text-gray-900 mb-2">Estratégia em 3 passos:</p><div class="space-y-3"><div class="border-l-4 border-blue-500 pl-4"><p class="text-sm font-semibold text-gray-900">1. Identifique os embaixadores</p><p class="text-xs text-gray-600">Adotantes precoces da sua equipe — pessoas que gostam de testar e têm <strong>credibilidade com colegas</strong></p></div><div class="border-l-4 border-blue-500 pl-4"><p class="text-sm font-semibold text-gray-900">2. Comece por eles</p><p class="text-xs text-gray-600">Não pela maioria cética ou retardatários — comece pelos que têm visibilidade</p></div><div class="border-l-4 border-blue-500 pl-4"><p class="text-sm font-semibold text-gray-900">3. Crie sucesso visível</p><p class="text-xs text-gray-600">Casos de sucesso pequenos, reais e observáveis — deixe a difusão acontecer organicamente</p></div></div><div class="bg-green-50 border-l-4 border-green-500 px-4 py-3 my-3 rounded-r"><p class="text-sm text-green-900"><strong>Mentalidade:</strong> Não imponha. Demonstre. Deixe as pessoas copiarem quem confiam.</p></div>',
      },
    ],
  },
]
