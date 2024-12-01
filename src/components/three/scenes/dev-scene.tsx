import with3DSectionAnimation from "../../hocs/with-3d-section-animation";
import { Html } from "@react-three/drei";

const DevScene = () => {
  return (
    <group position={[-4, 0, 0]} scale={0.65}>
      <Html position={[6, -12, 0]}>
        <p className="w-full opacity-70 text-xs text-center backdrop-blur-sm bg-clip-text uppercase">Memory Units</p>
      </Html>
    </group>
  );
};

export default with3DSectionAnimation(DevScene);
