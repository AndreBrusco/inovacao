import { useState } from 'react'
import { ExternalLink, Copy, Check, Palette, Share2 } from 'lucide-react'

const ORIGINAL_PROMPT = `Wide establishing shot of the main access ramp of the Brazilian National Congress building in Brasília, a grand white modernist ramp leading to the iconic building with its characteristic dome and reflecting pools. The ramp is glistening and slippery, covered in excessive soap foam and detergent bubbles that shimmer under morning sunlight.
Several Brazilian government workers in formal business attire — dark suits, ties, formal leather shoes — are sliding and falling down the ramp in a chaotic chain reaction, like dominoes. One person near the top has both arms flailing upward, briefcase flying through the air. Another is mid-slide in the center, glasses launched off their face. A third person has already fallen at the bottom, legs up. Soap bubbles float in the air around them.
At the bottom of the ramp: orange traffic cones, yellow warning tape, and a small sign reading "ENTRADA INTERDITADA". An ambulance with red and blue lights waits nearby. A tipped-over bottle of green dish soap lies on the ramp edge.
In the background, a large event banner reads "INOVAÇÃO NO PARLAMENTO". The sky is bright blue, Brasília morning light.
Style: editorial illustration, slightly satirical and humorous, clean lines, vibrant colors, cinematic wide angle, semi-realistic, reminiscent of a New Yorker magazine cover or Brazilian editorial cartoon. High detail, sharp focus.`

const suggestions = [
  {
    emoji: '🐱',
    title: 'Versão felina',
    tip: 'Substitua "government workers" por "cats in tiny suits"',
    color: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100',
    badge: 'bg-orange-100 text-orange-600',
  },
  {
    emoji: '🌙',
    title: 'Versão noturna',
    tip: 'Troque "morning sunlight" por "night scene, city lights, neon reflections"',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100',
    badge: 'bg-indigo-100 text-indigo-600',
  },
  {
    emoji: '❄️',
    title: 'Versão glacial',
    tip: 'Adicione "the ramp is covered in ice, snowflakes falling"',
    color: 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100',
    badge: 'bg-sky-100 text-sky-600',
  },
  {
    emoji: '🎪',
    title: 'Versão carnaval',
    tip: 'Adicione "everyone wearing carnival costumes, confetti everywhere"',
    color: 'bg-pink-50 border-pink-200 text-pink-800 hover:bg-pink-100',
    badge: 'bg-pink-100 text-pink-600',
  },
  {
    emoji: '🤖',
    title: 'Versão robótica',
    tip: 'Substitua "government workers" por "robots in business suits"',
    color: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
    badge: 'bg-teal-100 text-teal-600',
  },
]

function PromptBlock() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(ORIGINAL_PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
      {/* Terminal title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-xs font-mono ml-1">prompt.txt</span>
        </div>
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
          }`}
        >
          {copied ? (
            <>
              <Check size={12} />
              Copiado!
            </>
          ) : (
            <>
              <Copy size={12} />
              Copiar Prompt
            </>
          )}
        </button>
      </div>
      {/* Prompt content */}
      <div className="bg-gray-900 p-4 max-h-56 overflow-y-auto">
        <pre className="text-green-300 text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
          {ORIGINAL_PROMPT}
        </pre>
      </div>
    </div>
  )
}

function SuggestionCard({ suggestion }) {
  return (
    <div
      className={`rounded-xl border p-4 cursor-default transition-all duration-150 ${suggestion.color}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{suggestion.emoji}</span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${suggestion.badge}`}>
          {suggestion.title}
        </span>
      </div>
      <p className="text-sm leading-relaxed">{suggestion.tip}</p>
    </div>
  )
}

function ImageSlot({ imageUrl }) {
  const [imgError, setImgError] = useState(false)

  if (imageUrl && !imgError) {
    return (
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
        <img
          src={imageUrl}
          alt="Rampa do Congresso Nacional — imagem gerada por IA"
          className="w-full object-cover max-h-80"
          onError={() => setImgError(true)}
        />
        <p className="text-center text-xs text-gray-400 py-2 bg-gray-50 border-t border-gray-100">
          🤖 Imagem gerada por Inteligência Artificial com Leonardo AI
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-8 text-center">
      <div className="text-5xl mb-3">🏛️</div>
      <p className="font-semibold text-blue-800 text-sm mb-1">
        Rampa do Congresso Nacional — Versão IA
      </p>
      <p className="text-xs text-blue-600 leading-relaxed max-w-xs mx-auto">
        A imagem será exibida aqui. Adicione o arquivo em{' '}
        <code className="bg-blue-100 px-1 rounded font-mono">public/images/modulo2-rampa.jpg</code>{' '}
        para visualizá-la.
      </p>
    </div>
  )
}

export default function ModuleChallengeImageGen({ challenge }) {
  if (!challenge) return null

  return (
    <section className="mb-10 rounded-2xl border-2 border-dashed border-blue-300/50 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎨</span>
          <div>
            <h2 className="font-display text-xl font-bold leading-tight">Desafio</h2>
            <p className="text-blue-100 text-sm mt-0.5">Recrie a imagem com IA generativa</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Image slot */}
        <ImageSlot imageUrl={challenge.image} />

        {/* Intro text */}
        <p className="text-gray-700 text-sm leading-relaxed">
          Essa imagem hilária que você viu na aula foi gerada por{' '}
          <strong>Inteligência Artificial</strong>. Sim — uma IA criou tudo isso: os servidores de
          terno escorregando, a ambulância esperando, a placa "Entrada Interditada"... tudo a partir
          de uma descrição em texto chamada <strong>prompt</strong>.
          <br />
          <br />
          Agora é a sua vez. Vamos usar a mesma ferramenta para criar (ou bagunçar) a sua própria
          versão!
        </p>

        {/* Original prompt */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            👆 Este é o <strong>prompt original</strong> (em inglês) usado para gerar a imagem da
            aula. Cole-o no Leonardo AI e veja o resultado — depois, modifique-o para criar a sua
            versão!
          </p>
          <PromptBlock />
        </div>

        {/* The challenge */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-gray-900 text-base flex items-center gap-2">
            ✏️ Agora modifique o prompt e crie a sua versão!
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Entre no <strong>Leonardo AI</strong>, cole o prompt acima e depois experimente alterar
            algumas partes para criar algo diferente. Quanto mais criativo, melhor!
          </p>

          {/* Suggestion cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {suggestions.map((s) => (
              <SuggestionCard key={s.title} suggestion={s} />
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://leonardo.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Palette size={16} />
            Abrir Leonardo AI
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Share section */}
        <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <Share2 size={18} className="text-senate-green flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>📤 Criou algo legal?</strong> Compartilhe com a turma! Mande sua imagem no
            grupo ou mostre para o facilitador — vamos ver as versões mais criativas juntos.
          </p>
        </div>
      </div>
    </section>
  )
}
