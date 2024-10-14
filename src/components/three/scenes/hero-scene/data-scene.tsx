import React, { useEffect, useRef } from "react";
import { AnimatedSceneProps } from "./hero-mobile-scene";
import { Database } from "../../assets/database";
import * as THREE from "three";
import gsap from "gsap";
import { MySQL } from "../../assets/mysql";
import { Mongo } from "../../assets/mongo";

const DataScene: React.FC<AnimatedSceneProps> = ({
  triggerAnimation,
  setNextAnimationTrigger,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const dbRef = useRef<THREE.Group>(null);
  const sqlRef = useRef<THREE.Group>(null);
  const mongoRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (triggerAnimation) {
      const tl = gsap.timeline({ repeat: 0, yoyo: true, ease: "expo.inOut", onComplete: () => setNextAnimationTrigger!(true) });

      tl.to(dbRef.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
      });

      tl.to(sqlRef.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
      })

      tl.to(sqlRef.current!.position, {
        y: 5,
        x: -3
      }, "<")

      tl.to(mongoRef.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
        delay: 0.2
      }, "<")

      tl.to(mongoRef.current!.position, {
        y: 5,
        x: 3
      }, "<")

      tl.to(groupRef.current!.scale, {
        x: 0,
        y: 0,
        z: 0,
        delay: 0.5
      })
    }
  }, [triggerAnimation]);

  return (
    <group ref={groupRef}>
      <group scale={0} ref={dbRef}>
        <Database />
      </group>
      <group scale={0} ref={sqlRef}>
        <MySQL />
      </group>
      <group scale={0} ref={mongoRef}>
        <Mongo />
      </group>
    </group>
  );
};

export default DataScene;
