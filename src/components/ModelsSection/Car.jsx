
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/car-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.56, 0, 0]} scale='0.0006'>
        <group rotation={[Math.PI / 2, 0, 0]} >
          <group position={[-30, 30, 46]}>
            <mesh geometry={nodes.HotRod_Chassis_0.geometry} material={materials.Chassis} />
            <mesh geometry={nodes.HotRod_Wheels_0.geometry} material={materials.Wheels} />
            <mesh geometry={nodes.HotRod_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.HotRod_Glass_0.geometry} material={materials.Glass} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/car-transformed.glb')
