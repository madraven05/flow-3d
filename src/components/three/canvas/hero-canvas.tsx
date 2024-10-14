import { Canvas } from "@react-three/fiber";
import HeroMobileScene from "../scenes/hero-scene/hero-mobile-scene";
import { useEffect, useState } from "react";
import FolderQueueScene from "../scenes/hero-scene/folder-queue-scene";
import ServerScene from "../scenes/hero-scene/server-scene";
import DataScene from "../scenes/hero-scene/data-scene";
import FinalScene from "../scenes/hero-scene/final-scene";

const HeroCanvas = () => {

  // Animation states
  const [triggerMobileAnimation, setTriggerMobileAnimation] = useState(false);
  const [triggerQueueAnimation, setTriggerQueueAnimation] = useState(false);
  const [triggerServerAnimation, setTriggerServerAnimation] = useState(false);
  const [triggerDataAnimation, setTriggerDataAnimation] = useState(false);
  
  const [showCover, setShowCover] = useState(false);
 
  useEffect(() => {
    setTriggerMobileAnimation(true);
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadows>
      <ambientLight intensity={2} />
      <directionalLight intensity={4} position={[3, 1, 4]} />
      <HeroMobileScene triggerAnimation={triggerMobileAnimation} setNextAnimationTrigger={setTriggerQueueAnimation}/>
      <FolderQueueScene triggerAnimation={triggerQueueAnimation} setNextAnimationTrigger={setTriggerServerAnimation}/>
      <ServerScene triggerAnimation={triggerServerAnimation} setNextAnimationTrigger={setTriggerDataAnimation}/>
      <DataScene triggerAnimation={triggerDataAnimation} setNextAnimationTrigger={setShowCover}/>

      <FinalScene showScene={showCover}/>
    </Canvas>
  );
};

export default HeroCanvas;
