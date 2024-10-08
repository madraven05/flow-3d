import { Canvas } from "@react-three/fiber";
import React from "react";
import UseCaseScene from "../scenes/use-case-scene";

const UseCaseCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[3, 1, 4]} />
      <UseCaseScene />
    </Canvas>
  );
};

export default UseCaseCanvas;
