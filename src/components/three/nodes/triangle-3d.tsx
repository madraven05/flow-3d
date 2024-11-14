import { GroupProps } from "@react-three/fiber";
import React, { HTMLAttributes } from "react";
import * as THREE from "three";

interface Triangle3DProps extends GroupProps {
  topPoint?: [number, number];
  bottomLeftPoint?: [number, number];
  bottomRightPoint?: [number, number];
  width?: number;
  color?: string;
}

const Triangle3D: React.FC<Triangle3DProps> = ({
  topPoint = [0, 0.2],
  bottomLeftPoint = [-0.2, -0.2],
  bottomRightPoint = [0.2, -0.2],
  width = 0.01,
  color = "white",
  ...props
}) => {
  const shape = React.useMemo(() => {
    const triangleShape = new THREE.Shape();
    triangleShape.moveTo(topPoint[0], topPoint[1]); // Top point
    triangleShape.lineTo(bottomLeftPoint[0], bottomLeftPoint[0]); // Bottom-left point
    triangleShape.lineTo(bottomRightPoint[0], bottomRightPoint[1]); // Bottom-right point
    triangleShape.closePath(); // Close the triangle
    return triangleShape;
  }, []);

  // Define the extrusion settings
  const extrudeSettings = React.useMemo(
    () => ({
      steps: 6,
      depth: width, // Thickness of the 3D triangle
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.01,
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
