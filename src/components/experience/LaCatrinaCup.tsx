import { useRef } from 'react';
import { Center, useGLTF } from '@react-three/drei';

import type { Group } from 'three';

const MODEL_PATH = '/models/la-catrina-cup2.glb';

export default function LaCatrinaCup() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  )
}
