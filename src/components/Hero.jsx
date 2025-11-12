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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background gradient - violet foncé à indigo en bas à gauche */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-950 via-purple-800 to-blue-300"></div>

      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-8 left-12 z-30 flex flex-col items-center">
        <Star className="text-white w-8 h-8 mb-2" size={32} />
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Étoile à 4 branches en haut à droite */}
      <div className="absolute top-20 right-20 z-30">
        <Star className="text-white w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" size={128} />
      </div>

      {/* Lignes verticales avec étoile en bas à droite (dans la marge) */}
      <div className="absolute bottom-12 right-12 z-30 flex items-end gap-3">
        {/* Ligne longue (gauche) */}
        <div className="flex flex-col items-center relative">
          <div className="w-px h-40 bg-white"></div>
          <Star className="text-white w-8 h-8 mt-2" size={32} />
        </div>
        {/* Ligne courte (droite) */}
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Container avec padding uniforme */}
      <div className="relative w-full h-full p-6 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-start gap-8">


        {/* PORTFOLIO - toute la largeur */}
        <div ref={containerRef} className="w-full pointer-events-none z-0 overflow-visible relative" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
          <h2 
            ref={textRef}
            className="font-russo text-white opacity-90 uppercase tracking-tight leading-none select-none whitespace-nowrap scale-y-150 pointer-events-none" 
            style={{ fontSize: `${fontSize}px`, width: '100%', letterSpacing: '0.05em', transformOrigin: 'center' }}
          >
            Portfolio
          </h2>
          
          {/* Hero Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[15%] -translate-y-[0%] w-[30%] h-[60vh] z-30 pointer-events-none flex items-center justify-center">
            <img 
              src="/ImageHero.png" 
              alt="Hero" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 3D Artist avec masque SVG knockout */}
        <div className="z-30 pointer-events-none">
          <svg viewBox="0 0 500 150" width="500" height="150" role="img" aria-label="3D ARTIST knockout">
            <defs>
              <mask id="knockout" maskUnits="userSpaceOnUse">
                <rect x="15" y="15" width="470" height="120" rx="30" fill="white"/>
                <text 
                  x="45" 
                  y="110"
                  fontFamily="Anton, sans-serif"
                  fontWeight="400" 
                  fontSize="90" 
                  letterSpacing="8"
                  fill="black">3D ARTIST</text>
              </mask>
            </defs>

            <rect x="30" y="30" width="470" height="120" rx="30"
                  fill="none" stroke="white" strokeWidth="2"/>

            <rect x="15" y="15" width="470" height="120" rx="30"
                  fill="#e9ecff" mask="url(#knockout)"/>
          </svg>
        </div>
      </div>

      {/* Section Contact en bas à gauche (dans la marge) */}
      <div className="absolute bottom-12 left-12 z-40 flex flex-col gap-4">
        {/* Étoile en haut */}
        <div className="flex items-start gap-4 pointer-events-none">
          <Star className="text-white w-8 h-8" size={32} />
          
          {/* Bouton Contact Me */}
          <Link 
            to="/contact" 
            className="px-8 py-4 border-2 border-white rounded-full bg-transparent text-white text-xl font-black uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300 cursor-pointer pointer-events-auto relative z-50"
          >
            Contact Me
          </Link>
        </div>

        {/* Informations de contact */}
        <div className="text-white text-sm flex gap-6 ml-12 pointer-events-none">
          <p className="uppercase tracking-wide">
            <span className="font-bold">EMAIL</span> / <span className="lowercase">florianlevreau@gmail.com</span>
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
