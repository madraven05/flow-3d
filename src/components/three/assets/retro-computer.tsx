/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf -t -o retro-computer.tsx 
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/retro-computer-setup-free-82eaf2047e0447a1bfea22482f1d1404
Title: Retro Computer Setup (FREE)
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    retro_computer_setup_retro_computer_setup_Mat_0: THREE.Mesh
  }
  materials: {
    retro_computer_setup_Mat: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

export function RetroComputer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/retro-computer/scene.gltf') as GLTFResult
  return (
    <group scale={0.25} rotation={[0,Math.PI/5,0]} position={[-2,-3,0]} {...props} dispose={null}>
      <mesh geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry} material={materials.retro_computer_setup_Mat} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/retro-computer/scene.gltf')
