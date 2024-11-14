import React from "react";
import { Flow3DNode } from "../../../models/node";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const Route53: React.FC<Flow3DNode> = ({
    ...props
}) => {
  const color = "#F7883C";
  return (
    <group {...props}>
      <group rotation={[0, Math.PI / 6, 0]} position={[0, 0.5, 0]}>
        <mesh>
          <boxGeometry args={[0.4, 1.75, 0.4]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.25, 0.7, 0.25]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, 0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.25, 0.7, 0.25]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
};

export default withEditNodeOptions(Route53);
