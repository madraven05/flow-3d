import React from "react";
import { Flow3DNode } from "../../../models/node";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const DynamoDB: React.FC<Flow3DNode> = ({ ...props }) => {
  const color = "#3476BA";
  return (
    <group {...props}>
      <group position={[0, -0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.2, 9, 1]} />
          <meshStandardMaterial color={color} flatShading />
        </mesh>
      </group>
    </group>
  );
};

export default withEditNodeOptions(DynamoDB);
