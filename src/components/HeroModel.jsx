import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function HeroModel() {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main vessel body - organic shaped pod */}
      <mesh position={[0, -0.5, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Glass dome base */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          color="#87CEEB"
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Interior elements - fish */}
      <mesh position={[0.2, 0.7, 0.1]}>
        <boxGeometry args={[0.15, 0.1, 0.05]} />
        <meshStandardMaterial color="#4FC3F7" />
      </mesh>
      <mesh position={[-0.15, 0.6, -0.1]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.12, 0.08, 0.04]} />
        <meshStandardMaterial color="#BA68C8" />
      </mesh>

      {/* Plants inside dome */}
      <mesh position={[0.3, 0.5, 0.2]}>
        <coneGeometry args={[0.1, 0.3, 8]} />
        <meshStandardMaterial color="#66BB6A" />
      </mesh>

      {/* Front light */}
      <mesh position={[-0.8, -0.3, 0]}>
        <ringGeometry args={[0.15, 0.2, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <pointLight position={[-0.8, -0.3, 0]} intensity={2} color="#FFA726" />

      {/* Surrounding foliage */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 1.5 + Math.random() * 0.3
        const colors = ['#4CAF50', '#FF9800', '#E91E63', '#FFEB3B', '#9C27B0']
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              -0.8 + Math.random() * 0.4,
              Math.sin(angle) * radius
            ]}
            rotation={[Math.random() * Math.PI, angle, Math.random() * Math.PI]}
          >
            <coneGeometry args={[0.1 + Math.random() * 0.1, 0.3 + Math.random() * 0.3, 6]} />
            <meshStandardMaterial color={colors[Math.floor(Math.random() * colors.length)]} />
          </mesh>
        )
      })}

      {/* Rocks base */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={`rock-${i}`}
          position={[
            (Math.random() - 0.5) * 1.5,
            -1.2,
            (Math.random() - 0.5) * 1.5
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
        >
          <dodecahedronGeometry args={[0.15 + Math.random() * 0.1, 0]} />
          <meshStandardMaterial color="#9E9E9E" />
        </mesh>
      ))}
    </group>
  )
}

export default HeroModel
