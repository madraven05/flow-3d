import React from "react";
import { Flow3DNode } from "../../../models/node";
import { useTexture } from "@react-three/drei";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const AwsIGW: React.FC<Flow3DNode> = ({ ...props }) => {
  const igwTexture = useTexture({ map: "/textures/aws-igw.png" });
  return (
    <group position={[-5, 0, 0]} {...props}>
      <mesh rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2]} />
        <meshStandardMaterial attach="material-0" color="#F58536" />{" "}
        {/* Side */}
        {/* Bottom face material */}
        <meshStandardMaterial attach="material-1" color="#F58536" />{" "}
        {/* Bottom */}
        {/* Top face material */}
        <meshStandardMaterial attach="material-2" map={igwTexture.map} />
      </mesh>
    </group>
  );
};

export default withEditNodeOptions(AwsIGW);
