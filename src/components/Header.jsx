import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-senate-green shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 bg-senate-gold rounded-lg flex items-center justify-center">
            <BookOpen size={18} className="text-senate-blue" />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-sm sm:text-base">Inovação</p>
            <p className="text-senate-gold text-xs hidden sm:block">PFG 2025 · ILB</p>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isHome ? 'text-senate-gold' : 'text-green-100 hover:text-white'
            }`}
          >
            Início
          </Link>
          <span className="text-green-200 text-xs border border-green-700 rounded-full px-3 py-1">
            2h EAD
          </span>
        </nav>

        <button
          className="sm:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-senate-green border-t border-green-700 px-4 py-3 flex flex-col gap-3">
          <Link
            to="/"
            className="text-white text-sm font-medium py-1"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
        </div>
      )}
    </header>
  )
}
