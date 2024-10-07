/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf -t -o magnet-tape.tsx 
Author: maxdragonn (https://sketchfab.com/maxdragon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ibm-2401-61f8ce78c76b46dfade5ccc7ad020a1b
Title: IBM 2401
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ibm_2401_0: THREE.Mesh
    ibm_2401_1: THREE.Mesh
    ibm_2401_2: THREE.Mesh
    ibm_2401_3: THREE.Mesh
  }
  materials: {
    ibm_2401: THREE.MeshStandardMaterial
    tape: THREE.MeshStandardMaterial
    ibm_2401_tape: THREE.MeshStandardMaterial
    ibm_729_glass: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

export function MagnetTape(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/magnet-tape/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.ibm_2401_0.geometry} material={materials.ibm_2401} />
        <mesh geometry={nodes.ibm_2401_1.geometry} material={materials.tape} />
        <mesh geometry={nodes.ibm_2401_2.geometry} material={materials.ibm_2401_tape} />
        <mesh geometry={nodes.ibm_2401_3.geometry} material={materials.ibm_729_glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/magnet-tape/scene.gltf')
