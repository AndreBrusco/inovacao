import { ExternalLink, Trello, BarChart2, Calendar, Lightbulb } from 'lucide-react'

function StepItem({ number, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-white/70 border border-gray-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {number}
      </div>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  )
}

export default function ModuleChallengeNotionBoard({ challenge }) {
  if (!challenge) return null

  return (
    <section className="mb-10 rounded-2xl border-2 border-dashed border-indigo-300/50 bg-gradient-to-br from-indigo-50/60 to-purple-50/40 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📋</span>
          <div>
            <h2 className="font-display text-xl font-bold leading-tight">Desafio</h2>
            <p className="text-indigo-100 text-sm mt-0.5">Crie um board de projetos no Notion</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">

        {/* Intro */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <Trello size={18} className="text-indigo-700" />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            O <strong>Notion</strong> permite criar boards de projetos com três visões complementares —
            exatamente como equipes ágeis trabalham na prática. Você vai criar um board do zero,
            explorar cada visão e entender quando usar cada uma.
          </p>
        </div>

        {/* Desafio 1 — Por Status (Kanban) */}
        <div className="rounded-2xl bg-white border border-indigo-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-4 text-white">
            <div className="flex items-center gap-2">
              <Trello size={18} />
              <h3 className="font-display font-bold text-base">Parte 1 — Board por Status (Kanban)</h3>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              A visão <strong>Por Status</strong> é o Kanban clássico: colunas que representam
              o estado de cada projeto. Você arrasta os cards conforme o trabalho avança.
            </p>

            {/* Preview visual do board */}
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-900 p-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Não iniciado', color: 'bg-gray-500', items: ['Planejamento trimestral de vendas'], badge: 'Média', badgeColor: 'bg-yellow-500' },
                  { label: 'Em andamento', color: 'bg-blue-500', items: ['Lançamento público do app para iOS'], badge: 'Alta', badgeColor: 'bg-red-500' },
                  { label: 'Concluído', color: 'bg-green-600', items: ['Renovar integração de novos funcionários'], badge: 'Baixa', badgeColor: 'bg-blue-400' },
                ].map((col) => (
                  <div key={col.label} className="bg-gray-800 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                      <span className="text-white text-xs font-semibold">{col.label}</span>
                      <span className="text-gray-400 text-xs ml-auto">1</span>
                    </div>
                    {col.items.map((item) => (
                      <div key={item} className="bg-gray-700 rounded-lg p-2.5 mb-2">
                        <p className="text-white text-xs leading-snug">{item}</p>
                        <span className={`inline-block mt-2 text-[10px] font-bold text-white px-2 py-0.5 rounded ${col.badgeColor}`}>
                          {col.badge}
                        </span>
                      </div>
                    ))}
                    <button className="w-full text-gray-500 text-xs py-1.5 rounded hover:bg-gray-700 transition-colors">
                      + Adicionar projeto
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Passo a passo</p>
              <div className="space-y-2 text-gray-700">
                <StepItem number="1">
                  Acesse o{' '}
                  <a href="https://notion.so" target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-indigo-600 hover:underline inline-flex items-center gap-1">
                    Notion <ExternalLink size={11} />
                  </a>{' '}
                  e crie uma nova página
                </StepItem>
                <StepItem number="2">
                  Escolha o bloco <strong>Board</strong> (ou Database → Board view)
                </StepItem>
                <StepItem number="3">
                  Crie a propriedade <strong>Status</strong> com os valores:{' '}
                  <span className="bg-gray-100 px-1.5 rounded font-mono text-xs">Não iniciado</span>{' '}
                  <span className="bg-blue-100 text-blue-800 px-1.5 rounded font-mono text-xs">Em andamento</span>{' '}
                  <span className="bg-green-100 text-green-800 px-1.5 rounded font-mono text-xs">Concluído</span>
                </StepItem>
                <StepItem number="4">
                  Adicione ao menos <strong>3 projetos fictícios</strong> distribuídos pelas colunas,
                  cada um com uma propriedade <strong>Prioridade</strong> (Alta / Média / Baixa)
                </StepItem>
              </div>
            </div>
          </div>
        </div>

        {/* Desafio 2 — Por Projeto + Gantt */}
        <div className="rounded-2xl bg-white border border-purple-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 text-white">
            <div className="flex items-center gap-2">
              <BarChart2 size={18} />
              <h3 className="font-display font-bold text-base">Parte 2 — Visão por Projeto e Gantt</h3>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              No mesmo banco de dados, adicione duas visões alternativas que mostram
              os mesmos projetos de ângulos diferentes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <Trello size={14} className="text-purple-600" />
                  <p className="text-sm font-semibold text-gray-900">Visão por Projeto</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Agrupe os cards por uma propriedade <strong>Responsável</strong> ou{' '}
                  <strong>Área</strong>. Permite ver a carga de trabalho por pessoa ou equipe
                  — útil para o gestor identificar desequilíbrios.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="text-pink-600" />
                  <p className="text-sm font-semibold text-gray-900">Visão Gantt (Timeline)</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Adicione propriedades de <strong>Data início</strong> e <strong>Data fim</strong>
                  aos projetos. A visão Timeline gera automaticamente um Gantt visual —
                  mostra sobreposições e dependências entre projetos.
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Passo a passo</p>
              <div className="space-y-2 text-gray-700">
                <StepItem number="1">
                  No seu banco de dados, clique em <strong>+ Add a view</strong>
                </StepItem>
                <StepItem number="2">
                  Adicione a visão <strong>Table</strong> e agrupe por <strong>Responsável</strong> —
                  essa é a "visão por projeto"
                </StepItem>
                <StepItem number="3">
                  Adicione uma segunda visão do tipo <strong>Timeline</strong>
                </StepItem>
                <StepItem number="4">
                  Configure as propriedades de <strong>Data início</strong> e <strong>Data fim</strong>
                  em cada projeto — o Gantt aparece automaticamente
                </StepItem>
                <StepItem number="5">
                  Explore: arraste as barras do Gantt para ajustar prazos e observe
                  como os projetos se relacionam no tempo
                </StepItem>
              </div>
            </div>

            <a
              href="https://notion.so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <ExternalLink size={14} />
              Abrir Notion
            </a>
          </div>
        </div>

        {/* Reflexão */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <Lightbulb size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
              Reflexão final
            </p>
            <div className="space-y-1.5 text-sm text-gray-700">
              <p>🤔 <strong>Kanban vs Gantt:</strong> quando cada visão ajuda mais no seu trabalho?</p>
              <p>🔄 <strong>Metodologia:</strong> qual dessas visões se conecta com Scrum? Qual com Kanban?</p>
              <p>🏛️ <strong>No Senado:</strong> que projetos da sua área se beneficiariam de um board como esse?</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
