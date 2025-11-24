import { useState, useEffect } from 'react'
import Star from './Star'

function Project({ 
  title,
  description,
  tags = [],
  position = 'droite', // 'gauche' ou 'droite'
  images = [],
  videos = [],
  links = [] // Tableau d'objets {url: string, label: string} ou tableau de strings
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  // Combiner toutes les images et vidéos pour la navigation dans la lightbox
  const allMedia = [
    ...images.map(img => ({ type: 'image', src: img })),
    ...videos.map(vid => ({ type: 'video', src: vid }))
  ]

  const openLightbox = (index, mediaType = 'image') => {
    // Si c'est une vidéo, trouver son index dans allMedia
    if (mediaType === 'video') {
      const videoIndex = images.length + index
      setCurrentMediaIndex(videoIndex)
    } else {
      setCurrentMediaIndex(index)
    }
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const handleNext = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length)
  }

  const handlePrevious = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
  }

  // Gérer la navigation au clavier
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false)
        document.body.style.overflow = 'unset'
      } else if (e.key === 'ArrowLeft') {
        setCurrentMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, allMedia.length])

  useEffect(() => {
    if (!lightboxOpen) {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen])
  const contentSection = (
    <div className="flex-1 z-30 flex flex-col">
      {title && (
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
          {title}
        </h1>
      )}

      {description && (
        <p className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 w-full whitespace-pre-line text-justify">
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

      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {links.map((link, index) => {
            const url = typeof link === 'string' ? link : link.url
            const label = typeof link === 'string' ? url : (link.label || url)
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white text-sm sm:text-base font-bold uppercase tracking-wider hover:bg-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                {label}
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )

  // Séparer les images : premières pour la section droite, autres pour la section bas
  // Si 4 images exactement : prendre les 4 pour la section droite (2+2 empilées)
  // Sinon : prendre 3 pour la section droite (2+1)
  const rightImages = images.length === 4 ? images.slice(0, 4) : images.slice(0, 3)
  const bottomImages = images.length === 4 ? images.slice(4) : images.slice(3) // Images restantes pour la section bas

  // Section media à droite
  const rightMediaSection = (
    <div className="flex-1 z-30 flex flex-col gap-6 relative">
      {/* Grande étoile superposée sur l'image */}
      <div className={`absolute z-40 ${
        position === 'gauche' ? '-left-8 md:-left-10 -top-8 md:-top-10' : '-right-8 md:-right-10 -top-8 md:-top-10'
      }`}>
        <Star className="text-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" size={128} />
      </div>

      {/* Layout conditionnel selon le nombre d'images */}
      {rightImages.length > 0 && (
        <div className="flex gap-4 items-stretch">
          {/* Colonne gauche : 2 images empilées format 4/3 */}
          <div className="flex-1 flex flex-col gap-4">
            {rightImages.slice(0, 2).map((image, index) => (
              <div
                key={`right-img-${index}`}
                className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${title || 'Projet'} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Colonne droite : 2 images empilées si 4 images, sinon 1 image qui fait la hauteur des 2 images */}
          {rightImages.length === 4 ? (
            <div className="flex-1 flex flex-col gap-4">
              {rightImages.slice(2, 4).map((image, index) => (
                <div
                  key={`right-img-${index + 2}`}
                  className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox(index + 2)}
                >
                  <img
                    src={image}
                    alt={`${title || 'Projet'} - Image ${index + 3}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : rightImages.length > 2 ? (
            <div className="flex-1 flex items-stretch">
              <div 
                className="relative w-full h-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openLightbox(2)}
              >
                <img
                  src={rightImages[2]}
                  alt={`${title || 'Projet'} - Image 3`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      )}

    </div>
  )

  // Fonction pour rendre une vidéo (YouTube ou locale)
  const renderVideo = (video, index) => {
    // Détecter si c'est une URL YouTube
    const isYouTube = video.includes('youtube.com') || video.includes('youtu.be')
    
    if (isYouTube) {
      // Si c'est déjà une URL embed, l'utiliser directement
      let embedUrl = video
      if (video.includes('/embed/')) {
        embedUrl = video
      } else if (video.includes('youtu.be/')) {
        const videoId = video.split('youtu.be/')[1].split('?')[0]
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      } else if (video.includes('youtube.com/watch?v=')) {
        const videoId = video.split('v=')[1].split('&')[0]
        embedUrl = `https://www.youtube.com/embed/${videoId}`
      }
      
      return (
        <div
          key={`bottom-vid-${index}`}
          className="relative w-full h-full overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(index, 'video')}
        >
          <iframe
            src={embedUrl}
            title={`${title || 'Projet'} - Vidéo ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full group-hover:opacity-80 transition-opacity"
          />
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
        </div>
      )
    }
    
    // Pour les fichiers vidéo locaux
    return (
      <div
        key={`bottom-vid-${index}`}
        className="relative w-full h-full overflow-hidden cursor-pointer group"
        onClick={() => openLightbox(index, 'video')}
      >
        <video
          src={video}
          controls
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors pointer-events-none" />
      </div>
    )
  }

  // Section media en bas (images restantes + vidéos)
  const bottomMediaSection = (bottomImages.length > 0 || videos.length > 0) && (
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
            className="relative w-full h-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openLightbox(rightImages.length + index)}
          >
            <img
              src={image}
              alt={`${title || 'Projet'} - Image ${index + 4}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {videos.map((video, index) => renderVideo(video, index))}
      </div>
    </div>
  )

  return (
    <>
      {/* Lightbox */}
      {lightboxOpen && allMedia.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
            aria-label="Fermer"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Flèche précédente */}
          {allMedia.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 md:left-8 z-60 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Média précédent"
            >
              <svg
                className="w-8 h-8 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Image ou Vidéo */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {allMedia[currentMediaIndex].type === 'image' ? (
              <img
                src={allMedia[currentMediaIndex].src}
                alt={`${title || 'Projet'} - Image ${currentMediaIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            ) : (
              (() => {
                const video = allMedia[currentMediaIndex].src
                const isYouTube = video.includes('youtube.com') || video.includes('youtu.be')
                
                if (isYouTube) {
                  let embedUrl = video
                  if (video.includes('/embed/')) {
                    embedUrl = video
                  } else if (video.includes('youtu.be/')) {
                    const videoId = video.split('youtu.be/')[1].split('?')[0]
                    embedUrl = `https://www.youtube.com/embed/${videoId}`
                  } else if (video.includes('youtube.com/watch?v=')) {
                    const videoId = video.split('v=')[1].split('&')[0]
                    embedUrl = `https://www.youtube.com/embed/${videoId}`
                  }
                  
                  return (
                    <div className="w-[90vw] max-w-7xl aspect-video">
                      <iframe
                        src={embedUrl}
                        title={`${title || 'Projet'} - Vidéo ${currentMediaIndex - images.length + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )
                }
                
                return (
                  <video
                    src={video}
                    controls
                    className="w-[90vw] max-w-7xl max-h-[90vh]"
                  >
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                )
              })()
            )}
          </div>

          {/* Flèche suivante */}
          {allMedia.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 md:right-8 z-60 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Média suivant"
            >
              <svg
                className="w-8 h-8 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Compteur */}
          {allMedia.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base">
              {currentMediaIndex + 1} / {allMedia.length}
            </div>
          )}
        </div>
      )}

      <section className="relative w-full overflow-y-auto sm:overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: '#231f2c' }} />

      {/* Décor étoiles / traits */}
      <div className={`absolute top-8 z-30 flex flex-col items-center ${
        position === 'gauche' ? 'right-6 lg:right-12' : 'left-6 lg:left-12'
      }`}>
        <Star className="text-white w-8 h-8 mb-2" size={32} />
        <div className="w-px h-40 bg-white"></div>
      </div>

      <div className={`absolute bottom-12 md:mb-4 z-30 flex items-end gap-3 ${
        position === 'gauche' ? 'left-4 lg:left-8' : 'right-6 lg:right-12'
      }`}>
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
    </>
  )
}

export default Project
