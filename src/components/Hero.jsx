import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Star from './Star'

function Hero() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const [fontSize, setFontSize] = useState(100)

  useEffect(() => {
    const adjustFontSize = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const text = 'PORTFOLIO'
        
        // Mesurer la largeur du texte avec une taille de test
        const testElement = document.createElement('span')
        testElement.style.visibility = 'hidden'
        testElement.style.position = 'absolute'
        testElement.style.fontFamily = 'Russo One, sans-serif'
        testElement.style.fontSize = '100px'
        testElement.style.textTransform = 'uppercase'
        testElement.style.letterSpacing = '0.05em'
        testElement.style.whiteSpace = 'nowrap'
        testElement.textContent = text
        document.body.appendChild(testElement)
        
        const textWidth = testElement.offsetWidth
        document.body.removeChild(testElement)
        
        // Calculer la taille de police pour que le texte occupe toute la largeur
        const calculatedSize = (containerWidth / textWidth) * 100
        setFontSize(calculatedSize)
      }
    }

    adjustFontSize()
    window.addEventListener('resize', adjustFontSize)
    
    return () => {
      window.removeEventListener('resize', adjustFontSize)
    }
  }, [])

  return (
    <section className="relative w-full h-auto md:h-screen overflow-hidden">
      {/* Background gradient - violet foncé à indigo en bas à gauche */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-12 sm:top-16 md:top-20 left-4 sm:left-6 md:left-12 z-30 flex flex-col items-center">
        <Star className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-2" size={32} />
        <div className="w-px h-20 sm:h-32 md:h-40 bg-white"></div>
      </div>

      {/* Lignes verticales avec étoile en bas à droite (dans la marge) */}
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-4 sm:right-6 md:right-12 z-30 flex items-end gap-2 sm:gap-3">
        {/* Ligne longue (gauche) */}
        <div className="flex flex-col items-center relative">
          <div className="w-px h-20 sm:h-32 md:h-40 bg-white"></div>
          <Star className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-2" size={32} />
        </div>
        {/* Ligne courte (droite) */}
        <div className="w-px h-20 sm:h-32 md:h-40 bg-white"></div>
      </div>

      {/* Container avec padding uniforme */}
      <div className="relative w-full h-auto md:h-full p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 flex flex-col justify-start gap-4 sm:gap-6 md:gap-8 pb-8 sm:pb-12 md:pb-0">

        {/* PORTFOLIO - toute la largeur */}
        <div ref={containerRef} className="w-full pointer-events-none z-0 overflow-visible relative" style={{ paddingTop: '4rem', paddingBottom: '0.5rem' }}>
          <h2 
            ref={textRef}
            className="font-russo text-white opacity-90 uppercase tracking-tight leading-none select-none whitespace-nowrap scale-y-150 pointer-events-none" 
            style={{ fontSize: `${fontSize}px`, width: '100%', letterSpacing: '0.05em', transformOrigin: 'center', paddingLeft: '1rem' }}
          >
            Portfolio
          </h2>
          
          {/* Hero Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[15%] -translate-y-[0%] w-[40%] sm:w-[35%] md:w-[30%] h-[40vh] sm:h-[50vh] md:h-[60vh] z-30 pointer-events-none flex items-center justify-center">
            <img 
              src="/ImageHero.png" 
              alt="Hero" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 3D Artist avec masque SVG knockout */}
        <div className="z-30 pointer-events-none w-full overflow-hidden">
          {/* Version desktop - une ligne */}
          <svg 
            className="hidden lg:block w-full h-auto" 
            viewBox="0 0 1500 150" 
            preserveAspectRatio="xMidYMid meet"
            role="img" 
            aria-label="3D ARTIST knockout"
          >
            <defs>
              <mask id="knockout" maskUnits="userSpaceOnUse">
                <rect x="15" y="15" width="890" height="100" rx="30" fill="white"/>
                <text 
                  x="45" 
                  y="90"
                  fontFamily="Anton, sans-serif"
                  fontWeight="400" 
                  fontSize="55" 
                  letterSpacing="4"
                  fill="black">Ingénieur · Artiste 3D · Expert VR</text>
              </mask>
            </defs>

            <rect x="30" y="30" width="890" height="100" rx="30"
                  fill="none" stroke="white" strokeWidth="2"/>

            <rect x="15" y="15" width="890" height="100" rx="30"
                  fill="#e9ecff" mask="url(#knockout)"/>
          </svg>

          {/* 3 cartes avec le même design knockout - mobile et tablette uniquement */}
          <div className="lg:hidden w-full flex flex-col gap-2 sm:gap-3 md:gap-2">
            {/* Carte Ingénieur */}
            <svg 
              className="w-full h-auto" 
              viewBox="0 0 500 70" 
              preserveAspectRatio="xMidYMid meet"
              role="img" 
              aria-label="Ingénieur"
            >
              <defs>
                <mask id="knockout-mobile-1" maskUnits="userSpaceOnUse">
                  <rect x="15" y="10" width="180" height="50" rx="20" fill="white"/>
                  <text 
                    x="40" 
                    y="45"
                    fontFamily="Anton, sans-serif"
                    fontWeight="400" 
                    fontSize="24" 
                    letterSpacing="3"
                    fill="black">Ingénieur</text>
                </mask>
              </defs>
              <rect x="25" y="20" width="180" height="50" rx="20"
                    fill="none" stroke="white" strokeWidth="2"/>
              <rect x="15" y="10" width="180" height="50" rx="20"
                    fill="#e9ecff" mask="url(#knockout-mobile-1)"/>
            </svg>

            {/* Carte Artiste 3D */}
            <svg 
              className="w-full h-auto" 
              viewBox="0 0 500 70" 
              preserveAspectRatio="xMidYMid meet"
              role="img" 
              aria-label="Artiste 3D"
            >
              <defs>
                <mask id="knockout-mobile-2" maskUnits="userSpaceOnUse">
                  <rect x="15" y="10" width="180" height="50" rx="20" fill="white"/>
                  <text 
                    x="40" 
                    y="45"
                    fontFamily="Anton, sans-serif"
                    fontWeight="400" 
                    fontSize="24" 
                    letterSpacing="3"
                    fill="black">Artiste 3D</text>
                </mask>
              </defs>
              <rect x="25" y="20" width="180" height="50" rx="20"
                    fill="none" stroke="white" strokeWidth="2"/>
              <rect x="15" y="10" width="180" height="50" rx="20"
                    fill="#e9ecff" mask="url(#knockout-mobile-2)"/>
            </svg>

            {/* Carte Expert VR */}
            <svg 
              className="w-full h-auto" 
              viewBox="0 0 500 70" 
              preserveAspectRatio="xMidYMid meet"
              role="img" 
              aria-label="Expert VR"
            >
              <defs>
                <mask id="knockout-mobile-3" maskUnits="userSpaceOnUse">
                  <rect x="15" y="10" width="180" height="50" rx="20" fill="white"/>
                  <text 
                    x="40" 
                    y="45"
                    fontFamily="Anton, sans-serif"
                    fontWeight="400" 
                    fontSize="24" 
                    letterSpacing="3"
                    fill="black">Expert VR</text>
                </mask>
              </defs>
              <rect x="25" y="20" width="180" height="50" rx="20"
                    fill="none" stroke="white" strokeWidth="2"/>
              <rect x="15" y="10" width="180" height="50" rx="20"
                    fill="#e9ecff" mask="url(#knockout-mobile-3)"/>
            </svg>
          </div>
        </div>

        {/* Section Contact mobile et tablette - dans le flux normal */}
        <div className="lg:hidden flex flex-col gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10">
          {/* Étoile en haut */}
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 pointer-events-none">
            <Star className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" size={32} />
            
            {/* Bouton Contact Me */}
            <Link 
              to="/contact" 
              className="px-4 sm:px-6 md:px-5 py-2 sm:py-3 md:py-2.5 border-2 border-white rounded-full bg-transparent text-white text-sm sm:text-base md:text-sm font-black uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300 cursor-pointer pointer-events-auto relative z-50 whitespace-nowrap"
            >
              Contactez-moi
            </Link>
          </div>

          {/* Informations de contact - chaque ligne sur mobile */}
          <div className="text-white text-xs sm:text-sm flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 ml-0 sm:ml-8 md:ml-12 pointer-events-none">
            <p className="uppercase tracking-wide">
              <span className="font-bold">EMAIL</span> / <span className="lowercase break-all">florian.levreau@laposte.net</span>
            </p>
            <p className="uppercase tracking-wide">
              <span className="font-bold">instagram</span> / <span className="lowercase">@florian_levreau</span>
            </p>
          </div>
        </div>
      </div>

      {/* Section Contact desktop - en bas à gauche (position absolue) */}
      <div className="hidden lg:flex absolute bottom-12 left-12 z-40 flex-col gap-4">
        {/* Étoile en haut */}
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 pointer-events-none">
          <Star className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" size={32} />
          
          {/* Bouton Contact Me */}
          <Link 
            to="/contact" 
            className="px-4 sm:px-6 md:px-5 lg:px-8 py-2 sm:py-3 md:py-2.5 lg:py-4 border-2 border-white rounded-full bg-transparent text-white text-sm sm:text-base md:text-sm lg:text-xl font-black uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300 cursor-pointer pointer-events-auto relative z-50 whitespace-nowrap"
          >
            Contactez-moi
          </Link>
        </div>

        {/* Informations de contact - chaque ligne sur mobile */}
        <div className="text-white text-xs sm:text-sm flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 ml-0 sm:ml-8 md:ml-12 pointer-events-none">
          <p className="uppercase tracking-wide">
            <span className="font-bold">EMAIL</span> / <span className="lowercase break-all">florian.levreau@laposte.net</span>
          </p>
          <p className="uppercase tracking-wide">
            <span className="font-bold">instagram</span> / <span className="lowercase">@florian_levreau</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
