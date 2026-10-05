import { useRef } from "react";
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import type { Group } from "three";

const MODEL_PATH = "/models/la-catrina-cup.glb";

export default function LaCatrinaCup() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-1, 2, 5],
      }}
      className="size-full"
    >
      <ambientLight intensity={0.2} />

      <directionalLight position={[4, 6, 5]} intensity={1} />

      <Environment preset="studio" environmentIntensity={0.5} />

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.35}
        scale={8}
        blur={2.5}
      />

      <group ref={group}>
        <Center>
          <primitive object={scene} />
        </Center>
      </group>

      <OrbitControls
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
