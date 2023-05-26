import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture , Text , Stage } from '@react-three/drei';
import Car from '../ModelsSection/Car'
import Model from '../ModelsSection/Model';
import ModelDraco from '../ModelsSection/ModelDraco';
import Mac from '../ModelsSection/Mac'
const WebDesign = () => {
  return (
  <div  className='styleModels'>
      <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
       <Stage environment="city" intensity={0.5}>
      <Mac />
    
       </Stage>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  </div>
  );
}

export default WebDesign;
