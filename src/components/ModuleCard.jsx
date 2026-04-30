import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import ProgressBar from './ProgressBar'

export default function ModuleCard({ module, readPills = [], index }) {
  const totalPills = module.pills.length
  const completedCount = readPills.length
  const isComplete = completedCount === totalPills

  return (
    <Link
      to={`/modulo/${module.id}`}
      className="card p-5 flex flex-col gap-4 animate-fade-in-up opacity-0 group"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ backgroundColor: module.accentLight }}
        >
          {module.icon}
        </div>

        {isComplete && (
          <CheckCircle2 size={20} className="text-senate-green-light flex-shrink-0 mt-1" />
        )}
      </div>

      <div className="flex-1">
        <span
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: module.accentColor }}
        >
          Módulo {module.id}
        </span>
        <h3 className="font-display font-bold text-gray-900 mt-1 text-base leading-snug group-hover:text-senate-green transition-colors">
          {module.title}
        </h3>
      </div>

      <div className="space-y-2">
        <ProgressBar
          value={completedCount}
          max={totalPills}
          color={module.accentColor}
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {completedCount}/{totalPills} pílulas
          </span>
          <span
            className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: module.accentColor }}
          >
            {isComplete ? 'Revisitar' : completedCount > 0 ? 'Continuar' : 'Iniciar'}
            <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
