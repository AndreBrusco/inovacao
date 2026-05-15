import ModuleCard from './ModuleCard'
import ToolsBlock from './ToolsBlock'

const lessonThemes = {
  1: {
    gradient: 'from-senate-green to-senate-green-light',
    badge: 'bg-white/20 text-white',
    dot: 'bg-green-300',
  },
  2: {
    gradient: 'from-teal-700 to-teal-500',
    badge: 'bg-white/20 text-white',
    dot: 'bg-teal-300',
  },
  3: {
    gradient: 'from-purple-700 to-purple-500',
    badge: 'bg-white/20 text-white',
    dot: 'bg-purple-300',
  },
  4: {
    gradient: 'from-indigo-700 to-indigo-500',
    badge: 'bg-white/20 text-white',
    dot: 'bg-indigo-300',
  },
}

export default function LessonSection({ lesson, modules, getModuleProgress }) {
  const theme = lessonThemes[lesson.id] ?? lessonThemes[1]

  return (
    <section className="mb-14">
      {/* Lesson header banner */}
      <div className={`rounded-2xl bg-gradient-to-r ${theme.gradient} text-white px-6 py-5 mb-6 shadow-md`}>
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${theme.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
            Aula {lesson.id}
          </span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold mt-1">{lesson.title}</h2>
        <p className="text-white/75 text-sm mt-1">{lesson.description}</p>
      </div>

      {/* Module cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 card-grid">
        {modules.map((module, i) => (
          <ModuleCard
            key={module.id}
            module={module}
            readPills={getModuleProgress(module.id)}
            index={i}
          />
        ))}
      </div>

      {/* AI Tools block */}
      <ToolsBlock tools={lesson.tools} />
    </section>
  )
}
