import { useState, useEffect } from 'react'
import Star from './Star'

function Galerie({ 
  title,
  position = 'droite', // 'gauche' ou 'droite'
  images = []
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Gérer la navigation au clavier
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false)
        document.body.style.overflow = 'unset'
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, images.length])

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
    </div>
  )

  // Section media en bas - toutes les images
  const bottomMediaSection = images.length > 0 && (
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
        {images.map((image, index) => (
          <div
            key={`bottom-img-${index}`}
            className="relative w-full h-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${title || 'Galerie'} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {/* Lightbox */}
      {lightboxOpen && images.length > 0 && (
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
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 md:left-8 z-60 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Image précédente"
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

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex]}
              alt={`${title || 'Galerie'} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Flèche suivante */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 md:right-8 z-60 text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Image suivante"
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

          {/* Compteur d'images */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base">
              {currentImageIndex + 1} / {images.length}
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

