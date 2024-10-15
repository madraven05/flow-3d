import React, { useEffect, useRef } from "react";
import { AnimatedSceneProps } from "./hero-mobile-scene";
import { Cloud } from "../../assets/cloud";
import gsap from "gsap";
import * as THREE from "three";
import { Aws } from "../../assets/aws";
import { Google } from "../../assets/google";
import { Azure } from "../../assets/azure";
import with3DSectionAnimation from "../../../hocs/with-3d-section-animation";

const ServerScene: React.FC<AnimatedSceneProps> = ({
  triggerAnimation,
  setNextAnimationTrigger,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const cloudRef = useRef<THREE.Group>(null);
  const awsRef = useRef<THREE.Group>(null);
  const googleRef = useRef<THREE.Group>(null);
  const azureRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (triggerAnimation) {
      const tl = gsap.timeline({
        repeat: 0,
        yoyo: true,
        ease: "expo.inOut",
        onComplete: () => setNextAnimationTrigger!(true),
      });
      tl.to(groupRef.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
      });

      // aws animations
      tl.to(awsRef.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
      });

      tl.to(
        awsRef.current!.position,
        {
          y: 4,
          x: -6,
        },
        "<"
      );

      // google animations
      tl.to(
        googleRef.current!.scale,
        {
          x: 1,
          y: 1,
          z: 1,
          delay: 0.1,
        },
        "<"
      );

      tl.to(
        googleRef.current!.position,
        {
          y: 6,
          x: 0,
        },
        "<"
      );

      // azure animation
      tl.to(
        azureRef.current!.scale,
        {
          x: 1,
          y: 1,
          z: 1,
          delay: 0.2,
        },
        "<"
      );

      tl.to(
        azureRef.current!.position,
        {
          y: 4.4,
          x: 6,
        },
        "<"
      );

      // exit animation
      tl.to(groupRef.current!.scale, {
        x: 0,
        y: 0,
        z: 0,
        delay: 0.5,
      });
    }
  }, [triggerAnimation]);

  return (
    <group ref={groupRef} scale={0}>
      <group ref={cloudRef}>
        <Cloud />
      </group>
      <group scale={0} ref={awsRef}>
        <Aws />
      </group>
      <group scale={0} ref={googleRef}>
        <Google />
      </group>
      <group scale={0} ref={azureRef}>
        <Azure />
      </group>
    </group>
  );
};

const ServerStatic: React.FC = () => {
  return (
    <group scale={0.5} position={[0, 8, 0]}>
      <group>
        <Cloud />
      </group>
      <group position={[-5, 2.5, 0]} scale={1}>
        <Aws />
      </group>
      <group position={[0, 5, 0]} scale={1}>
        <Google />
      </group>
      <group position={[5, 2.5, 0]} scale={1}>
        <Azure />
      </group>
    </group>
  );
};

export const ServerStaticScene = with3DSectionAnimation(ServerStatic);
export default ServerScene;
