import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Module from './pages/Module'

export default function App() {
  // Forçar re-render quando localStorage muda (via togglePill)
  const [, setTick] = useState(0)
  useEffect(() => {
    const onStorage = () => setTick((t) => t + 1)
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modulo/:id" element={<Module />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
