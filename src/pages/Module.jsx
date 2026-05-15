import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronRight, Home } from 'lucide-react'
import Pill from '../components/Pill'
import ProgressBar from '../components/ProgressBar'
import VideoEmbed from '../components/VideoEmbed'
import ModuleChallenge from '../components/ModuleChallenge'
import { modules } from '../data/modules'
import { useProgress } from '../hooks/useProgress'

export default function Module() {
  const { id } = useParams()
  const navigate = useNavigate()
  const moduleId = parseInt(id, 10)
  const module = modules.find((m) => m.id === moduleId)
  const { getModuleProgress, togglePill } = useProgress()

  if (!module) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-6xl mb-4">😕</p>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Módulo não encontrado</h2>
        <Link to="/" className="text-senate-green font-medium hover:underline">Voltar para o início</Link>
      </div>
    )
  }

  const readPills = getModuleProgress(module.id)
  const totalPills = module.pills.length
  const completedCount = readPills.length
  const prevModule = modules.find((m) => m.id === moduleId - 1)
  const nextModule = modules.find((m) => m.id === moduleId + 1)

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link to="/" className="flex items-center gap-1 hover:text-senate-green transition-colors">
          <Home size={14} />
          Início
        </Link>
        <ChevronRight size={14} />
        <span className="text-gray-700 font-medium truncate">{module.title}</span>
      </nav>

      {/* Header do módulo */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ backgroundColor: module.accentLight }}
          >
            {module.icon}
          </div>
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: module.accentColor }}
            >
              Módulo {module.id}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {module.title}
            </h1>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-gray-100 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Progresso do módulo</span>
            <span className="text-sm font-bold" style={{ color: module.accentColor }}>
              {completedCount}/{totalPills} pílulas lidas
            </span>
          </div>
          <ProgressBar
            value={completedCount}
            max={totalPills}
            color={module.accentColor}
          />
        </div>
      </div>

      {/* Vídeo (placeholder — adicionar URL via módulo quando disponível) */}
      {module.videoUrl && (
        <div className="mb-8">
          <VideoEmbed src={module.videoUrl} title={`Vídeo: ${module.title}`} />
        </div>
      )}

      {/* Pílulas */}
      <div className="space-y-3 mb-10">
        {module.pills.map((pill, i) => (
          <Pill
            key={i}
            pill={pill}
            index={i}
            isRead={readPills.includes(i)}
            onToggleRead={() => togglePill(module.id, i)}
            accentColor={module.accentColor}
            accentLight={module.accentLight}
          />
        ))}
      </div>

      {/* Desafio (se disponível para este módulo) */}
      {module.challenge && <ModuleChallenge challenge={module.challenge} />}

      {/* Navegação entre módulos */}
      <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {prevModule ? (
          <Link
            to={`/modulo/${prevModule.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-all text-sm font-medium"
          >
            <ArrowLeft size={16} />
            <div className="text-left">
              <p className="text-xs text-gray-400">Anterior</p>
              <p className="font-semibold text-gray-700">{prevModule.icon} {prevModule.title}</p>
            </div>
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-all text-sm font-medium"
          >
            <Home size={16} />
            Voltar ao início
          </Link>
        )}

        <div className="flex-1" />

        {nextModule ? (
          <Link
            to={`/modulo/${nextModule.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-white transition-all text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-90"
            style={{ backgroundColor: nextModule.accentColor }}
          >
            <div className="text-right">
              <p className="text-xs opacity-80">Próximo módulo</p>
              <p className="font-bold">{nextModule.icon} {nextModule.title}</p>
            </div>
            <ArrowRight size={16} />
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-senate-green text-white text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all"
          >
            🎉 Ver resumo
            <Home size={16} />
          </Link>
        )}
      </div>
    </main>
  )
}
