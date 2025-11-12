import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 py-3 md:py-4 lg:py-5 xl:py-6">
        <div className="flex justify-between items-center">
          {/* Nom à gauche */}
          <div className="text-white text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider z-30 ml-4 pointer-events-none">
            Florian Levreau
          </div>
          {/* Boutons de navigation à droite */}
          <div className="flex items-center gap-4">
            <Link 
              to="/about" 
              className="px-5 py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>À propos</span>
            </Link>
            <Link 
              to="/projects" 
              className="px-5 py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>Projets</span>
            </Link>
            <Link 
              to="/contact" 
              className="px-5 py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
