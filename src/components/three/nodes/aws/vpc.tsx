import React from "react";
import { Flow3DNode } from "../../../models/node";
import * as THREE from "three";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const VPC: React.FC<Flow3DNode> = ({ color, position, ...props }) => {
  const boundaryMaterial = new THREE.MeshStandardMaterial({ color: color });
  const logoMaterial = new THREE.MeshStandardMaterial({ color: "#F6883A" });
  return (
    <group position={position}>
      <group {...props} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow material={boundaryMaterial}>
          <boxGeometry args={[10, 0.25, 0.125]} />
        </mesh>
        <mesh
          castShadow
          material={boundaryMaterial}
          position={[-5, 0, 4.75]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <boxGeometry args={[9.64, 0.25, 0.125]} />
        </mesh>
        <mesh castShadow material={boundaryMaterial} position={[0, 0, 9.5]}>
          <boxGeometry args={[10, 0.25, 0.125]} />
        </mesh>
        <mesh
          castShadow
          material={boundaryMaterial}
          position={[5, 0, 1.44]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <boxGeometry args={[3, 0.25, 0.125]} />
        </mesh>
        <mesh
          castShadow
          material={boundaryMaterial}
          position={[5, 0, 8.0625]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <boxGeometry args={[3, 0.25, 0.125]} />
        </mesh>
      </group>
      <group >
        {[...Array(2)].map((_, i) => (
          <group
            scale={0.75}
            position={[i * 0.5, 2.5, 4.75]}
          >
            <mesh
              castShadow
              material={logoMaterial}
              rotation={[0, Math.PI / 2, 0]}
            >
              <boxGeometry args={[1, 0.3, 0.3]} />
            </mesh>
            <mesh
              castShadow
              material={logoMaterial}
              position={[0, -0.175, 0.5]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <boxGeometry args={[0.65, 0.3, 0.3]} />
            </mesh>
            <mesh
              castShadow
              material={logoMaterial}
              position={[0, -0.175, -0.5]}
              rotation={[0, 0, Math.PI / 2]}
            >
              <boxGeometry args={[0.65, 0.3, 0.3]} />
            </mesh>
            <mesh
              castShadow
              material={logoMaterial}
              position={[0, -0.8, 0]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <boxGeometry args={[1.275, 0.3, 0.3]} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};

export default withEditNodeOptions(VPC);
