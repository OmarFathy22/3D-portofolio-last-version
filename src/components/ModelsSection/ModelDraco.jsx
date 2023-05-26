
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/modelDraco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 1.56]} scale={5}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Black_Old_Paint.002']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Black_Old_Paint.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Black_Old_Paint.002']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Grey_Old_Paint.001']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Grey_Old_Paint.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Grey_Old_Paint.001']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Blue_Old_Paint.001']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Blackyelloish_Old_Paint.002']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Black_Old_Paint.003']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['WhiteGrey_Old_Paint.002']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Yellow_Old_Paint.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/modelDraco-transformed.glb')
