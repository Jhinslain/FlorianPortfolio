import Project from './Project'

function VRProject() {
  // Données du projet (à remplacer par les vraies données)
  const projectData = {
    svgTitle: 'VR',
    title: 'Expérience VR Immersive',
    description: 'Environnement virtuel interactif avec interactions naturelles et navigation fluide. Cette expérience repousse les limites de l\'immersion et de l\'interaction en réalité virtuelle.',
    tags: ['VR', 'Unity', 'Interaction', 'Immersion', '3D'],
    position: 'droite', // 'gauche' ou 'droite'
    images: [
      '/VRImage.png',
      '/VRImage.png',
      '/VRImage.png',
    ],
    videos: [
      'https://example.com/video1.mp4',
      'https://example.com/video2.mp4',
    ]
  }

  return (
    <Project
      svgTitle={projectData.svgTitle}
      title={projectData.title}
      description={projectData.description}
      tags={projectData.tags}
      position={projectData.position}
      images={projectData.images}
      videos={projectData.videos}
    />
  )
}

export default VRProject

