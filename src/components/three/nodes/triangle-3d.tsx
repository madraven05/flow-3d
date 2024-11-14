import { GroupProps } from "@react-three/fiber";
import React, { HTMLAttributes } from "react";
import * as THREE from "three";

interface Triangle3DProps extends GroupProps {
  height?: number,
  width?: number;
  color?: string;
  bevelSize?: number;
}

const Triangle3D: React.FC<Triangle3DProps> = ({
  height=0.2,
  width = 0.01,
  color = "white",
  bevelSize = 0.01,
  ...props
}) => {
  const shape = React.useMemo(() => {
    const triangleShape = new THREE.Shape();
    triangleShape.moveTo(0,height); // Top point
    triangleShape.lineTo(-height, -height); // Bottom-left point
    triangleShape.lineTo(height, -height); // Bottom-right point
    triangleShape.closePath(); // Close the triangle
    return triangleShape;
  }, []);

  // Define the extrusion settings
  const extrudeSettings = React.useMemo(
    () => ({
      steps: 2,
      depth: width, // Thickness of the 3D triangle
      bevelEnabled: true,
      bevelThickness: 0,
      bevelSize: bevelSize,
      bevelSegments: 1,
    }),
    []
  );

  return (
    <group {...props}>
      <mesh castShadow>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Triangle3D;
