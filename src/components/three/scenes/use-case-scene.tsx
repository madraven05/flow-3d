import React from "react";
import { SuperComputer } from "../assets/super-computer";
import with3DSectionAnimation from "../../hocs/with-3d-section-animation";
import { Html } from "@react-three/drei";

const UseCaseScene = () => {
  return (
    <group scale={4} position={[0, -2, 0]}>
      <SuperComputer />
      <Html position={[-0.3, -1, 0]}>
        <p className="w-full opacity-70 text-xs text-center backdrop-blur-sm uppercase">
          Servers and Processing
        </p>
      </Html>
    </group>
  );
};

export default with3DSectionAnimation(UseCaseScene);
