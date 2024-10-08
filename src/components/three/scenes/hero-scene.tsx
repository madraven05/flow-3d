import { Suspense } from "react";
import with3DSectionAnimation from "../../hocs/with-3d-section-animation";
import { RetroComputer } from "../assets/retro-computer";
import { RetroPhone } from "../assets/retro-phone";
import { Html } from "@react-three/drei";

const HeroScene = () => {
  return (
    <group scale={0.5}>
      <Suspense fallback={null}>
        <RetroComputer />
        <RetroPhone />
      </Suspense>
      <Html position={[0, -7, 0]}>
        <p className="text-xs opacity-70 text-center hidden lg:flex uppercase">user Interface</p>
      </Html>
    </group>
  );
};

export default with3DSectionAnimation(HeroScene);
