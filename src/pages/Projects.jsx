function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projet 3D 1',
      description: 'Description du premier projet 3D',
      category: '3D Modelling',
    },
    {
      id: 2,
      title: 'Projet 3D 2',
      description: 'Description du deuxième projet 3D',
      category: 'Shading',
    },
    {
      id: 3,
      title: 'Projet 3D 3',
      description: 'Description du troisième projet 3D',
      category: 'Lighting',
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-700 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-12">
          Projets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-6 hover:bg-white/20 transition-all"
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold uppercase mb-4">{project.title}</h2>
              <p className="text-white/80">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
