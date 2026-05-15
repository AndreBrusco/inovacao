import { useMemo } from 'react'
import Hero from '../components/Hero'
import LessonSection from '../components/LessonSection'
import { modules } from '../data/modules'
import { lessons } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'

export default function Home() {
  const { getModuleProgress } = useProgress()

  const completedModules = useMemo(() => {
    return modules.filter((m) => {
      const read = getModuleProgress(m.id)
      return read.length === m.pills.length
    }).length
  }, [getModuleProgress])

  const moduleMap = useMemo(
    () => Object.fromEntries(modules.map((m) => [m.id, m])),
    []
  )

  return (
    <div>
      <Hero totalModules={modules.length} completedModules={completedModules} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12" id="modulos">
        <div className="mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
            Módulos do curso
          </h2>
          <p className="text-gray-500 mt-2">
            Cada módulo tem pílulas de conhecimento diretas ao ponto. Leia no seu ritmo, marque o progresso.
          </p>
        </div>

        {lessons.map((lesson) => {
          const lessonModules = lesson.moduleIds
            .map((id) => moduleMap[id])
            .filter(Boolean)

          return (
            <LessonSection
              key={lesson.id}
              lesson={lesson}
              modules={lessonModules}
              getModuleProgress={getModuleProgress}
            />
          )
        })}

        {completedModules === modules.length && (
          <div className="mt-4 text-center py-10 rounded-3xl bg-gradient-to-r from-senate-green to-senate-blue text-white">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-display text-2xl font-bold mb-2">Curso concluído!</h3>
            <p className="text-green-100">
              Você completou todos os 10 módulos. Parabéns pela dedicação!
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
