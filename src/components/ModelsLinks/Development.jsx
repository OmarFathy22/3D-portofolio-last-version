import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Stage } from '@react-three/drei';
import Model from '../ModelsSection/ModelDraco'
const WebDesign = () => {
  return (
  <div className='styleModels'>
      <Canvas >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
       <Stage environment="city" intensity={0.5}>
        <Model/>
       </Stage>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  </div>
  );
}

export default WebDesign;
