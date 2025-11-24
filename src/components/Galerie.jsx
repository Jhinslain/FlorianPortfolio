import { useState, useEffect } from 'react'
import Star from './Star'

function Galerie({ 
  title,
  position = 'droite', // 'gauche' ou 'droite'
  images = [],
  videos = []
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
    <div className={`z-30 flex flex-col ${position === 'gauche' ? 'items-end' : ''}`}>
      {title && (
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
          {title}
        </h1>
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
          className="relative w-full aspect-square overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(index, 'video')}
        >
          <iframe
            src={embedUrl}
            title={`${title || 'Galerie'} - Vidéo ${index + 1}`}
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
        className="relative w-full aspect-square overflow-hidden cursor-pointer group"
        onClick={() => openLightbox(index, 'video')}
      >
        <video
          src={video}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
          muted
          playsInline
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors pointer-events-none" />
        {/* Icône play */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    )
  }

  // Section media en bas - toutes les images et vidéos
  const bottomMediaSection = (images.length > 0 || videos.length > 0) && (
    <div className="w-full z-30 mt-8">
      <div
        className="
          grid gap-4
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {images.map((image, index) => (
          <div
            key={`bottom-img-${index}`}
            className="relative w-full aspect-square overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${title || 'Galerie'} - Image ${index + 1}`}
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
                alt={`${title || 'Galerie'} - Image ${currentMediaIndex + 1}`}
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
                        title={`${title || 'Galerie'} - Vidéo ${currentMediaIndex - images.length + 1}`}
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
        {/* Titre */}
        <div className="mb-8">
          {contentSection}
        </div>
        
        {/* Grille d'images */}
        {bottomMediaSection}
      </div>
    </section>
    </>
  )
}

export default Galerie

