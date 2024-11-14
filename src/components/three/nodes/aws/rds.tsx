import React from "react";
import { Flow3DNode } from "../../../models/node";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const AwsRDS: React.FC<Flow3DNode> = ({ ...props }) => {
  return (
    <group {...props}>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 1.4, 8, 1]} />
        <meshStandardMaterial color="#3574BC" flatShading />
      </mesh>
    </group>
  );
};

export default withEditNodeOptions(AwsRDS);
