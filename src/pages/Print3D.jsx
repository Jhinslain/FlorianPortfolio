import { Link } from 'react-router-dom'
import Project from '../components/Project'
import Star from '../components/Star'
import Navigation from '../components/Navigation'
import Galerie from '../components/Galerie'

function Print3D() {
  const projects = [
    {
      title: 'Turtle Castle',
      description: 'Participation au concours artistique Necropolis organisé par Grinding Gear Games sur le thème de Path of Exile. \n\nConcours Necropolis | 26/05/2024 | 1re place',
      position: 'droite',
      images: [
        'Print3D/Turtle/Turtle2.jpg',
        'Print3D/Turtle/rr1.JPG',
        'Print3D/Turtle/rr2.JPG',

      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ],
      links: [
        {
          url: 'https://fr.pathofexile.com/forum/view-thread/3526084',
          label: 'Voir le forum'
        }
      ]
    },
    {
      title: 'Glimpse of Chaos',
      description: 'Participation au concours artistique Ultimatum organisé par Grinding Gear Games sur le thème de Path of Exile. \n\nConcours Ultimatum | 11/06/2021 | 2e place',
      position: 'gauche',
      images: [
        'Print3D/GlipseOfChaos/M1_3.jpg',
        'Print3D/GlipseOfChaos/R4.PNG',
        'Print3D/GlipseOfChaos/R5.PNG',
        'Print3D/GlipseOfChaos/photo.png',

      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ],
      links: [
        {
          url: 'https://fr.pathofexile.com/forum/view-thread/3137899',
          label: 'Voir le forum'
        }
      ]
    },
    {
      title: 'Harvest',
      description: 'Participation au concours artistique Harvest organisé par Grinding Gear Games sur le thème de Path of Exile.',
      position: 'droite',
      images: [
        'Print3D/Harvest/final_2_1.png',
        'Print3D/Harvest/R10.png',
        'Print3D/Harvest/r13.png',
      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ],
      links: [
        // Ajoutez le lien du forum si disponible
      ]
    },
    {
      title: 'The Blood Thorn',
      description: 'Participation au concours artistique Keepers of the Flame organisé par Grinding Gear Games sur le thème de Path of Exile.',
      position: 'gauche',
      images: [
        'Print3D/TheBloodThorn/p0.jpg',
        'Print3D/TheBloodThorn/F1.jpg',
        'Print3D/TheBloodThorn/F2.jpg',
      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ],
      links: [
        {
          url: 'https://www.pathofexile.com/forum/view-thread/3859203/page/24#p26412742',
          label: 'Voir le forum'
        }
        ]
    },
  ]

  const title = 'PROJETS · IMPRESSION 3D'
  const maskId = 'knockout-print3d'

  return (
    <>
    <Navigation />
      {/* En-tête de la page */}
      <section className="relative w-full bg-gradient-tertiary">
        {/* Boutons de navigation latéraux */}
        <div className="absolute right-4 sm:right-6 md:right-8 lg:right-16 xl:right-20 2xl:right-24 top-8 sm:top-12 md:top-16 lg:top-16 xl:top-24 z-40 flex flex-col gap-4 sm:gap-5 lg:gap-6 items-end">
          <Link
            to="/vr"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 border-2 border-white rounded-full bg-transparent text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-russo uppercase tracking-wider hover:bg-white hover:text-[var(--color-tertiary)] transition-all duration-300 whitespace-nowrap"
          >
            VR
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
              to="/3d"
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 border-2 border-white rounded-full bg-transparent text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-russo uppercase tracking-wider hover:bg-white hover:text-[var(--color-tertiary)] transition-all duration-300 whitespace-nowrap"
            >
              3D
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
                width="1115" 
                height="143.5" 
                rx="30"
                fill="var(--color-white-gray)" 
                mask={`url(#${maskId})`}
              />
            </svg>
          </div>
        </div>
      </section>

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

      {/* Galerie */}
      <Galerie
        title="GALERIE D'AUTRES PROJETS"
        position="gauche"
        images={[
          'Print3D/Galerie/Briar1.jpg',
          'Print3D/Galerie/Briar2.JPG',
          'Print3D/Galerie/Chica1.jpg',
          'Print3D/Galerie/Chica2.JPG',
          'Print3D/Galerie/Klee1.PNG',
          'Print3D/Galerie/Klee2.png',
          'Print3D/Galerie/Lulu2.JPG',
          'Print3D/Galerie/lulu1.jpg',
          'Print3D/Galerie/Mangle1.png',
          'Print3D/Galerie/Mangle2.JPG',
          'Print3D/Galerie/Mangle3.JPG',
          'Print3D/Galerie/PomPom.JPG',
          'Print3D/Galerie/Queen1.jpg',
          'Print3D/Galerie/TheSquire1.png',
          'Print3D/Galerie/Tristy1.jpg',
        ]}
        videos={[
          'Print3D/Galerie/QueenVideo.mp4',
        ]}
      />
    </>
  )
}

export default Print3D

