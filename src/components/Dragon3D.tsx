import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

interface Dragon3DProps {
  reducedMotion?: boolean;
  interactive?: boolean;
}

const DragonBody = ({ reducedMotion = false, interactive = false }: Dragon3DProps) => {
  const dragonRef = useRef<THREE.Group>(null);
  const spineRefs = useRef<Array<THREE.Group>>(Array(12).fill(null).map(() => useRef<THREE.Group>(null)));
  const wingRefs = useRef<{ left: THREE.Group | null; right: THREE.Group | null }>({ left: null, right: null });

  // Purple/pink gradient materials matching existing theme
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#7C3AED'), // purple-600
        metalness: 0.7,
        roughness: 0.25,
        envMapIntensity: 1.5,
        transparent: true,
        opacity: 0.95,
      }),
    []
  );

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#EC4899'), // pink-500
        metalness: 0.8,
        roughness: 0.15,
        envMapIntensity: 2,
        emissive: new THREE.Color('#EC4899'),
        emissiveIntensity: 0.3,
      }),
    []
  );

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#A855F7'), // purple-500
        transparent: true,
        opacity: 0.6,
      }),
    []
  );

  const eyeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#FCE7F3'), // pink-100
        transparent: true,
        opacity: 1,
      }),
    []
  );

  // Spine segments for serpentine motion
  useFrame((state, delta) => {
    if (reducedMotion) return;

    const elapsed = state.clock.elapsedTime;
    const pointerX = interactive ? state.pointer.x * 0.15 : 0;
    const pointerY = interactive ? -state.pointer.y * 0.1 : 0;

    // Main body undulation
    if (dragonRef.current) {
      const baseRotationY = Math.sin(elapsed * 0.3) * 0.15 + pointerX;
      const baseRotationX = Math.cos(elapsed * 0.25) * 0.08 + pointerY;
      const floatY = Math.sin(elapsed * 0.4) * 0.12;

      dragonRef.current.rotation.y += (baseRotationY - dragonRef.current.rotation.y) * Math.min(delta * 2, 1);
      dragonRef.current.rotation.x += (baseRotationX - dragonRef.current.rotation.x) * Math.min(delta * 2, 1);
      dragonRef.current.position.y += (floatY - dragonRef.current.position.y) * Math.min(delta * 2, 1);
    }

    // Spine wave propagation
    spineRefs.current.forEach((spineRef, i) => {
      if (!spineRef.current) return;
      const phase = i * 0.4;
      const waveY = Math.sin(elapsed * 0.8 + phase) * 0.04;
      const waveZ = Math.cos(elapsed * 0.6 + phase) * 0.02;
      spineRef.current.rotation.z = waveZ;
      spineRef.current.position.y = waveY;
    });

    // Wing flutter
    if (wingRefs.current.left && wingRefs.current.right) {
      const wingFlap = Math.sin(elapsed * 2.5) * 0.3;
      wingRefs.current.left.rotation.x = -0.4 + wingFlap;
      wingRefs.current.right.rotation.x = -0.4 - wingFlap;
      wingRefs.current.left.rotation.z = Math.sin(elapsed * 1.8) * 0.1;
      wingRefs.current.right.rotation.z = -Math.sin(elapsed * 1.8) * 0.1;
    }
  });

  return (
    <group ref={dragonRef}>
      {/* Main serpentine body - 12 segments forming a dragon spine */}
      {[...Array(12)].map((_, i) => {
        const progress = i / 11;
        const isHead = i === 11;
        const isTail = i === 0;
        const segmentScale = 0.15 + progress * 0.35;
        const segmentLength = isHead ? 0.5 : 0.35;
        const zOffset = -progress * 3.5;

        return (
          <group
            key={i}
            ref={spineRefs.current[i]}
            position={[0, 0, zOffset]}
            scale={segmentScale}
          >
            {/* Body segment */}
            <mesh material={bodyMaterial}>
              <capsuleGeometry args={[0.6, segmentLength, 8, 16]} />
            </mesh>

            {/* Accent ridges along the back */}
            {!isHead && (
              <mesh material={accentMaterial}>
                <coneGeometry args={[0.12, 0.35, 4]} />
              </mesh>
            )}

            {/* Head details */}
            {isHead && (
              <>
                {/* Snout */}
                <mesh position={[0, -0.1, 0.6]} material={bodyMaterial}>
                  <coneGeometry args={[0.3, 0.6, 8]} />
                </mesh>

                {/* Eyes - glowing pink */}
                <mesh position={[-0.18, 0.15, 0.8]} material={eyeMaterial}>
                  <sphereGeometry args={[0.1, 16, 16]} />
                </mesh>
                <mesh position={[0.18, 0.15, 0.8]} material={eyeMaterial}>
                  <sphereGeometry args={[0.1, 16, 16]} />
                </mesh>

                {/* Horns */}
                {[-0.2, 0.2].map((x, hi) => (
                  <mesh key={hi} position={[x, 0.3, 0.3]} rotation={[-0.3, 0, 0]} material={accentMaterial}>
                    <coneGeometry args={[0.06, 0.4, 4]} />
                  </mesh>
                ))}

                {/* Jaw glow */}
                <mesh position={[0, -0.25, 0.5]} material={glowMaterial}>
                  <sphereGeometry args={[0.25, 12, 12]} />
                </mesh>
              </>
            )}

            {/* Tail tip */}
            {isTail && (
              <mesh position={[0, 0, -0.4]} material={accentMaterial}>
                <coneGeometry args={[0.08, 0.3, 4]} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Wings - large membraned wings attached at segment 3 */}
      <group
        ref={wingRefs.current.left}
        position={[-0.8, 0.2, -1.8]}
        rotation={[-0.4, 0, -0.2]}
      >
        <mesh material={bodyMaterial} side={THREE.DoubleSide}>
          <planeGeometry args={[2.5, 1.8, 8, 4]} />
        </mesh>
        <mesh material={glowMaterial} side={THREE.DoubleSide}>
          <planeGeometry args={[2.3, 1.6, 8, 4]} />
        </mesh>
        {/* Wing fingers/bones */}
        {[0, 1, 2].map((wi) => (
          <mesh key={wi} position={[(wi - 1) * 0.7, 0, 0]} material={accentMaterial}>
            <cylinderGeometry args={[0.02, 0.02, 1.8, 4]} />
          </mesh>
        ))}
      </group>

      <group
        ref={wingRefs.current.right}
        position={[0.8, 0.2, -1.8]}
        rotation={[-0.4, 0, 0.2]}
        scale={[-1, 1, 1]}
      >
        <mesh material={bodyMaterial} side={THREE.DoubleSide}>
          <planeGeometry args={[2.5, 1.8, 8, 4]} />
        </mesh>
        <mesh material={glowMaterial} side={THREE.DoubleSide}>
          <planeGeometry args={[2.3, 1.6, 8, 4]} />
        </mesh>
        {[0, 1, 2].map((wi) => (
          <mesh key={wi} position={[(wi - 1) * 0.7, 0, 0]} material={accentMaterial}>
            <cylinderGeometry args={[0.02, 0.02, 1.8, 4]} />
          </mesh>
        ))}
      </group>

      {/* Particles/trail effect */}
      {[...Array(8)].map((_, pi) => (
        <mesh
          key={pi}
          position={[
            Math.sin(pi * 0.8) * 0.3,
            Math.cos(pi * 0.8) * 0.2,
            -4 - pi * 0.3
          ]}
          material={glowMaterial}
        >
          <sphereGeometry args={[0.08 - pi * 0.008, 8, 8]} />
        </mesh>
      ))}
    </group>
  );
};

const Dragon3D = ({ reducedMotion = false, interactive = true }: Dragon3DProps) => {
  return (
    <div className="dragon-canvas h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} color="#F3E8FF" />
        {/* Purple rim light */}
        <spotLight
          position={[6, 4, 6]}
          angle={0.35}
          penumbra={1}
          intensity={1.8}
          color="#A855F7"
        />
        {/* Pink fill light */}
        <spotLight
          position={[-5, 3, -5]}
          angle={0.45}
          penumbra={0.9}
          intensity={1.2}
          color="#F472B6"
        />
        {/* Core glow */}
        <pointLight position={[0, 1.5, 0]} intensity={0.8} color="#D946EF" distance={10} />
        {/* Subtle warm kicker */}
        <directionalLight position={[2, 4, 3]} intensity={0.4} color="#FCE7F3" />

        <DragonBody reducedMotion={reducedMotion} interactive={interactive && !reducedMotion} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default Dragon3D;