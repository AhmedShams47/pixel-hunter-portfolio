import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

interface GoldCrown3DProps {
  reducedMotion?: boolean;
  interactive?: boolean;
}

const Crown = ({ reducedMotion = false, interactive = false }: GoldCrown3DProps) => {
  const crownRef = useRef<THREE.Group>(null);
  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#D4AF37'),
        metalness: 1,
        roughness: 0.18,
        envMapIntensity: 2,
      }),
    []
  );

  useFrame((state, delta) => {
    if (reducedMotion) return;

    const crown = crownRef.current;
    if (!crown) return;

    const elapsed = state.clock.elapsedTime;
    const pointerX = interactive ? state.pointer.x * 0.22 : 0;
    const pointerY = interactive ? -state.pointer.y * 0.14 : 0;
    const spin = elapsed * 0.14;
    const floatY = Math.sin(elapsed * 0.5) * 0.08;

    crown.rotation.y += (spin + pointerX - crown.rotation.y) * Math.min(delta * 2.5, 1);
    crown.rotation.x += (pointerY + Math.sin(elapsed * 0.4) * 0.025 - crown.rotation.x) * Math.min(delta * 2.5, 1);
    crown.position.y += (floatY - crown.position.y) * Math.min(delta * 2.5, 1);
  });

  return (
    <group ref={crownRef} scale={1.5}>
      {/* Crown base ring */}
      <mesh position={[0, 0, 0]} material={goldMaterial}>
        <torusGeometry args={[0.8, 0.08, 16, 64]} />
      </mesh>

      {/* Crown band */}
      <mesh position={[0, 0.15, 0]} material={goldMaterial}>
        <cylinderGeometry args={[0.82, 0.78, 0.25, 64]} />
      </mesh>

      {/* Crown points */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 0.75;
        const z = Math.sin(angle) * 0.75;
        const isMainPoint = i % 2 === 0;

        return (
          <group key={i} position={[x, 0.3, z]} rotation={[0, -angle, 0]}>
            <mesh material={goldMaterial}>
              <coneGeometry args={[0.1, isMainPoint ? 0.6 : 0.4, 4]} />
            </mesh>

            {isMainPoint && (
              <mesh position={[0, isMainPoint ? 0.35 : 0.25, 0]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial
                  color="#FFD700"
                  metalness={1}
                  roughness={0.1}
                  emissive="#D4AF37"
                  emissiveIntensity={0.5}
                />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Central orb */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#FFE55C" transparent opacity={0.8} />
      </mesh>

      {/* Decorative rings */}
      <mesh position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} material={goldMaterial}>
        <torusGeometry args={[0.5, 0.015, 8, 32]} />
      </mesh>
    </group>
  );
};

const GoldCrown3D = ({ reducedMotion = false, interactive = true }: GoldCrown3DProps) => {
  return (
    <div className="crown-canvas h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.5, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#FFD700"
        />
        <spotLight
          position={[-5, 3, -5]}
          angle={0.4}
          penumbra={0.8}
          intensity={1}
          color="#FFA500"
        />
        <pointLight position={[0, 2, 0]} intensity={0.5} color="#FFE55C" />
        <Crown reducedMotion={reducedMotion} interactive={interactive && !reducedMotion} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default GoldCrown3D;