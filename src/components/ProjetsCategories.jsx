import { Link } from 'react-router-dom'
import Star from './Star'

function ProjetsCategories() {
  const categories = [
    {
      id: 1,
      title: 'Réalité Virtuelle',
      image: '/VRImage.png',
    },
    {
      id: 2,
      title: 'Modélisation 3D',
      image: '/3DImage.png',
    },
    {
      id: 3,
      title: 'Impression 3D',
      image: '/PrintImage.png',
    },
  ]

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#231f2c' }}></div>

      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-8 left-12 z-30 flex flex-col items-center">
        <Star className="text-white w-8 h-8 mb-2" size={32} />
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Étoile à 4 branches en haut à droite */}
      <div className="absolute top-20 right-20 z-30">
        <Star className="text-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" size={128} />
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
      <div className="relative w-full h-full p-6 md:p-12 lg:p-16 xl:p-24 flex flex-col">
        {/* 3D Artist avec masque SVG knockout - à gauche au-dessus des cartes */}
        <div className="z-30 pointer-events-none mb-8 -ml-4">
          <svg viewBox="0 0 500 150" width="500" height="150" role="img" aria-label="3D ARTIST knockout">
            <defs>
              <mask id="knockout-categories" maskUnits="userSpaceOnUse">
                <rect x="15" y="15" width="390" height="120" rx="30" fill="white"/>
                <text 
                  x="45" 
                  y="110"
                  fontFamily="Anton, sans-serif"
                  fontWeight="400" 
                  fontSize="90" 
                  letterSpacing="8"

                  fill="black">PROJETS</text>
              </mask>
            </defs>

            <rect x="15" y="15" width="390" height="120" rx="30"
                  fill="#FFFFFF" mask="url(#knockout-categories)"/>
          </svg>
        </div>

        {/* Container avec cartes */}
        <div className="flex flex-row justify-center gap-20 z-30">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-3xl transition-transform duration-500 ease-in-out cursor-pointer w-full md:w-96 aspect-[3/4] min-h-[400px] md:min-h-[500px] hover:scale-110"
            >
              {/* Image 3D */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-4xl font-black uppercase tracking-tight drop-shadow-2xl">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}

export default ProjetsCategories
