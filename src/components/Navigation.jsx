import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="fixed top-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Nom à gauche */}

          
          {/* Boutons de navigation à droite */}
          <div className="flex items-center gap-4">
            <Link 
              to="/about" 
              className="px-5 py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              À propos
            </Link>
            <Link 
              to="/projects" 
              className="px-5 py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Projets
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
