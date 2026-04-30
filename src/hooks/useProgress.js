import { useCallback } from 'react'

const STORAGE_KEY = 'pfg2025_progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage indisponível — modo silencioso
  }
}

export function useProgress() {
  const getModuleProgress = useCallback((moduleId) => {
    const data = loadProgress()
    return data[moduleId] ?? []
  }, [])

  const togglePill = useCallback((moduleId, pillIndex) => {
    const data = loadProgress()
    const current = data[moduleId] ?? []
    const isRead = current.includes(pillIndex)
    data[moduleId] = isRead
      ? current.filter((i) => i !== pillIndex)
      : [...current, pillIndex]
    saveProgress(data)
    // Força re-render disparando um evento de storage para componentes que escutam
    window.dispatchEvent(new Event('storage'))
  }, [])

  return { getModuleProgress, togglePill }
}
