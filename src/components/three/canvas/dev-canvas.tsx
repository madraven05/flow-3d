import { Canvas } from "@react-three/fiber";
import React from "react";
import DevScene from "../scenes/dev-scene";

const DevCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[3, 1, 4]} />
      <DevScene />
    </Canvas>
  );
};

export default DevCanvas;
