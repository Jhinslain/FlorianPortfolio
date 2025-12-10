import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Star from './Star'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleProjectsClick = (e) => {
    e.preventDefault()
    closeMenu()
    
    if (location.pathname === '/') {
      // Si on est déjà sur la page d'accueil, faire défiler vers la section projets
      const projetsSection = document.getElementById('projets')
      if (projetsSection) {
        projetsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // Sinon, naviguer vers l'accueil puis faire défiler
      navigate('/')
      setTimeout(() => {
        const projetsSection = document.getElementById('projets')
        if (projetsSection) {
          projetsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6">
        <div className="flex justify-between items-center">
          {/* Nom à gauche */}
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-wider z-30 ml-2 sm:ml-4 pointer-events-none">
            Florian Levreau
          </div>
          
          {/* Menu desktop - visible à partir de md */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link 
              to="/about" 
              className="px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-white rounded-full bg-transparent text-white text-xs lg:text-sm font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>À propos</span>
            </Link>
            <a 
              href="/#projets"
              onClick={handleProjectsClick}
              className="px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-white rounded-full bg-transparent text-white text-xs lg:text-sm font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500 cursor-pointer"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>Projets</span>
            </a>
            <Link 
              to="/contact" 
              className="px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-white rounded-full bg-transparent text-white text-xs lg:text-sm font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>Contact</span>
            </Link>
            {/* Étoile à droite des liens */}
            <Star className="text-white w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
          </div>

          {/* Bouton hamburger mobile - visible uniquement sur mobile */}
          <div className="md:hidden flex items-center gap-2">
            <Star className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none z-50"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <div
          className={`md:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
          }`}
        >
          <div className="pt-20 pb-8 px-6 flex flex-col items-center gap-6">
            <Link
              to="/about"
              onClick={closeMenu}
              className="w-full max-w-xs px-6 py-3 border-2 border-white rounded-full bg-transparent text-white text-base font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500 text-center"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>À propos</span>
            </Link>
            <a
              href="/#projets"
              onClick={handleProjectsClick}
              className="w-full max-w-xs px-6 py-3 border-2 border-white rounded-full bg-transparent text-white text-base font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500 text-center cursor-pointer"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>Projets</span>
            </a>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full max-w-xs px-6 py-3 border-2 border-white rounded-full bg-transparent text-white text-base font-russo uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-500 text-center"
            >
              <span className="inline-block scale-y-150" style={{ transformOrigin: 'center' }}>Contact</span>
            </Link>
            <Star className="text-white w-6 h-6 mt-2" />
      </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
