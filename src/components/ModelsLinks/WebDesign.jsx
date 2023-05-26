import React, { Suspense } from 'react';
import {Canvas} from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture , Text , Stage } from '@react-three/drei';
import Car from '../ModelsSection/Car'
import Model from '../ModelsSection/Model';
import ModelDraco from '../ModelsSection/ModelDraco';
import Mac from '../ModelsSection/Mac';
import Shoe from '../ModelsSection/Shoe';
import Atom from '../ModelsSection/Atom';

const WebDesign = () => {
  return (

  <div  className='styleModels'>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <Atom />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
  </div>
    
  
  );
}

export default WebDesign;
