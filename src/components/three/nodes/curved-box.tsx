import { RoundedBox } from "@react-three/drei";
import React from "react";
import { MeshPhongMaterial } from "three";
import withEditNodeMenu from "../../hocs/with-edit-node-menu";
import { Flow3DNode } from "../../models/node";

interface CurvedBoxProps extends Flow3DNode {
  radius?: number;
}

const CurvedBox: React.FC<CurvedBoxProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  radius = 0.2,
  color = "gray",
  guuid,
}) => {
  return (
    <group key={guuid}>
      <RoundedBox
        castShadow
        material={new MeshPhongMaterial({ color: color })}
        position={position}
        rotation={rotation}
        scale={scale}
        radius={radius}
      />
    </group>
  );
};

export default withEditNodeMenu(CurvedBox);
