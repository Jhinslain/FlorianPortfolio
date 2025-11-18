import Star from './Star'

function Project({ 
  title,
  description,
  tags = [],
  position = 'droite', // 'gauche' ou 'droite'
  images = [],
  videos = []
}) {
  const contentSection = (
    <div className="flex-1 z-30 flex flex-col">
      {title && (
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
          {title}
        </h1>
      )}

      {description && (
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl whitespace-pre-line">
          {description}
        </p>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white text-sm sm:text-base font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  // Séparer les images : premières pour la section droite, autres pour la section bas
  const rightImages = images.slice(0, 3) // 3 premières images pour la section droite
  const bottomImages = images.slice(3) // Images restantes pour la section bas

  // Section media à droite
  const rightMediaSection = (
    <div className="flex-1 z-30 flex flex-col gap-6">
      {/* Layout : 2 images empilées format 4/3 à gauche, 1 image à droite qui fait la hauteur des 2 images */}
      {rightImages.length > 0 && (
        <div className="flex gap-4 items-stretch">
          {/* Colonne gauche : 2 images empilées format 4/3 */}
          <div className="flex-1 flex flex-col gap-4">
            {rightImages.slice(0, 2).map((image, index) => (
              <div
                key={`right-img-${index}`}
                className="relative w-full aspect-[4/3] overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${title || 'Projet'} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Colonne droite : 1 image qui fait exactement la hauteur des 2 images */}
          {rightImages.length > 2 && (
            <div className="flex-1 flex items-stretch">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={rightImages[2]}
                  alt={`${title || 'Projet'} - Image 3`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Vidéos en dessous de la grille d'images */}
      {videos.length > 0 && (
        <div className="flex flex-col gap-4">
          {videos.map((video, index) => (
            <div
              key={`vid-${index}`}
              className="w-full aspect-video rounded-lg overflow-hidden bg-white/5 border-2 border-white/30"
            >
              <video
                src={video}
                controls
                className="w-full h-full object-cover"
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  // Section media en bas
  const bottomMediaSection = bottomImages.length > 0 && (
    <div className="w-full z-30 mt-8">
      <div
        className="
          grid gap-4
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]
        "
      >
        {bottomImages.map((image, index) => (
          <div
            key={`bottom-img-${index}`}
            className="relative w-full h-full overflow-hidden"
          >
            <img
              src={image}
              alt={`${title || 'Projet'} - Image ${index + 4}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="relative w-full overflow-y-auto sm:overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: '#231f2c' }} />

      {/* Décor étoiles / traits */}
      <div className="absolute top-8 left-6 lg:left-12 z-30 flex flex-col items-center">
        <Star className="text-white w-8 h-8 mb-2" size={32} />
        <div className="w-px h-40 bg-white"></div>
      </div>

      <div className="absolute top-32 md:top-20 right-12 md:right-20 z-30">
        <Star className="text-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" size={128} />
      </div>

      <div className="absolute bottom-12 md:mb-4 right-6 lg:right-12 z-30 flex items-end gap-3">
        <div className="flex flex-col items-center relative">
          <div className="w-px h-40 bg-white"></div>
          <Star className="text-white w-8 h-8 mt-2" size={32} />
        </div>
        <div className="w-px h-40 bg-white"></div>
      </div>

      {/* Container principal */}
      <div className="relative w-full h-full p-12 sm:p-12 md:p-16 lg:p-16 xl:p-24 flex flex-col">
        {/* Première ligne : texte et media selon position */}
        <div
          className={[
            "flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8",
            position === 'gauche' ? 'lg:flex-row-reverse' : ''
          ].join(" ")}
        >
          {contentSection}
          {rightMediaSection}
        </div>
        
        {/* Deuxième ligne : media en bas */}
        {bottomMediaSection}
      </div>
    </section>
  )
}

export default Project
