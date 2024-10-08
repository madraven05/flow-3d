import { Canvas } from "@react-three/fiber";
import React from "react";
import FeaturesScene from "../scenes/features-scene";

const FeaturesCanvas:React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[3, 1, 4]} />
      <FeaturesScene />
    </Canvas>
  );
};

export default FeaturesCanvas;
