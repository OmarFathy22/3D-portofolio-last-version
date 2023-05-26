import {React , useRef , Suspense} from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RenderTexture , Text } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import Cube from '../ModelsSection/Cube';

const Test = () => {
  
  const Section = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    `
  return (
    <Section className='styleModels'>
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
    </Section>
  );
}

export default Test;
