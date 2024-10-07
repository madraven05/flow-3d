import React from "react";
import { MagnetTape } from "../assets/magnet-tape";
import { FloppyDisk } from "../assets/floppy-disk";

const DevScene = () => {
  return (
    <group position={[-4,0,0]}>
      <group scale={0.2} rotation={[0,Math.PI/5,0]} position={[0,-8,0]}>
        <MagnetTape />
      </group>
      <group scale={45} position={[15,-8,0]}>
        <FloppyDisk/>
      </group>
      <group scale={45} position={[16,-7,0]}>
        <FloppyDisk/>
      </group>
    </group>
  );
};

export default DevScene;
