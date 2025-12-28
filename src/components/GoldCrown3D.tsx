import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Crown = () => {
  const crownRef = useRef<THREE.Group>(null);
  const goldMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#D4AF37'),
    metalness: 1,
    roughness: 0.15,
    envMapIntensity: 2,
  }), []);

  useFrame((state) => {
    if (crownRef.current) {
      crownRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      crownRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
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
              {/* Main spike */}
              <mesh material={goldMaterial}>
                <coneGeometry args={[0.1, isMainPoint ? 0.6 : 0.4, 4]} />
              </mesh>
              
              {/* Decorative sphere on main points */}
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
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.95}
            roughness={0.05}
            thickness={0.5}
            ior={2.4}
            chromaticAberration={0.06}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.3}
            color="#D4AF37"
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
    </Float>
  );
};

const GoldCrown3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] crown-canvas">
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#FFD700"
          castShadow
        />
        <spotLight
          position={[-5, 3, -5]}
          angle={0.4}
          penumbra={0.8}
          intensity={1}
          color="#FFA500"
        />
        <pointLight position={[0, 2, 0]} intensity={0.5} color="#FFE55C" />
        
        <Crown />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default GoldCrown3D;