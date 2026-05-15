import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Users, Zap } from 'lucide-react'

export default function Hero({ totalModules, completedModules }) {
  const percent = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0

  return (
    <section className="gradient-hero text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-senate-gold text-senate-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            PFG 2026 · Instituto Legislativo Brasileiro
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Pensar diferente
            <span className="block text-senate-gold">também é trabalho.</span>
          </h1>

          <p className="text-green-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            10 módulos, desafios inovadores e pílulas de conhecimento diretas ao ponto e ferramentas que você já pode usar na segunda-feira.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#modulos"
              className="inline-flex items-center gap-2 bg-senate-gold text-senate-blue font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Começar agora
              <ArrowRight size={18} />
            </a>
          </div>

          {completedModules > 0 && (
            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-6 max-w-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Seu progresso</span>
                <span className="text-senate-gold font-bold">{percent}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-senate-gold rounded-full h-2 transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="text-green-200 text-xs mt-2">{completedModules} de {totalModules} módulos concluídos</p>
            </div>
          )}

          <div className="flex flex-wrap gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Lightbulb size={16} className="text-senate-gold" />
              <span>10 módulos</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-senate-gold" />
              <span>50+ pílulas de conhecimento</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-senate-gold" />
              <span>6+ Ferramentas Inovadoras </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-senate-gold" />
              <span>Facilitador: André Brusco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
