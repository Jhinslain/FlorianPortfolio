import { useMemo, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function SnakeModel({
  segments = 40,            // plus de segments pour une courbe fluide
  baseRadius = 0.18,        // rayon de la tête
  lengthStep = 0.22,        // écart nominal entre les vertèbres
  followSpeed = 0.18,       // vitesse d'interpolation vers la cible
  waveAmp = 0.10,           // amplitude de l'ondulation latérale
  waveLen = 2.4,            // longueur d'onde (en nombre de segments)
  waveSpeed = 1.6           // vitesse de propagation de l'onde
}) {
  const groupRef = useRef(null)
  const { viewport, pointer, clock } = useThree()
  const bones = useRef([])

  // Prépare des meshes réutilisables (capsules + couleurs ventre/dos)
  const materials = useMemo(() => {
    const dorsal = new THREE.MeshStandardMaterial({
      color: "#5c6f58", roughness: 0.6, metalness: 0.05
    })
    const ventral = new THREE.MeshStandardMaterial({
      color: "#d8d2bd", roughness: 0.8, metalness: 0.02
    })
    const eye = new THREE.MeshStandardMaterial({ color: "#111111", roughness: 0.3 })
    const tongue = new THREE.MeshStandardMaterial({ color: "#a0182a", roughness: 0.7 })
    return { dorsal, ventral, eye, tongue }
  }, [])

  // Géométries réutilisées
  const capsuleGeom = useMemo(() => new THREE.CapsuleGeometry(1, 0, 8, 16), [])
  const sphereGeom  = useMemo(() => new THREE.SphereGeometry(1, 24, 24), [])
  const tongueGeom  = useMemo(() => new THREE.ConeGeometry(1, 3, 8), [])

  // Positions initiales (corps droit)
  const initialPositions = useMemo(
    () => Array.from({ length: segments }, (_, i) =>
      new THREE.Vector3(-i * lengthStep, 0, 0)
    ),
    [segments, lengthStep]
  )

  // Stocke les positions comme objets 3D à suivre
  const initRefs = (el, i) => {
    if (!el) return
    bones.current[i] = el
    el.position.copy(initialPositions[i])
  }

  useFrame(() => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()

    // Cible (souris) convertie en coordonnées scène
    const targetX = (pointer.x * viewport.width) / 2
    const targetY = (pointer.y * viewport.height) / 2

    for (let i = 0; i < segments; i++) {
      const curr = bones.current[i]
      if (!curr) continue

      // Rayon effilé du corps (tête large -> queue fine)
      const r = THREE.MathUtils.lerp(baseRadius, baseRadius * 0.15, i / (segments - 1))
      const thicknessY = THREE.MathUtils.lerp(0.95, 0.65, i / (segments - 1)) // ventre un peu aplati
      curr.scale.set(r, r * thicknessY, r)

      if (i === 0) {
        // Tête : suit la cible
        curr.position.x += (targetX - curr.position.x) * followSpeed
        curr.position.y += (targetY - curr.position.y) * followSpeed

        // Petite ondulation “tête”
        curr.position.y += Math.sin(t * 2.0) * 0.002
      } else {
        // Corps : suit le précédent à distance fixe
        const prev = bones.current[i - 1]
        const dir = new THREE.Vector3().subVectors(prev.position, curr.position)
        const dist = dir.length()
        if (dist > 1e-4) dir.normalize()

        // Position désirée sur l’axe du précédent
        const desired = new THREE.Vector3().copy(prev.position).addScaledVector(dir, -lengthStep)

        // Ondulation latérale réaliste (perpendiculaire à la direction locale)
        const normal = new THREE.Vector3(-dir.y, dir.x, 0) // 2D : normale dans le plan
        const phase = (i / waveLen - t * waveSpeed) * Math.PI * 2
        const lateral = normal.multiplyScalar(Math.sin(phase) * waveAmp * (1 - i / segments))

        desired.add(lateral)

        // Interpolation douce
        curr.position.lerp(desired, 0.35)
      }

      // Orientation pour regarder vers l’avant
      if (i === 0) {
        const dx = targetX - curr.position.x
        const dy = targetY - curr.position.y
        if (dx * dx + dy * dy > 1e-6) curr.rotation.z = Math.atan2(dy, dx)
      } else {
        const prev = bones.current[i - 1]
        const dx = prev.position.x - curr.position.x
        const dy = prev.position.y - curr.position.y
        if (dx * dx + dy * dy > 1e-6) curr.rotation.z = Math.atan2(dy, dx)
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Segments du corps */}
      {Array.from({ length: segments }).map((_, i) => (
        <group key={i} ref={(el) => initRefs(el, i)}>
          {/* Dessus (dorsal) */}
          <mesh geometry={capsuleGeom} position={[0, 0.02, 0]}>
            <primitive object={materials.dorsal} attach="material" />
          </mesh>
          {/* Dessous (ventral plus clair) */}
          <mesh geometry={capsuleGeom} rotation={[0, 0, Math.PI]} position={[0, -0.02, 0]}>
            <primitive object={materials.ventral} attach="material" />
          </mesh>
        </group>
      ))}

      {/* Tête (un peu plus large + yeux) */}
      <group position={[0, 0, 0]} ref={(el) => {
        if (el) bones.current[0] = el
      }}>
        <mesh geometry={sphereGeom} scale={[baseRadius * 1.15, baseRadius * 0.95, baseRadius * 1.15]}>
          <primitive object={materials.dorsal} attach="material" />
        </mesh>
        {/* Ventre de la tête */}
        <mesh geometry={sphereGeom} scale={[baseRadius * 1.12, baseRadius * 0.85, baseRadius * 1.12]} position={[0, -0.04, 0]}>
          <primitive object={materials.ventral} attach="material" />
        </mesh>
        {/* Yeux */}
        <mesh geometry={sphereGeom} scale={[0.04, 0.04, 0.04]} position={[ baseRadius * 0.6,  baseRadius * 0.15, 0]}>
          <primitive object={materials.eye} attach="material" />
        </mesh>
        <mesh geometry={sphereGeom} scale={[0.04, 0.04, 0.04]} position={[ baseRadius * 0.6, -baseRadius * 0.15, 0]}>
          <primitive object={materials.eye} attach="material" />
        </mesh>
        {/* Langue bifide */}
        <mesh geometry={tongueGeom} rotation={[0, 0, Math.PI / 2]} position={[baseRadius * 1.2, 0, 0]} scale={[0.05, 0.24, 0.05]}>
          <primitive object={materials.tongue} attach="material" />
        </mesh>
      </group>
    </group>
  )
}
