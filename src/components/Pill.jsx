import { useState, useRef } from 'react'
import { ChevronDown, CheckCircle2, Circle } from 'lucide-react'

export default function Pill({ pill, index, isRead, onToggleRead, accentColor, accentLight }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        isRead
          ? 'border-green-200 bg-green-50'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      <button
        className="w-full flex items-center gap-4 p-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: accentLight, color: accentColor }}
        >
          {index + 1}
        </div>

        <span className="flex-1 font-semibold text-gray-900 text-sm sm:text-base">
          {pill.title}
        </span>

        <div className="flex items-center gap-2 flex-shrink-0">
          {isRead && (
            <CheckCircle2 size={16} className="text-senate-green-light" />
          )}
          <ChevronDown
            size={18}
            className={`text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <div
        ref={bodyRef}
        className="pill-body"
        style={{ maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 9999}px` : '0' }}
      >
        <div className="px-4 pb-4">
          <div className="ml-12">
            <div
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 pill-content"
              dangerouslySetInnerHTML={{ __html: pill.body }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleRead()
              }}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                isRead
                  ? 'bg-green-100 text-senate-green border border-green-200 hover:bg-green-200'
                  : 'text-white hover:opacity-90'
              }`}
              style={!isRead ? { backgroundColor: accentColor } : {}}
            >
              {isRead ? (
                <>
                  <CheckCircle2 size={14} />
                  Lida ✓
                </>
              ) : (
                <>
                  <Circle size={14} />
                  Marcar como lida
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
