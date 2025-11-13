import { Link } from 'react-router-dom'
import Star from '../components/Star'

function Print3D() {
  const projects = [
    {
      id: 1,
      title: 'Sculpture Imprimée',
      description: 'Création artistique imprimée en 3D avec finition professionnelle et détails précis.',
      category: 'Art',
      image: '/PrintImage.png',
    },
    {
      id: 2,
      title: 'Prototype Fonctionnel',
      description: 'Prototype mécanique imprimé avec tests de résistance et optimisation de la structure.',
      category: 'Prototype',
    },
    {
      id: 3,
      title: 'Design de Produit',
      description: 'Produit final imprimé en 3D avec ergonomie optimisée et finition premium.',
      category: 'Produit',
    },
    {
      id: 4,
      title: 'Maquette Architecturale',
      description: 'Maquette détaillée imprimée avec précision millimétrique et finition réaliste.',
      category: 'Architecture',
    },
    {
      id: 5,
      title: 'Pièce Mécanique',
      description: 'Composant mécanique imprimé avec tolérances précises et matériaux adaptés.',
      category: 'Mécanique',
    },
    {
      id: 6,
      title: 'Création Personnalisée',
      description: 'Objet sur mesure imprimé selon spécifications avec personnalisation avancée.',
      category: 'Sur Mesure',
    },
  ]

  const title = 'PROJETS · IMPRESSION 3D'
  const maskId = 'knockout-print3d'

  return (
    <>
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
      <section className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg overflow-hidden hover:bg-white/20 transition-all group"
            >
              {project.image && (
                <div className="w-full h-64 overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase mb-4">{project.title}</h2>
                <p className="text-white/80">{project.description}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Print3D

