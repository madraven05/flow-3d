import React from "react";
import { Flow3DNode } from "../../../models/node";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const SQS: React.FC<Flow3DNode> = ({ ...props }) => {
  const color = "#DAAB46"
  return (
    <group {...props}>
      <group scale={0.8} position={[0, 0.25, 0]}>
        <mesh rotation={[0, -Math.PI / 3, 0]} castShadow>
          <boxGeometry args={[1.2, 1.3, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0.31, 0.525, -0.179]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          castShadow
        >
          <boxGeometry args={[1.2, 1, 0.25]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0.31, -0.525, -0.179]}
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          castShadow
        >
          <boxGeometry args={[1.2, 1, 0.25]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0.31, 0, -0.179]}
          rotation={[Math.PI / 2, Math.PI, Math.PI / 6]}
          castShadow
        >
          <boxGeometry args={[0.2, 1, 0.25]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0.6, 0, -0.35]}
          rotation={[Math.PI / 2, Math.PI, Math.PI / 6]}
          castShadow
        >
          <boxGeometry args={[0.2, 1, 0.25]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
};

export default withEditNodeOptions(SQS);
