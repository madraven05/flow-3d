import { Canvas } from "@react-three/fiber";
import UseCaseScene from "../scenes/use-case-scene";

const UseCaseCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} position={[3, 1, 4]} />
      <UseCaseScene direction="left" scrollRange={[0.50,0.75]}/>
    </Canvas>
  );
};

export default UseCaseCanvas;
