/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf -t -o mobile.tsx 
Author: k. (https://sketchfab.com/k_nelms)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-mobile-phone-4ff99cf17b164e7b9790638c5d2ef4ce
Title: Low Poly Mobile Phone
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Flow3DNode } from "../../models/node";
import withEditNodeOptions from "../../hocs/with-edit-node-options";

type GLTFResult = GLTF & {
  nodes: {
    Phone_Case_PhoneCase_Mat_0: THREE.Mesh;
    Phone_Case_PhoneFace_Mat_0: THREE.Mesh;
    Phone_Camera_PhoneCase_Mat_0: THREE.Mesh;
    Power_Button_PhoneButton_Mat_0: THREE.Mesh;
    Volume_Up_PhoneButton_Mat_0: THREE.Mesh;
    Volume_Down_PhoneButton_Mat_0: THREE.Mesh;
    Camera_1_PhoneFace_Mat_0: THREE.Mesh;
    Camera_2_PhoneFace_Mat_0: THREE.Mesh;
    Camera_Light_Camera_Light1_0: THREE.Mesh;
    Camera_Front_PhoneButton_Mat_0: THREE.Mesh;
  };
  materials: {
    PhoneCase_Mat: THREE.MeshStandardMaterial;
    PhoneFace_Mat: THREE.MeshStandardMaterial;
    PhoneButton_Mat: THREE.MeshStandardMaterial;
    Camera_Light1: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

const Mobile: React.FC<Flow3DNode> = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/mobile/scene.gltf") as GLTFResult;
  return (
    <group {...props}>
      <group scale={1.5}  dispose={null}>
        <group rotation={[-Math.PI / 4, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[0, 43.978, 0]} rotation={[Math.PI / 4, 0, 0]}>
              <mesh
                geometry={nodes.Phone_Case_PhoneCase_Mat_0.geometry}
                material={materials.PhoneCase_Mat}
              />
              <mesh
                geometry={nodes.Phone_Case_PhoneFace_Mat_0.geometry}
                material={materials.PhoneFace_Mat}
              />
            </group>
            <mesh
              geometry={nodes.Phone_Camera_PhoneCase_Mat_0.geometry}
              material={materials.PhoneCase_Mat}
              position={[8.421, 57.722, -17.875]}
              rotation={[Math.PI / 4, 0, 0]}
              scale={[0.889, 1, 1]}
            />
            <mesh
              geometry={nodes.Power_Button_PhoneButton_Mat_0.geometry}
              material={materials.PhoneButton_Mat}
              position={[15.24, 54.694, -10.453]}
              rotation={[Math.PI / 4, 0, 0]}
              scale={[1, 1, 1.24]}
            />
            <mesh
              geometry={nodes.Volume_Up_PhoneButton_Mat_0.geometry}
              material={materials.PhoneButton_Mat}
              position={[-15.122, 54.492, -10.657]}
              rotation={[0.787, 0, -3.053]}
              scale={[1, 1, 0.793]}
            />
            <mesh
              geometry={nodes.Volume_Down_PhoneButton_Mat_0.geometry}
              material={materials.PhoneButton_Mat}
              position={[-15.121, 51.118, -7.296]}
              rotation={[0.787, 0, -3.053]}
              scale={[1, 1, 0.793]}
            />
            <mesh
              geometry={nodes.Camera_1_PhoneFace_Mat_0.geometry}
              material={materials.PhoneFace_Mat}
              position={[9.743, 58.839, -20.064]}
              rotation={[Math.PI / 4, 0, 0]}
              scale={1.696}
            />
            <mesh
              geometry={nodes.Camera_2_PhoneFace_Mat_0.geometry}
              material={materials.PhoneFace_Mat}
              position={[9.743, 55.578, -16.803]}
              rotation={[Math.PI / 4, 0, 0]}
              scale={1.696}
            />
            <mesh
              geometry={nodes.Camera_Light_Camera_Light1_0.geometry}
              material={materials.Camera_Light1}
              position={[6.831, 57.23, -18.455]}
              rotation={[Math.PI / 4, 0, 0]}
              scale={0.875}
            />
            <mesh
              geometry={nodes.Camera_Front_PhoneButton_Mat_0.geometry}
              material={materials.PhoneButton_Mat}
              position={[-0.421, 66.193, -18.692]}
              rotation={[Math.PI / 4, 0, 0]}
              scale={0.575}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/mobile/scene.gltf");
export default withEditNodeOptions(Mobile);