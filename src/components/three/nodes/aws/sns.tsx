import React from "react";
import { Flow3DNode } from "../../../models/node";
import * as THREE from "three";
import Triangle3D from "../triangle-3d";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const SNS: React.FC<Flow3DNode> = ({ ...props }) => {
  const material = new THREE.MeshStandardMaterial({ color: "#C27EA0" });

  return (
    <group {...props}>
      <group scale={0.75}>
        <group position={[0, 0.5, 0]}>
          <mesh
            rotation={[0, -Math.PI / 3, 0]}
            geometry={new THREE.BoxGeometry(1.4, 1, 0.3)}
            material={material}
          />
          <Triangle3D
            color="#C27EA0"
            position={[0.288, -0.7, 0.2]}
            rotation={[0, -Math.PI / 3, Math.PI]}
            width={0.28}
          />
        </group>
        <group position={[0.75, 0.5, 0]}>
          <mesh
            rotation={[0, -Math.PI / 3, 0]}
            geometry={new THREE.BoxGeometry(1.4, 1, 0.3)}
            material={material}
          />
          <Triangle3D
            color="#C27EA0"
            position={[0.288, -0.7, 0.2]}
            rotation={[0, -Math.PI / 3, Math.PI]}
            width={0.28}
          />
        </group>
        <group position={[1.55, 0.5, 0]}>
          <mesh
            rotation={[0, -Math.PI / 3, 0]}
            geometry={new THREE.BoxGeometry(1.4, 1, 0.3)}
            material={material}
          />
          <Triangle3D
            color="#C27EA0"
            position={[0.288, -0.7, 0.2]}
            rotation={[0, -Math.PI / 3, Math.PI]}
            width={0.28}
          />
        </group>
      </group>
    </group>
  );
};

export default withEditNodeOptions(SNS);
