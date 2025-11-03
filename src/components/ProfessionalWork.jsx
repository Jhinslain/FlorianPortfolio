function ProfessionalWork() {
  const projects = [
    {
      id: 1,
      title: 'Venezia',
      subtitle: 'CONTEST WINNER',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      description: 'Scène 3D détaillée représentant des personnages dans une pièce richement décorée',
    },
    {
      id: 2,
      title: 'Blu',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      description: 'Scène 3D stylisée avec un personnage dans une pièce aux teintes bleues et violettes',
    },
    {
      id: 3,
      title: 'The Game Catchers.',
      subtitle: 'Season 2',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
      description: 'Scène 3D colorée et enfantine avec des personnages de dessins animés',
    },
  ]

  return (
    <section className="relative w-full min-h-screen bg-purple-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Artist name top left */}
        <div className="absolute top-12 left-12 flex items-center gap-3">
          <div className="w-px h-8 bg-white/30"></div>
          <h1 className="text-white text-xl font-bold uppercase tracking-widest">
            Florian
          </h1>
          <span className="text-yellow-300 text-lg">✦</span>
        </div>

        {/* Skills tags top right */}
        <div className="absolute top-32 right-12 space-y-3 z-20">
          <div className="px-5 py-2.5 border-2 border-white rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              3D Modelling
            </span>
          </div>
          <div className="px-5 py-2.5 border-2 border-white rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Shading
            </span>
          </div>
          <div className="px-5 py-2.5 border-2 border-white rounded-full bg-white/10 backdrop-blur-sm flex items-center gap-2">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Lighting
            </span>
            <span className="text-yellow-300 text-xs">✦</span>
          </div>
        </div>

        {/* Main content */}
        <div className="pt-32 pb-20">
          {/* Professional Work title */}
          <div className="mb-16 flex items-center gap-4">
            <div className="inline-block px-8 py-4 bg-black border-2 border-white rounded-full">
              <span className="text-white text-2xl font-black uppercase tracking-wider">
                Professional Work
              </span>
            </div>
            <span className="text-yellow-300 text-2xl">✦</span>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-3xl bg-white/5 border-2 border-white/20 hover:border-white/40 transition-all cursor-pointer"
              >
                {/* Project image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-purple-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent"></div>
                  
                  {/* Badge top left for Venezia (CONTEST WINNER) */}
                  {project.subtitle === 'CONTEST WINNER' && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-yellow-400 rounded-full shadow-lg">
                      <span className="text-black text-xs font-black uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                    </div>
                  )}
                  
                  {/* Title overlay - varies by project */}
                  {project.id === 1 ? (
                    // Venezia - title at bottom
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-4xl font-black uppercase tracking-tight drop-shadow-2xl">
                        {project.title}
                      </h3>
                    </div>
                  ) : project.id === 2 ? (
                    // Blu - title top left with glow effect
                    <div className="absolute top-4 left-4">
                      <h3 className="text-white text-4xl font-black uppercase tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                        {project.title}
                      </h3>
                    </div>
                  ) : (
                    // The Game Catchers - title top with subtitle
                    <div className="absolute top-4 left-4 right-4">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tight drop-shadow-lg mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-white text-xl font-bold uppercase tracking-wider">
                          {project.subtitle}
                        </p>
                        <span className="text-yellow-300 text-lg">✦</span>
                        <span className="text-yellow-300 text-lg">✦</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact info at bottom */}
          <div className="mt-20 pt-8 border-t border-white/20">
            <div className="text-white text-sm space-y-2 opacity-90 font-medium">
              <p className="uppercase tracking-wide">
                Email / <span className="lowercase">florian@example.com</span>
              </p>
              <p className="uppercase tracking-wide">
                Behance / <span className="lowercase">behance.net/florian</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalWork
