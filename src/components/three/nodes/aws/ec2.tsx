import React from "react";
import { Flow3DNode } from "../../../models/node";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const AWSEC2: React.FC<Flow3DNode> = ({ ...props }) => {
  return (
    <group {...props}>
      <group rotation={[0, Math.PI / 6, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 1, 1.1]} />
          <meshStandardMaterial color={"#F18A29"} />
        </mesh>
        <mesh position={[0.3, 0, 0]}>
          <boxGeometry args={[0.2, 1, 1.1]} />
          <meshStandardMaterial color={"#F18A29"} />
        </mesh>
        <mesh position={[0.6, 0, 0]}>
          <boxGeometry args={[0.2, 1, 1.1]} />
          <meshStandardMaterial color={"#F18A29"} />
        </mesh>
         <mesh position={[0.9, 0, 0]}>
          <boxGeometry args={[0.2, 1, 1.1]} />
          <meshStandardMaterial color={"#F18A29"} />
        </mesh>
      </group>
    </group>
  );
};

export default withEditNodeOptions(AWSEC2);
