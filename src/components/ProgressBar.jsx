export default function ProgressBar({ value = 0, max = 100, color = '#007A40', label = '' }) {
  const percent = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">{label}</span>
          <span className="text-xs font-semibold" style={{ color }}>{percent}%</span>
        </div>
      )}
      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="h-1.5 rounded-full transition-all duration-700"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
