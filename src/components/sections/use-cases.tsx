import { Canvas } from "@react-three/fiber";
import React from "react";
import HeroScene from "../three/scenes/hero-scene";
import FeaturesScene from "../three/scenes/features-scene";
import UseCaseScene from "../three/scenes/use-case-scene";

const UseCases: React.FC = () => {
  return (
    <section className="bg-gradient-to-r w-full from-gray-900 to-teal-400 min-h-screen text-white flex flex-wrap-reverse lg:flex-wrap justify-center items-center">
      {/* R3F Canvas */}
      <div className="w-full h-72 lg:w-1/2 lg:h-96">
        <Canvas camera={{ position: [0, 0, 20] }} shadows>
          <ambientLight intensity={1} />
          <directionalLight intensity={5} position={[3, 1, 4]} />
          <UseCaseScene />
        </Canvas>
      </div>

      {/* Text */}
      <div className="flex flex-col bg-200 gap-6 lg:w-1/2 lg:h-1/2 w-full p-14 rounded-tl-3xl rounded-bl-3xl bg-rose-200/10 backdrop-blur-md justify-center items-start">
        <h1 className="text-5xl font-extrabold">Use cases</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
            <div className="h-48 w-64 bg-white rounded-lg shadow-md"/>
            <div className="h-48 w-64 bg-white rounded-lg shadow-md"/>
            <div className="h-48 w-64 bg-white rounded-lg shadow-md"/>
            <div className="h-48 w-64 bg-white rounded-lg shadow-md"/>

        </div>
      </div>
    </section>
  );
};

export default UseCases;
