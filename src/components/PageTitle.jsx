import Star from './Star'

function PageTitle({ title = 'PROJET', className = '' }) {
  // Générer un ID unique pour le masque SVG pour éviter les conflits
  const maskId = `knockout-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className={`relative w-full bg-gradient-tertiary ${className}`}>
      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-8 left-6 lg:left-12 z-30 flex flex-col items-center">
        <Star className="text-white w-8 h-8 mb-2" size={32} />
        <div className="w-px h-40 bg-white"></div>
      </div>

      <div className="relative z-30 pointer-events-none py-12 sm:py-12 md:py-16 lg:py-16 xl:py-24">
        <div className="mx-auto sm:mx-auto md:mx-auto lg:ml-8 xl:ml-2 flex justify-center lg:justify-start">
          <svg 
            viewBox="0 0 415 150" 
            className="w-full max-w-[230px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[550px] xl:max-w-[750px] h-auto"
            preserveAspectRatio="xMidYMid meet"
            role="img" 
            aria-label={`${title} knockout`}
          >
            <defs>
              <mask id={maskId} maskUnits="userSpaceOnUse">
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
                  {title}
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
              mask={`url(#${maskId})`}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PageTitle

