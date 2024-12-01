/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf -t -o server.tsx 
Author: Ridellco (https://sketchfab.com/ridellco)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/server-rack-and-console-v3-24ebe6f197c44e0a93f4010045c4a997
Title: Server Rack and Console v3
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Flow3DNode } from '../../models/node'
import withEditNodeOptions from '../../hocs/with-edit-node-options'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
    Object_4: THREE.Mesh
  }
  materials: {
    console_auv: THREE.MeshStandardMaterial
    Cube12_auv: THREE.MeshStandardMaterial
    Cube1_auv: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

const Server: React.FC<Flow3DNode> = ({...props}) => {
  const { nodes, materials } = useGLTF('/server/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.5, 0]} scale={0.3} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow geometry={nodes.Object_2.geometry} material={materials.console_auv} />
        <mesh castShadow geometry={nodes.Object_3.geometry} material={materials.Cube12_auv} />
        <mesh castShadow geometry={nodes.Object_4.geometry} material={materials.Cube1_auv} />
      </group>
    </group>
  )
}

useGLTF.preload('/server/scene.gltf')
export default withEditNodeOptions(Server)
