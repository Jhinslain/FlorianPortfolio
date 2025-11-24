import { Link } from 'react-router-dom'
import Project from '../components/Project'
import Star from '../components/Star'
import Navigation from '../components/Navigation'
import Galerie from '../components/Galerie'

function VR() {
  const projects = [
    {
      title: 'Chasse aux risques en crèche - petite enfance',
      description: 'Réalisation d\'un projet en VR visant à sensibiliser aux risques présents dans les crèches pour les enfants et le personnel. \n L\'utilisateur explore une crèche et prend en photo les risques pour les corriger. Les risques et leur position sont choisis aléatoirement, offrant ainsi de multiples scénarios possibles. \n Réalisation de la simulation VR entièrement sous Unity et modélisation des assets avec Blender.',
      tags: ['VR', 'Unity', 'Blender', 'Simulation', 'Petite Enfance'],
      position: 'droite',
      images: [
        'VR/Creche/KGr1.JPG',
        'VR/Creche/RisquesTra.png',
        'VR/Creche/KGr2.JPG',
      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ]
    },
    {
      title: 'Préparateur de commandes - Picking',
      description: 'Développement complet d\'une simulation VR pour la formation au métier de Picking. \n L\'apprenant doit préparer une commande aléatoire en récupérant les colis aux adresses correspondantes. \n Réalisation de la simulation VR sous Unity et modélisation des assets avec Blender.',
      tags: ['VR', 'Unity', 'Blender', 'Simulation', 'Formation'],
      position: 'gauche',
      images: [
        'VR/Picking/r6.png',
        'VR/Picking/r2p.JPG',
        'VR/Picking/r3.JPG',
        'VR/Picking/r5.png',
        'VR/Picking/r4.JPG',
        
      ],
      videos: [
        'https://www.youtube.com/embed/Q_Fv6Y1Pf-Q?si=PnX1KMXJ4aYKwx1g'
      ]
    },
    {
      title: 'Isolation',
      description: 'Développement d\'une simulation VR pour les métiers liés à l\'isolation d\'une maison. \n Développement sous Unity d\'un système de caméra thermique et de capteurs d\'humidité. \n Modélisation 3D d\'une maison, dont les combles, le vide sanitaire, les prises électriques complètes.',
      tags: ['VR', 'Unity', 'Blender', 'Simulation', 'Formation'],
      position: 'droite',
      images: [
        'VR/Isolation/image3.JPG',
        'VR/Isolation/image2.png',
        'VR/Isolation/image1.png',

      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ]
    },
    {
      title: 'Radiocommande Pont roulant VR',
      description: 'Réalisation d\'une radiocommande fonctionnant sur un pont roulant en VR. L\'appareil communique avec le casque VR et sa position en temps réel est retranscrite dans la VR. \n Conception des PCB et de l\'électronique, boîtier imprimé en 3D, programmation Arduino Nano, et adaptation à une simulation VR existante. \n Conception de l\'intégralité de la radiocommande sur SolidWorks puis impression 3D et assemblage. Réalisation de l\'électronique sur Eagle.',
      tags: ['VR', 'Arduino', 'SolidWorks', 'Eagle', 'Impression 3D', 'Électronique'],
      position: 'gauche',
      images: [
        'VR/RadioCommande/c6.JPG',
        'VR/RadioCommande/Ttelca1.JPG',
        'VR/RadioCommande/telecommande.png',

        'VR/RadioCommande/r2.png',
        'VR/RadioCommande/DSC_0041.JPG',
        'VR/RadioCommande/thumbnail_CiVR - Radio-commande détail.png',
      
        'VR/RadioCommande/Buttonc2.JPG',
      ],
      videos: [
        // Ajoutez les URLs des vidéos ici
      ]
    },
    {
      title: 'Tourneur Fraiseur, Chaudronnier, Électricien, Mécanicien',
      description: 'Réalisation de simulations VR pour divers métiers du CFAI, considérés comme métiers en tension. \n Programmation Unity d\'un tour manuel fonctionnel en VR, et de plusieurs systèmes d\'interaction et d\'assemblage pour les métiers de mécanicien et électricien. \n Développement d\'un système de soudure au TIG, pour le métier de chaudronnier.',
      tags: ['VR', 'Unity', 'Simulation', 'Formation', 'CFAI'],
      position: 'droite',
      images: [
        'VR/Tourneur/cr4.JPG',
        'VR/Tourneur/Tr5.JPG',
        'VR/Tourneur/c1.PNG',
        'VR/Tourneur/cr7.JPG',
        'VR/Tourneur/cr6.JPG',
        'VR/Tourneur/Trender_c1.JPG',
        'VR/Tourneur/Cleancr2.JPG',
      ],
      videos: [
        'https://www.youtube.com/embed/9BaXDM0Ty9Y?si=aFugkBKzcboIwtOp',
        'https://www.youtube.com/embed/3iJG8j8bniI?si=xLMb1uelT84VHO0k'

      ]
    },
    {
      title: 'Mécanicien Poids Lourd',
      description: 'Réalisation d\'une simulation VR de changement de plaquettes de freins d\'un camion. \n Modélisation 3D sous Blender d\'un camion, de son système de freinage et de l\'ensemble des outils. \n Programmation sous Unity de l\'ensemble des algorithmes nécessaires.',
      tags: ['VR', 'Unity', 'Blender', 'Simulation', 'Formation'],
      position: 'gauche',
      images: [
        'VR/Truck/c1.JPG',
        'VR/Truck/r1pr.JPG',
        'VR/Truck/Truckvr2.JPG',
        'VR/Truck/cr3.JPG',
        'VR/Truck/Truckvr1.JPG',
        'VR/Truck/r19.JPG',
        'VR/Truck/c2.JPG',
        'VR/Truck/vr4.JPG',
      ],
      videos: [
        'https://www.youtube.com/embed/OxkFKQl36IA?si=nlEqM69IyG-KiL4b'
      ]
    }
  ]

  const title = 'PROJETS · REALITÉ VIRTUELLE'
  const maskId = 'knockout-vr'
  
  return (
    <>
    <Navigation />
      {/* En-tête de la page */}
      <section className="relative w-full bg-gradient-tertiary ">
        {/* Boutons de navigation latéraux */}
        <div className="absolute right-4 sm:right-6 md:right-8 lg:right-16 xl:right-20 2xl:right-24 top-8 sm:top-12 md:top-16 lg:top-16 xl:top-24 z-40 flex flex-col gap-4 sm:gap-5 lg:gap-6 items-end">
          <Link
            to="/3d"
            className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 border-2 border-white rounded-full bg-transparent text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-russo uppercase tracking-wider hover:bg-white hover:text-[var(--color-tertiary)] transition-all duration-300 whitespace-nowrap"
          >
            3D
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
              to="/print3d"
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 xl:px-8 xl:py-4 border-2 border-white rounded-full bg-transparent text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-russo uppercase tracking-wider hover:bg-white hover:text-[var(--color-tertiary)] transition-all duration-300 whitespace-nowrap"
            >
              PRINT 3D
            </Link>
          </div>
        </div>

        {/* étoile en haut à gauche (dans la marge) */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4  lg:top-6 lg:left-6 xl:left-8 xl:top-8 2xl:left-10 2xl:top-10 z-30 flex flex-col items-center">
          <Star className="text-white w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mb-2" size={32} />
        </div>

       {/* Container avec padding uniforme */}
      <div className="relative w-full h-full p-8 sm:p-12 md:p-16 lg:p-16 xl:p-24 flex flex-col">
        {/* Titre SVG knockout */}
        <div className="z-30 pointer-events-none   flex justify-start">
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
              width="1230" 
              height="143.5" 
              rx="30"
              fill="var(--color-white-gray)" 
              mask={`url(#${maskId})`}
            />
          </svg>
        </div>
        
        {/* Description avec badges */}
        <div className="z-30 mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Texte de description */}
          <div className="flex-1 max-w-4xl">
            <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Présentation de projets en Réalité Virtuelle, réalisés pour l'entreprise Come-In-VR. Ces simulations VR sont destinées aux casques Oculus, principalement l'Oculus Quest 2.
            </p>
            <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-4 sm:mt-6">
              Ces casques Oculus sont autonomes, le challenge principal est donc l'optimisation car la simulation VR est calculée directement sur le system Android de l'appareil.
            </p>
          </div>
          
          {/* Badges des logiciels et SDK */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto lg:min-w-[280px]">
            <div>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Logiciels utilisés
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Blender', 'Unity', 'Visual Studio', 'Substance Painter', 'Plastic SCM'].map((software, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4">
                SDK utilisé
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                  Open XR
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Liste des projets */}
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          position={project.position}
          images={project.images}
          videos={project.videos}
        />
      ))}

      {/* Galerie */}
      <Galerie
        title="GALERIE D'AUTRES PROJETS"
        position="droite"
        images={[
          'VR/Galerie/Render1.png',
          'VR/Galerie/cao1.PNG',
          'VR/Galerie/ppr2.JPG',
          'VR/Galerie/kr2.JPG',
          'VR/Galerie/er20.JPG',
          'VR/Galerie/c_elec_2.PNG',
          'VR/Galerie/r14.JPG',
          'VR/Galerie/351200368_584779003807182_151793554362642557_n.png',
          'VR/Galerie/Mr9.JPG',
          'VR/Galerie/rr1.JPG',
          'VR/Galerie/hr11.JPG',
          'VR/Galerie/Toyc1.JPG',
          'VR/Galerie/r18.JPG',
          'VR/Galerie/Pr1.JPG',
          'VR/Galerie/hR8.JPG',
          'VR/Galerie/Giraffe_2_sepia.JPG',
          'VR/Galerie/kr1.JPG',
          'VR/Galerie/c_elec_1.PNG',
          'VR/Galerie/r16.JPG',
          'VR/Galerie/er1.JPG',
          'VR/Galerie/Tr1.JPG',
          'VR/Galerie/ap1.JPG',
          'VR/Galerie/ppr1.JPG',
          'VR/Galerie/hr10.JPG',
        ]}
      />
    </>
  )
}

export default VR

