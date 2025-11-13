import Star from './Star'

function Project({ 
  title,
  description,
  tags = [],
  mediaPosition = 'right', // 'left' ou 'right'
  images = [],
  videos = []
}) {
  // Déterminer l'ordre des sections selon mediaPosition
  const contentSection = (
    <div className="flex-1 z-30 flex flex-col">
      {/* Titre du projet */}
      {title && (
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
          {title}
        </h1>
      )}

      {/* Description */}
      {description && (
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>
      )}

      {/* Tags */}
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

  const mediaSection = (
    <div className="flex-1 z-30 flex flex-col gap-6">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={`img-${index}`}
          className="w-full aspect-video rounded-lg overflow-hidden bg-white/5 border-2 border-white/30"
        >
          <img
            src={image}
            alt={`${title || 'Projet'} - Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Vidéos */}
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
  )

  return (
    <section className="relative w-full overflow-y-auto sm:overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#231f2c' }}></div>

      {/* Trait avec étoile en haut à gauche (dans la marge) */}
      <div className="absolute top-8 left-6 lg:left-12 z-30 flex flex-col items-center">
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
      <div className={`relative w-full h-full p-12 sm:p-12 md:p-16 lg:p-16 xl:p-24 flex flex-col lg:flex-row gap-8 lg:gap-12 ${mediaPosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        {contentSection}
        {mediaSection}
      </div>
    </section>
  )
}

export default Project

