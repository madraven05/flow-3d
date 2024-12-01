import { Canvas } from "@react-three/fiber";
import React from "react";
import DevScene from "../scenes/dev-scene";

const DevCanvas:React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[3, 1, 4]} />
      <DevScene direction="right" scrollRange={[0.75,1]}/>
    </Canvas>
  );
};

export default DevCanvas;
