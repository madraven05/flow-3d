/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 database.glb -t -o database.tsx 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder003: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cylinder009: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

export function Database(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/database.glb') as GLTFResult
  return (
    <group scale={3} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.002']} position={[0.531, 0, 0.354]} scale={0.613} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} position={[0.001, 0, 0.062]} scale={0.613} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0.001, 0, 0.062]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.002']} position={[0.531, -0.43, 0.354]} scale={0.613} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['Material.002']} position={[0.001, -0.43, 0.062]} scale={0.613} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['Material.001']} position={[0.001, -0.43, 0.062]} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.002']} position={[0.531, -0.88, 0.354]} scale={0.613} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.002']} position={[0.001, -0.88, 0.062]} scale={0.613} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.001']} position={[0.001, -0.88, 0.062]} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.002']} scale={0.971} />
    </group>
  )
}

useGLTF.preload('/database.glb')