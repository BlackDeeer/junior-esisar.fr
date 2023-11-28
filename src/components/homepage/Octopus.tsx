'use client';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useGLTF, Float, AdaptiveDpr } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    CuteOcto: THREE.Mesh;
  };
};

const LERP = 0.1;
const ROTATION_Y_OFFSET = 3;

export function OctopusModel(props: any) {
  const groupRef = useRef<THREE.Group>();
  const { nodes } = useGLTF('/low_poly_cute_octopus.glb') as GLTFResult;

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (2 * e.clientX) / window.innerWidth - 1;
      mouse.current.y = (2 * e.clientY) / window.innerHeight - 1;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      Math.sin((mouse.current.x * Math.PI) / 2) / 4 + ROTATION_Y_OFFSET,
      LERP
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      Math.sin((mouse.current.y * Math.PI) / 2) / 6,
      LERP
    );
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.CuteOcto.geometry}>
        <meshStandardMaterial color='#7e4999' roughness={0.5} metalness={0.5} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/low_poly_cute_octopus.glb');

export default function Octopus() {
  return (
    <Canvas>
      <AdaptiveDpr pixelated />
      <ambientLight intensity={2} />
      <directionalLight color='white' position={[-4, 2, 5]} intensity={1.6} />
      <Float floatIntensity={2} rotationIntensity={1} speed={2}>
        <OctopusModel
          position={[0, -1, 0]}
          rotation={[0, ROTATION_Y_OFFSET, 0]}
          scale={0.06}
        />
      </Float>
    </Canvas>
  );
}
