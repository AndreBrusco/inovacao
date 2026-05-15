import { BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-senate-blue text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-senate-gold rounded-lg flex items-center justify-center">
                <BookOpen size={18} className="text-senate-blue" />
              </div>
              <span className="font-display font-bold">Inovação · PFG 2026</span>
            </div>
            <p className="text-blue-200 text-sm">
              Plataforma EAD complementar às aulas presenciais.<br />
              Módulos disponíveis para estudo autônomo.
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-blue-100 text-sm font-medium">Instituto Legislativo Brasileiro</p>
            <p className="text-blue-300 text-xs mt-1">Senado Federal · Programa de Formação Gerencial</p>
            <p className="text-blue-300 text-xs mt-1">Facilitador: <span className="text-senate-gold">André Brusco</span></p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-400 text-xs">
            © 2026 Instituto Legislativo Brasileiro. Material de uso educacional.
          </p>
        </div>
      </div>
    </footer>
  )
}
