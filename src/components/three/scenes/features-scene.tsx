import with3DSectionAnimation from "../../hocs/with-3d-section-animation";
import { Html } from "@react-three/drei";

const FeaturesScene = () => {
  return (
    <group scale={0.55}>
      <Html position={[0, -7, 0]}>
        <p className="w-full opacity-70 text-xs text-center backdrop-blur-sm uppercase">Modems and Routers</p>
      </Html>
    </group>
  );
};

export default with3DSectionAnimation(FeaturesScene);
