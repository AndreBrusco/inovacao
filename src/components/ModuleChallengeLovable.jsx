import { useState } from 'react'
import { ExternalLink, Copy, Check, Lightbulb } from 'lucide-react'

const PROMPT_EXAMPLE = `Crie um site interno para o Senado Federal chamado [nome da sua ideia].
O sistema deve resolver o seguinte problema: [descreva o problema em 1-2 frases].
Funcionalidades principais:

[funcionalidade 1]
[funcionalidade 2]
[funcionalidade 3]

# O site deve conter:
Breadcrumbs para navegação
Barra lateral com menu de opções
Página inicial com visão geral e atalhos
Páginas internas para cada funcionalidade


# Formato e estilo:
Use fonte arial.
Use as cores institucionais do Senado Federal: verde escuro (#005A30), azul marinho (#003366) e dourado (#C9A84C).
O layout deve ser limpo, profissional e responsivo. Inclua uma barra de navegação, uma página inicial com hero section explicando o propósito, e pelo menos uma tela funcional com a funcionalidade principal.`

const ideas = [
  {
    emoji: '🗓️',
    title: 'Agendamento Inteligente',
    description: 'Sistema para reservar salas de reunião e auditórios com disponibilidade em tempo real',
  },
  {
    emoji: '📋',
    title: 'Painel de Processos',
    description: 'Dashboard onde o servidor acompanha o status dos seus processos administrativos',
  },
  {
    emoji: '🎓',
    title: 'Portal de Capacitação',
    description: 'Plataforma para servidores descobrirem e se inscreverem em cursos internos',
  },
  {
    emoji: '💡',
    title: 'Caixa de Inovação',
    description: 'Espaço para servidores submeterem e votarem em ideias de melhoria',
  },
]

function StepItem({ number, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
        {number}
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{children}</p>
    </div>
  )
}

function PromptBlock() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(PROMPT_EXAMPLE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-xs font-mono ml-1">prompt-exemplo.txt</span>
        </div>
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${copied
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
        >
          {copied ? (
            <><Check size={12} /> Copiado!</>
          ) : (
            <><Copy size={12} /> Copiar prompt</>
          )}
        </button>
      </div>
      <div className="bg-gray-900 p-4 max-h-56 overflow-y-auto">
        <pre className="text-green-300 text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
          {PROMPT_EXAMPLE}
        </pre>
      </div>
    </div>
  )
}

export default function ModuleChallengeLovable({ challenge }) {
  if (!challenge) return null

  return (
    <section className="mb-10 rounded-2xl border-2 border-dashed border-emerald-300/50 bg-gradient-to-br from-emerald-50/60 to-sky-50/40 overflow-hidden">

      {/* Header */}
      <div
        className="px-6 py-5 text-white"
        style={{ background: 'linear-gradient(to right, #059669, #0284C7)' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">🛠️</span>
          <div>
            <h2 className="font-display text-xl font-bold leading-tight">Desafio — Construa seu MVP</h2>
            <p className="text-emerald-100 text-sm mt-0.5">Crie um protótipo real de solução para o Senado Federal</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">

        {/* Intro */}
        <div className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm">
          <p className="text-gray-700 text-sm leading-relaxed">
            Você acabou de aprender o que é um MVP e por que ele existe. Agora é hora de sair do
            conceito e colocar a mão na massa. Com o <strong>Lovable</strong>, você vai criar um
            protótipo funcional de um site em minutos, sem escrever uma linha de código — e
            apresentar para a turma.
          </p>
        </div>

        {/* Card principal — O Desafio */}
        <div
          className="rounded-2xl p-5 text-white shadow-sm"
          style={{ background: 'linear-gradient(to right, #0284C7, #059669)' }}
        >
          <h3 className="font-display font-bold text-lg mb-2">
            Crie um protótipo que resolva um problema real do Senado
          </h3>
          <p className="text-sm text-white/85 leading-relaxed">
            Pense em algo que você ou seus colegas enfrentam no dia a dia. Pode ser um processo
            burocrático, uma necessidade de informação, uma melhoria no atendimento interno. Você
            vai usar o Lovable para transformar essa ideia em um site funcional.
            Seja ousada(o)! Adicione cores, funcionalidades, estilos, ideias e muito mais no prompt a seguir.
          </p>
        </div>

        {/* Exemplos de ideias */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Sugestões de projeto</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ideas.map((idea) => (
              <div key={idea.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{idea.emoji}</span>
                  <p className="text-sm font-semibold text-gray-900">{idea.title}</p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{idea.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 italic mt-3">
            Esses são apenas pontos de partida. A melhor ideia é aquela que resolve um problema que você conhece de verdade.
          </p>
        </div>

        {/* Passo a passo */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-sm space-y-3">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Passo a passo</p>
          <div className="space-y-3">
            <StepItem number="1">
              Acesse o Lovable no link abaixo e crie uma conta gratuita
            </StepItem>
            <StepItem number="2">
              Clique em <strong>"New Project"</strong> e descreva seu site num parágrafo — diga o que é, para quem é e o que o usuário pode fazer
            </StepItem>
            <StepItem number="3">
              Deixe a IA gerar a primeira versão. Não se preocupe se não ficar perfeito na primeira tentativa
            </StepItem>
            <StepItem number="4">
              Peça ajustes em linguagem natural:{' '}
              <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">"adicione uma barra de busca"</span>,{' '}
              <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">"mude a cor para o verde do Senado"</span>,{' '}
              <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">"crie uma tela de login"</span>
            </StepItem>
            <StepItem number="5">
              Compartilhe o link do projeto com a turma na apresentação
            </StepItem>
          </div>
        </div>

        {/* Dica de prompt */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            💡 Use este prompt como ponto de partida. Preencha os campos entre colchetes com a sua ideia:
          </p>
          <PromptBlock />
        </div>

        {/* CTA */}
        <a
          href="https://lovable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:opacity-90"
          style={{ background: 'linear-gradient(to right, #059669, #0284C7)' }}
        >
          <ExternalLink size={16} />
          Abrir Lovable
        </a>

        {/* Reflexão final */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <Lightbulb size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
              Reflexão final
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              O Lovable gerou um site em minutos a partir da sua descrição. Isso é exatamente o que
              um MVP é: a versão mais rápida e barata de testar se sua ideia funciona antes de
              investir tempo e dinheiro numa solução completa. Qual seria o próximo passo se você
              fosse levar esse protótipo para a aprovação da sua liderança?
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
