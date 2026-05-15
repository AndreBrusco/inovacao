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

/* ---------- Inline SVG logos ---------- */
function LogoLeonardoAI() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="leo-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#1B1B2E" />
      {/* Lightning bolt */}
      <polygon points="36,8 24,34 31,34 28,56 40,30 33,30" fill="url(#leo-g)" />
    </svg>
  )
}

function LogoMiro() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#FFD02F" />
      {/* Stylised M */}
      <path d="M14,44 L14,20 L22,20 L32,34 L42,20 L50,20 L50,44 L43,44 L43,30 L32,44 L21,30 L21,44 Z" fill="#050038" />
    </svg>
  )
}

function LogoNotebookLM() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#1A73E8" />
      {/* Notebook lines */}
      <rect x="16" y="14" width="32" height="36" rx="3" fill="white" opacity="0.15" />
      <rect x="20" y="20" width="24" height="2.5" rx="1.2" fill="white" opacity="0.9" />
      <rect x="20" y="26" width="24" height="2.5" rx="1.2" fill="white" opacity="0.9" />
      <rect x="20" y="32" width="16" height="2.5" rx="1.2" fill="white" opacity="0.9" />
      {/* Google-color dots */}
      <circle cx="22" cy="50" r="4" fill="#EA4335" />
      <circle cx="32" cy="50" r="4" fill="#FBBC04" />
      <circle cx="42" cy="50" r="4" fill="#34A853" />
    </svg>
  )
}

function LogoExcalidraw() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#6965DB" />
      {/* Sketch pencil icon */}
      <rect x="18" y="26" width="28" height="14" rx="3" fill="none" stroke="white" strokeWidth="2.5" />
      <line x1="18" y1="19" x2="46" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="23" y1="44" x2="41" y2="44" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pencil tip */}
      <line x1="30" y1="44" x2="32" y2="50" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="44" x2="32" y2="50" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function LogoNotion() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#191919" />
      {/* Notion-style serif N with shadow offset */}
      <text
        x="35" y="44"
        fontFamily="Georgia,serif"
        fontSize="38"
        fontWeight="700"
        fill="#191919"
        textAnchor="middle"
        dominantBaseline="auto"
      >N</text>
      <text
        x="32" y="42"
        fontFamily="Georgia,serif"
        fontSize="38"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        dominantBaseline="auto"
      >N</text>
    </svg>
  )
}

function LogoFigma() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#1E1E1E" />
      {/* Figma logo: 2 cols × 3 rows circles */}
      <circle cx="25" cy="21" r="8" fill="#F24E1E" />
      <circle cx="39" cy="21" r="8" fill="#FF7262" />
      <circle cx="25" cy="32" r="8" fill="#A259FF" />
      <circle cx="39" cy="32" r="8" fill="#1ABCFE" />
      <circle cx="25" cy="43" r="8" fill="#0ACF83" />
    </svg>
  )
}

function LogoCanva() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="canva-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#canva-g)" />
      {/* Bold C arc */}
      <path
        d="M42,22 A16,16 0 1,0 42,42"
        fill="none"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LogoClaude() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="claude-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8805A" />
          <stop offset="100%" stopColor="#CC4E00" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#claude-g)" />
      {/* Anthropic-style abstract mark — two overlapping arcs */}
      <path
        d="M20,38 C20,24 44,24 44,38"
        fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round"
      />
      <path
        d="M24,44 C24,30 40,30 40,44"
        fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" opacity="0.65"
      />
    </svg>
  )
}

function LogoClaudeCode() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="64" height="64" rx="14" fill="#0D1117" />
      {/* Code brackets < /> */}
      <text
        x="32" y="28"
        fontFamily="monospace,Courier New,sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="#E8805A"
        textAnchor="middle"
        dominantBaseline="middle"
      >{'< />'}</text>
      <text
        x="32" y="46"
        fontFamily="monospace,Courier New,sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="#8B8FA8"
        textAnchor="middle"
        dominantBaseline="middle"
      >Claude</text>
    </svg>
  )
}

const LOGOS = {
  'Leonardo AI':  LogoLeonardoAI,
  'Miro':         LogoMiro,
  'NotebookLM':   LogoNotebookLM,
  'Excalidraw':   LogoExcalidraw,
  'Notion':       LogoNotion,
  'Figma':        LogoFigma,
  'Canva':        LogoCanva,
  'Claude':       LogoClaude,
  'Claude Code':  LogoClaudeCode,
}

function ToolLogo({ name }) {
  const Logo = LOGOS[name]
  if (Logo) return <Logo />
  return (
    <span className="text-xl font-bold text-gray-400">{name[0]}</span>
  )
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
          <ToolLogo name={tool.name} />
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
