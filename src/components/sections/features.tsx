import { Canvas } from "@react-three/fiber";
import React from "react";
import HeroScene from "../three/scenes/hero-scene";
import FeaturesScene from "../three/scenes/features-scene";

const Features: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-violet-400 min-h-screen text-white flex flex-wrap-reverse lg:flex-wrap justify-center items-center">
      {/* R3F Canvas */}
      <div className="w-full h-72 lg:w-1/2 lg:h-96">
        <Canvas camera={{ position: [0, 0, 20] }} shadows>
          <ambientLight intensity={1} />
          <directionalLight intensity={5} position={[3, 1, 4]} />
          <FeaturesScene />
        </Canvas>
      </div>

      {/* Text */}
      <div className="flex flex-col bg-200 gap-5 lg:w-1/2 lg:h-1/2 w-full p-14 rounded-tl-3xl rounded-bl-3xl bg-rose-200/10 backdrop-blur-md justify-center items-start">
        <h1 className="text-5xl font-extrabold">Features</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit
          eius vero ea illum voluptate ut quos soluta velit eveniet. Assumenda
          ducimus, maiores iusto dolorem tenetur obcaecati autem ullam illum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit
          eius vero ea illum voluptate ut quos soluta velit eveniet. Assumenda
          ducimus, maiores iusto dolorem tenetur obcaecati autem ullam illum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit
          eius vero ea illum voluptate ut quos soluta velit eveniet. Assumenda
          ducimus, maiores iusto dolorem tenetur obcaecati autem ullam illum.
        </p>
        <div></div>
      </div>
    </section>
  );
};

export default Features;
