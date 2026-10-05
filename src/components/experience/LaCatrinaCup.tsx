import { Suspense, useRef } from "react";
import {
  Center,
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { Group } from "three";

const MODEL_PATH = "/models/la-catrina-cup.glb";

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col w-max items-center gap-3">
        <div className="size-10 animate-spin rounded-full border-4 border-white/30 border-t-white">
          <span className="whitespace-nowrap text-sm font-medium text-white/80" />
        </div>
        <span className="text-lg leading-relaxed text-white/80">
          Cargando vaso...
        </span>
      </div>
    </Html>
  );
}

function CupModel() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function LaCatrinaCup() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 5],
      }}
      className="size-full"
    >
      <ambientLight intensity={0.2} />

      <directionalLight position={[4, 6, 5]} intensity={1} />
      
      <Suspense fallback={<Loader />}>
        <Environment preset="studio" environmentIntensity={0.4} />

        <CupModel />
      </Suspense>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.35}
        scale={8}
        blur={2.5}
      />

      <OrbitControls
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={8}
        enablePan={false}
      />
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
