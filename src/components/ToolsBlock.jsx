const categoryColors = {
  'Criação Visual': 'bg-orange-100 text-orange-700',
  'Colaboração':    'bg-blue-100 text-blue-700',
  'Pesquisa':       'bg-emerald-100 text-emerald-700',
  'Diagramação':    'bg-purple-100 text-purple-700',
  'Produtividade':  'bg-slate-100 text-slate-700',
  'Design':         'bg-pink-100 text-pink-700',
  'IA Generativa':  'bg-amber-100 text-amber-700',
  'Desenvolvimento':'bg-teal-100 text-teal-700',
}

function ToolCard({ tool }) {
  const catColor = categoryColors[tool.category] ?? 'bg-gray-100 text-gray-700'

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-xl border border-gray-200 hover:border-senate-green/50 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50 flex items-center justify-center">
          <img
            src={tool.logo}
            alt={tool.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement.innerHTML =
                `<span class="text-xl font-bold text-gray-400">${tool.name[0]}</span>`
            }}
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-senate-green transition-colors truncate">
            {tool.name}
          </h4>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catColor}`}>
            {tool.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <p className="text-sm text-gray-600 leading-relaxed flex-1">{tool.description}</p>
        <span className="text-xs font-semibold text-senate-green flex items-center gap-1 group-hover:underline">
          Acessar ferramenta →
        </span>
      </div>
    </a>
  )
}

export default function ToolsBlock({ tools }) {
  const cols =
    tools.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className="mt-6 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-senate-green/10 flex items-center justify-center text-lg flex-shrink-0">
          🛠️
        </div>
        <div>
          <h3 className="font-display font-bold text-gray-900 text-base leading-tight">
            Ferramentas de IA e Inovação
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Ferramentas que complementam o conteúdo desta aula
          </p>
        </div>
      </div>
      <div className={`grid gap-4 ${cols}`}>
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  )
}
