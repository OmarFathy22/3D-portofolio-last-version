import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture , Text , Stage } from '@react-three/drei';
import Car from '../ModelsSection/Car'

const WebDesign = () => {
  return (
  <div className='styleModels'>
      <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
       <Stage environment="city" intensity={0.5}>
      {/* <ModelDraco /> */}
      <Car />
    
       </Stage>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  </div>
  );
}

export default WebDesign;
