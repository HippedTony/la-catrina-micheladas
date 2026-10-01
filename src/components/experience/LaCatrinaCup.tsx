import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import type { Group } from 'three';

const MODEL_PATH = '/src/assets/models/vaso_catrina.glb';

export default function LaCatrinaCup() {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  return <primitive ref={group} object={scene} />;
}
