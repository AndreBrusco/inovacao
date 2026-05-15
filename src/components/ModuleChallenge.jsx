import { ExternalLink, MessageSquare, Mic, BookOpen, Lightbulb } from 'lucide-react'

const MANUAL_URL =
  'https://www.gov.br/agu/pt-br/composicao/cgu/cgu/modelos/cti/consulta/manual-de-oslo-ocde-4a-edicao-2018.pdf/@@download/file'

function StepItem({ number, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-white/70 border border-current/20 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 text-inherit">
        {number}
      </div>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function QuestionCard({ question }) {
  return (
    <div className="flex items-start gap-2.5 bg-white rounded-xl px-4 py-3 border border-blue-100 shadow-sm">
      <MessageSquare size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-700 italic">"{question}"</p>
    </div>
  )
}

function StudioHint() {
  return (
    <div className="mt-4 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden">
      <div className="px-4 py-2.5 bg-slate-700 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-slate-300 text-xs font-mono ml-1">NotebookLM — Estúdio</span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-2">
        {[
          { icon: '🎙️', label: 'Resumo em Áudio', highlight: true },
          { icon: '🖥️', label: 'Apresentação de...', badge: 'BETA' },
          { icon: '🎬', label: 'Resumo em Vídeo', highlight: false },
          { icon: '🗺️', label: 'Mapa mental', highlight: false },
          { icon: '📄', label: 'Relatórios', highlight: false },
          { icon: '🃏', label: 'Cartões didáticos', highlight: false },
          { icon: '📝', label: 'Teste', highlight: false },
          { icon: '📊', label: 'Infográfico', badge: 'BETA', highlight: false },
          { icon: '📋', label: 'Tabela de dados', highlight: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
              item.highlight
                ? 'bg-yellow-400/20 border border-yellow-400/50 text-yellow-300 ring-1 ring-yellow-400/30'
                : 'bg-slate-700/60 text-slate-300'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto text-[10px] font-bold bg-slate-600 text-slate-300 px-1.5 py-0.5 rounded">
                {item.badge}
              </span>
            )}
            {item.highlight && (
              <span className="ml-auto text-[10px] font-bold bg-yellow-400 text-slate-900 px-1.5 py-0.5 rounded animate-pulse">
                ← aqui!
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 pb-3 text-xs text-slate-400 text-center">
        Painel <strong className="text-slate-300">Estúdio</strong> — clique em{' '}
        <strong className="text-yellow-300">Resumo em Áudio</strong> para gerar o podcast
      </div>
    </div>
  )
}

export default function ModuleChallenge({ challenge }) {
  if (!challenge) return null

  return (
    <section className="mb-10 rounded-2xl border-2 border-dashed border-senate-green/30 bg-gradient-to-br from-green-50/60 to-emerald-50/40 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-senate-green to-senate-green-light px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚀</span>
          <div>
            <h2 className="font-display text-xl font-bold leading-tight">Desafio</h2>
            <p className="text-green-100 text-sm mt-0.5">Coloque o conhecimento em prática</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Intro */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-senate-green/10 flex items-center justify-center flex-shrink-0">
            <BookOpen size={18} className="text-senate-green" />
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 text-sm leading-relaxed">{challenge.intro}</p>
            <a
              href={MANUAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-senate-green hover:underline bg-senate-green/10 px-3 py-1.5 rounded-lg"
            >
              <ExternalLink size={12} />
              Acessar Manual de Oslo (PDF)
            </a>
          </div>
        </div>

        {/* Desafio 1 */}
        <div className="rounded-2xl bg-white border border-blue-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔬</span>
              <h3 className="font-display font-bold text-base leading-tight">
                Desafio 1: Converse com o Manual de Oslo
              </h3>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              O <strong>NotebookLM</strong> é uma ferramenta do Google que usa IA para que você
              "converse" com documentos. Você vai carregar o Manual de Oslo lá e fazer perguntas
              como se fosse um assistente pessoal especialista no documento.
            </p>

            <div className="space-y-2.5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Passo a passo</p>
              <div className="space-y-2 text-gray-700">
                <StepItem number="1">
                  Acesse o{' '}
                  <a
                    href="https://notebooklm.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    NotebookLM <ExternalLink size={11} />
                  </a>
                </StepItem>
                <StepItem number="2">
                  Crie um novo notebook e faça upload do{' '}
                  <a
                    href={MANUAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Manual de Oslo <ExternalLink size={11} />
                  </a>
                </StepItem>
                <StepItem number="3">Faça as perguntas abaixo para o assistente:</StepItem>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide flex items-center gap-1">
                📌 Perguntas obrigatórias
              </p>
              {challenge.task1Questions.map((q, i) => (
                <QuestionCard key={i} question={q} />
              ))}
            </div>

            <a
              href="https://notebooklm.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <ExternalLink size={14} />
              Abrir NotebookLM
            </a>
          </div>
        </div>

        {/* Desafio 2 */}
        <div className="rounded-2xl bg-white border border-purple-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 text-white">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎙️</span>
                <h3 className="font-display font-bold text-base leading-tight">
                  Desafio 2: Crie um Podcast sobre Inovação!
                </h3>
              </div>
              <span className="text-xs font-bold bg-yellow-400 text-yellow-900 px-2.5 py-1 rounded-full flex-shrink-0">
                ✨ Bônus Inovador
              </span>
            </div>
          </div>
          <div className="p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              O NotebookLM tem um recurso incrível: ele transforma seu documento em um{' '}
              <strong>podcast com dois apresentadores de IA</strong> debatendo o conteúdo. É uma
              das funcionalidades mais impressionantes de IA generativa disponíveis hoje — e você
              vai usar agora.
            </p>

            <div className="space-y-2.5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Passo a passo</p>
              <div className="space-y-2 text-gray-700">
                <StepItem number="1">
                  No mesmo notebook do Desafio 1, abra o painel <strong>Estúdio</strong> (ícone no
                  canto superior direito)
                </StepItem>
                <StepItem number="2">
                  Clique em <strong>"Resumo em Áudio"</strong> conforme indicado abaixo
                </StepItem>
                <StepItem number="3">
                  Aguarde a geração — pode levar alguns minutos
                </StepItem>
                <StepItem number="4">
                  Ouça o episódio que a IA criou sobre o Manual de Oslo
                </StepItem>
                <StepItem number="5">
                  <strong>Bônus extra:</strong> você pode customizar o foco do podcast antes de
                  gerar, adicionando instruções personalizadas
                </StepItem>
              </div>
            </div>

            <StudioHint />

            {/* Reflection */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <Lightbulb size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                  Reflexão final
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  🤔 Pense: como uma ferramenta como essa poderia ser usada na sua área de trabalho
                  no Senado? Que tipo de documento você gostaria de transformar em podcast?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
