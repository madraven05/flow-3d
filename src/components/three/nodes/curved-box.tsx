import { RoundedBox } from "@react-three/drei";
import React from "react";
import { MeshPhongMaterial } from "three";

interface CurvedBoxProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  radius?: number,
  scale?: [number, number, number];
  color?: string;
}

const CurvedBox: React.FC<CurvedBoxProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  radius = 0.2,
  color = "gray",
}) => {
  return (
    <RoundedBox
      material={new MeshPhongMaterial({ color: color })}
      position={position}
      rotation={rotation}
      scale={scale}
      radius={radius}
    />
  );
};

export default CurvedBox;
