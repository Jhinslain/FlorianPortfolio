import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Link } from 'react-router-dom'
import HeroModel from './HeroModel'

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden p-12">
      {/* Background gradient - violet foncé à indigo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-800">
        {/* Subtle vertical lines effect on left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 opacity-10">
          <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </div>

      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-12 left-12 z-30 flex flex-col items-center">
        <svg className="text-white w-8 h-8 mb-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.472 9.528L22 12L14.472 14.472L12 22L9.528 14.472L2 12L9.528 9.528L12 2Z" strokeWidth="1" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dasharray" values="0 100;100 0" dur="2s" repeatCount="indefinite"/>
          </path>
        </svg>
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Colonne verticale à gauche : Florian LEVREAU → PORTFOLIO → 3D Artist */}
      <div className="absolute top-12 left-12 z-30 flex flex-col gap-8">
        {/* 1. Florian LEVREAU */}
        <div className="flex items-start gap-4 ml-12">
          <div className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider">
            Florian LEVREAU
          </div>
        </div>

        {/* 2. PORTFOLIO */}
        <div className="pointer-events-none z-0 overflow-visible ml-12">
          <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[22rem] font-black text-white uppercase tracking-tighter leading-none select-none opacity-20 whitespace-nowrap">
            Portfolio
          </h2>
        </div>

        {/* 3. 3D Artist avec masque SVG knockout */}
        <div className="ml-12 mr-12">
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

          <rect x="30" y="24" width="470" height="120" rx="30"
                fill="none" stroke="white" strokeWidth="2"/>

          <rect x="15" y="15" width="470" height="120" rx="30"
                fill="#e9ecff" mask="url(#knockout)"/>


        </svg>
        </div>
      </div>


      {/* Section Contact en bas à gauche (dans la marge) */}
      <div className="absolute bottom-12 left-12 z-30 flex flex-col gap-4">
        {/* Étoile en haut */}
        <div className="flex items-start gap-4">
          <svg className="text-white w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.472 9.528L22 12L14.472 14.472L12 22L9.528 14.472L2 12L9.528 9.528L12 2Z" strokeWidth="1" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 100;100 0" dur="2s" repeatCount="indefinite"/>
            </path>
          </svg>
          
          {/* Bouton Contact Me */}
          <Link 
            to="/contact" 
            className="px-8 py-4 border-2 border-white rounded-full bg-transparent text-white text-xl font-black uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        {/* Informations de contact */}
        <div className="text-white text-sm flex gap-6 ml-12">
          <p className="uppercase tracking-wide">
            <span className="font-bold">EMAIL</span> / <span className="lowercase">florianlevreau@gmail.com</span>
          </p>
          <p className="uppercase tracking-wide">
            <span className="font-bold">instagram</span> / <span className="lowercase">@florian_levreau</span>
          </p>
        </div>
      </div>

      {/* Lignes verticales avec étoile en bas à droite (dans la marge) */}
      <div className="absolute bottom-12 right-12 z-30 flex items-end gap-3">
        {/* Ligne longue (gauche) */}
        <div className="flex flex-col items-center relative">
          <div className="w-px h-40 bg-white"></div>
          <svg className="text-white w-8 h-8 mt-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.472 9.528L22 12L14.472 14.472L12 22L9.528 14.472L2 12L9.528 9.528L12 2Z" strokeWidth="1" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 100;100 0" dur="2s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
        {/* Ligne courte (droite) */}
        <div className="w-px h-40 bg-white"></div>
      </div>

      


      {/* Main content container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-12 gap-8 items-center relative">
          

            {/* Center - 3D Model Canvas - superposé sur PORTFOLIO */}
            <div className="col-start-6 col-span-7 relative h-screen z-30">
              <div className="absolute inset-0">
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 45 }}
                  className="w-full h-full"
                >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <directionalLight position={[-5, 5, -5]} intensity={1} />
                  <group scale={0.6}>
                    <HeroModel />
                  </group>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                  />
                  <Environment preset="sunset" />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
