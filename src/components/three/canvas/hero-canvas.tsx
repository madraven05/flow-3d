import { Canvas } from "@react-three/fiber";
import HeroScene from "../scenes/hero-scene";

const HeroCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[3, 1, 4]} />
      <HeroScene />
    </Canvas>
  );
};

export default HeroCanvas;
