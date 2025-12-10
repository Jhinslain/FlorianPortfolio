import { Link, useNavigate } from 'react-router-dom'
import Star from './Star'

function ProjetsCategories() {
  const navigate = useNavigate()

  const handleCategoryClick = (e, link) => {
    e.preventDefault()
    navigate(link)
    // Faire défiler vers le haut après la navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  const categories = [
    {
      id: 1,
      title: 'Réalité Virtuelle',
      image: '/VRImage.png',
      link: '/vr',
    },
    {
      id: 2,
      title: 'Modélisation 3D',
      image: '/3DImage.png',
      link: '/3d',
    },
    {
      id: 3,
      title: 'Impression 3D',
      image: '/PrintImage.png',
      link: '/print3d',
    },
  ]

  return (
    <section id="projets" className="relative w-full overflow-y-auto sm:overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0 bg-gradient-tertiary"></div>

      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-8 left-6 lg:left-12  z-30 flex flex-col items-center">
        <Star className="text-white w-8 h-8 mb-2" size={32} />
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Étoile à 4 branches en haut à droite */}
      <div className="absolute top-32 md:top-20 right-12 md:right-20 z-30">
        <Star className="text-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" size={128} />
      </div>

      {/* Lignes verticales avec étoile en bas à droite (dans la marge) */}
      <div className="absolute bottom-12 md:mb-4 right-6 lg:right-12 z-30 flex items-end gap-3">
        {/* Ligne longue (gauche) */}
        <div className="flex flex-col items-center relative">
          <div className="w-px h-40 bg-white"></div>
          <Star className="text-white w-8 h-8 mt-2" size={32} />
        </div>
        {/* Ligne courte (droite) */}
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Container avec padding uniforme */}
      <div className="relative w-full h-full p-12 sm:p-12 md:p-16 lg:p-16 xl:p-24 flex flex-col">
        {/* 3D Artist avec masque SVG knockout - à gauche au-dessus des cartes */}
        <div className="z-30 pointer-events-none mb-4 mx-auto sm:mx-auto md:mx-auto lg:ml-8 xl:ml-2 flex justify-center lg:justify-start">
          <svg 
            viewBox="0 0 415 150" 
            className="w-full max-w-[230px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[750px] h-auto"
            preserveAspectRatio="xMidYMid meet"
            role="img" 
            aria-label="PROJETS knockout"
          >
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
                  fill="black"
                >
                  PROJETS
                </text>
              </mask>
            </defs>

            <rect 
              x="15" 
              y="15" 
              width="390" 
              height="120" 
              rx="30"
              fill="#FFFFFF" 
              mask="url(#knockout-categories)"
            />
          </svg>
        </div>

        {/* Container avec cartes */}
        <div className="flex flex-col sm:flex-row justify-around items-center z-30 mb-12 sm:mb-24">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              onClick={(e) => handleCategoryClick(e, category.link)}
              className="relative group overflow-hidden rounded-2xl sm:rounded-3xl transition-transform duration-500 ease-in-out cursor-pointer w-full max-w-[280px] sm:max-w-[300px]  xl:max-w-[400px] sm:aspect-[3/4] min-h-[100px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] hover:scale-110"
            >
              {/* Image 3D */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-3 right-3 sm:bottom-8 md:bottom-12 lg:bottom-12 xl:bottom-6 sm:left-4 sm:right-4">
                  <h3 className="text-white text-1xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-black uppercase tracking-tight drop-shadow-2xl whitespace-nowrap text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </section>
  )
}

export default ProjetsCategories
