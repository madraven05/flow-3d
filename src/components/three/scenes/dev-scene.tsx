import React from "react";
import { MagnetTape } from "../assets/magnet-tape";
import { FloppyDisk } from "../assets/floppy-disk";
import with3DSectionAnimation from "../../hocs/with-3d-section-animation";
import { Html } from "@react-three/drei";

const DevScene = () => {
  return (
    <group position={[-4, 0, 0]} scale={0.65}>
      <group scale={0.2} rotation={[0, Math.PI / 5, 0]} position={[0, -8, 0]}>
        <MagnetTape />
      </group>
      <group scale={45} position={[15, -8, 0]}>
        <FloppyDisk />
      </group>
      <group scale={45} position={[16, -7, 0]}>
        <FloppyDisk />
      </group>
      <Html position={[6, -12, 0]}>
        <p className="w-full opacity-70 text-xs text-center backdrop-blur-sm bg-clip-text uppercase">Memory Units</p>
      </Html>
    </group>
  );
};

export default with3DSectionAnimation(DevScene);
