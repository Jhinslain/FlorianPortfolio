import { Link } from 'react-router-dom'
import Star from '../components/Star'
import Navigation from '../components/Navigation'
import Project from '../components/Project'
import Galerie from '../components/Galerie'

function ThreeD() {
  const projects = [
    {
      title: 'Meta Knight',
      description: 'Modélisation et animation 3D du personnage Meta Knight de la série Kirby.',
      tags: ['Personnage', 'Animation', 'Modélisation'],
      position: 'gauche',
      images: [
        '3DMod/Meta Knight/metaR1.PNG',
        '3DMod/Meta Knight/metar10.PNG',
      ],
      videos: [
        '3DMod/Meta Knight/0001-0140.mp4',
      ],
      links: []
    },
    {
      title: 'MiracleMatter',
      description: 'Création 3D du boss MiracleMatter avec rendus détaillés et textures avancées.',
      tags: ['Boss', 'Rendu', 'Textures'],
      position: 'droite',
      images: [
        '3DMod/MiracleMatter/r8.png',
        '3DMod/MiracleMatter/r7.PNG',
        '3DMod/MiracleMatter/R14.png',

      ],
      videos: [],
      links: []
    },
    {
      title: 'WoodenTrain',
      description: 'Modélisation 3D d\'un train en bois avec détails réalistes et rendus variés.',
      tags: ['Objet', 'Modélisation', 'Rendu'],
      position: 'gauche',
      images: [
        '3DMod/WoodenTrain/FF.jpg',
        '3DMod/WoodenTrain/f2.png',
        '3DMod/WoodenTrain/f3.PNG',
        '3DMod/WoodenTrain/r2.PNG',
      ],
      videos: [],
      links: []
    },
    {
      title: 'ww1',
      description: 'Environnement 3D inspiré de la Première Guerre mondiale avec rendus atmosphériques.',
      tags: ['Environnement', 'Rendu', 'Atmosphère'],
      position: 'droite',
      images: [
        '3DMod/ww1/Rtubes.png',
        '3DMod/ww1/r10.png',
        '3DMod/ww1/r9.png',
        '3DMod/ww1/r6.png',
      ],
      videos: [],
      links: []
    },
  ]

  const title = 'PROJETS · MODÉLISATION 3D'
  const maskId = 'knockout-3d'

  return (
    <>
    <Navigation />
      {/* En-tête de la page */}
      <section className="relative w-full bg-gradient-tertiary">
        {/* Boutons de navigation latéraux */}
        <div className="absolute right-4 sm:right-6 md:right-8 lg:right-16 xl:right-20 2xl:right-24 top-8 sm:top-12 md:top-16 lg:top-16 xl:top-24 z-40 flex flex-col gap-4 sm:gap-5 lg:gap-6 items-end">
          <Link
            to="/print3d"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 border-2 border-white rounded-full bg-transparent text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-russo uppercase tracking-wider hover:bg-white hover:text-[var(--color-tertiary)] transition-all duration-300 whitespace-nowrap"
          >
            PRINT 3D
          </Link>
          
          {/* Bouton du milieu avec étoiles décoratives */}
          <div className="relative flex items-center gap-3 sm:gap-4">
            {/* Cluster d'étoiles à gauche */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              <Star className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" size={32} />
              <div className="flex gap-1 sm:gap-1.5 relative">
                <Star className="text-white w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5.5 md:h-5.5 lg:w-6.5 lg:h-6.5 relative -top-1 sm:-top-1.5 md:-top-2" size={28} />
                <Star className="text-white w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" size={20} />
              </div>
            </div>
            
            <Link
              to="/vr"
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 border-2 border-white rounded-full bg-transparent text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-russo uppercase tracking-wider hover:bg-white hover:text-[var(--color-tertiary)] transition-all duration-300 whitespace-nowrap"
            >
              VR
            </Link>
          </div>
        </div>

        {/* Trait avec étoile en haut à gauche (dans la marge) */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 xl:left-8 xl:top-8 2xl:left-10 2xl:top-10 z-30 flex flex-col items-center">
          <Star className="text-white w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mb-2" size={32} />
        </div>

        {/* Container avec padding uniforme */}
        <div className="relative w-full h-full p-8 sm:p-12 md:p-16 lg:p-16 xl:p-24 flex flex-col">
          {/* Titre SVG knockout */}
          <div className="z-30 pointer-events-none flex justify-start">
            <svg 
              viewBox="0 0 1700 250" 
              className="w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[200px] xl:h-[250px] 2xl:h-[300px]"
              preserveAspectRatio="none"
              role="img" 
              aria-label={`${title} knockout`}
            >
              <defs>
                <mask id={maskId} maskUnits="userSpaceOnUse">
                  <rect x="15" y="15" width="1670" height="250" rx="30" fill="white"/>
                  <text 
                    x="50" 
                    y="128"
                    fontFamily="Anton, sans-serif"
                    fontWeight="400" 
                    fontSize="100" 
                    letterSpacing="4"
                    fill="black"
                  >
                    {title}
                  </text>
                </mask>
              </defs>

              <rect 
                x="15" 
                y="15" 
                width="1208" 
                height="143.5" 
                rx="30"
                fill="var(--color-white-gray)" 
                mask={`url(#${maskId})`}
              />
            </svg>
          </div>
        
        {/* Description avec badges */}
        <div className="z-30 mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Texte de description */}
          <div className="flex-1 max-w-4xl">
            <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Présentation de projets de modélisation 3D réalisés avec différents logiciels et techniques. Ces créations couvrent la modélisation, le texturing, le rendu et l'animation 3D.
            </p>
          </div>
          
          {/* Badges des logiciels */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto lg:min-w-[280px]">
            <div>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Logiciels utilisés
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Blender', 'Maya', '3ds Max', 'Substance Painter', 'ZBrush', 'Unreal Engine'].map((software, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Galerie */}
      <Galerie
        title="GALERIE DE PROJETS 3D"
        position="droite"
        images={[
          '3DMod/Galerie/Vex2.JPG',
          '3DMod/Galerie/Vex.JPG',
          '3DMod/Galerie/Rubilax2.PNG',
          '3DMod/Galerie/Rubilax.PNG',
          '3DMod/Galerie/EngineerTuret.PNG',
          '3DMod/Galerie/Engineer.png',
          '3DMod/Galerie/PoupeeRusse.PNG',
          '3DMod/Galerie/beemo.JPG',
          '3DMod/Galerie/Scylla.PNG',
          '3DMod/Galerie/Rickr5.png',
          '3DMod/Galerie/Sceptre.png',
          '3DMod/Galerie/Capsule.JPG',
          '3DMod/Galerie/Sword.png',
          '3DMod/Galerie/fugR1.PNG',
          '3DMod/Galerie/donut.png',
          '3DMod/Galerie/tof.png',
          '3DMod/Galerie/candyBear.PNG',
          '3DMod/Galerie/Car1.PNG',
          '3DMod/Galerie/Alibi_b.JPG',
          '3DMod/Galerie/ankha2.png',
          '3DMod/Galerie/flechette.PNG',
          '3DMod/Galerie/beeMinecraft.JPG',

          '3DMod/Galerie/Pika.png',

          '3DMod/Galerie/ShyGuy1.png',

          '3DMod/Galerie/render_1.JPG',
          '3DMod/Galerie/render.png',
          '3DMod/Galerie/ic8_pc.jpg',
          '3DMod/Galerie/w1.png',
        ]}
      />

      {/* Liste des projets */}
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          position={project.position}
          images={project.images}
          videos={project.videos}
          links={project.links}
        />
      ))}
    </>
  )
}

export default ThreeD

