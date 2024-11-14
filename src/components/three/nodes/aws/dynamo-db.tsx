import React from "react";
import { Flow3DNode } from "../../../models/node";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const DynamoDB: React.FC<Flow3DNode> = ({ ...props }) => {
  const color = "#3476BA";
  return (
    <group {...props}>
      <group position={[0, -0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
      </group>
    </group>
  );
};

export default withEditNodeOptions(DynamoDB);
