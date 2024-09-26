import { Box, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { MeshPhongMaterial } from "three";
import { color } from "three/webgpu";
import AwsBlock from "../components/aws-block";
import { ComputerDesk } from "../components/three/assets/computer-desk";
import HomeScene from "../components/three/scenes/home-scene";

const Home = () => {
  return (
    <div className="mt-14 bg-orange-100 p-5 h-screen flex flex-wrap justify-center items-center">
      {/* R3F Canvas */}
      <div className=" h-1/2 lg:h-full lg:w-1/2">
        <Canvas shadows>
          <ambientLight intensity={1} />
          <directionalLight intensity={5} position={[3, 1, 4]} />
          <HomeScene />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-5 lg:w-1/2 p-10">
        <h1 className="text-5xl font-extrabold">3D System Design</h1>
        <p>
          Master System Design with Interactive 3D Architecture Diagrams.
          Visualize complex systems in real-time, explore dynamic animations,
          and deepen your understanding through engaging, hands-on learning
          experiences. Turn abstract concepts into tangible knowledge with
          intuitive visuals.
        </p>
      </div>
    </div>
  );
};

export default Home;
