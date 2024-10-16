import React, { useEffect, useRef } from "react";
import { AnimatedSceneProps } from "./hero-mobile-scene";
import { Folder } from "../../assets/folder";
import * as THREE from "three";
import gsap from "gsap";
import with3DSectionAnimation from "../../../hocs/with-3d-section-animation";

const FolderQueueScene: React.FC<AnimatedSceneProps> = ({
  triggerAnimation,
  setNextAnimationTrigger,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const folder1Ref = useRef<THREE.Group>(null);
  const folder2Ref = useRef<THREE.Group>(null);
  const folder3Ref = useRef<THREE.Group>(null);
  const folder4Ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (triggerAnimation) {
      const tl = gsap.timeline({
        repeat: 0,
        yoyo: true,
        ease: "expo.inOut",
        onComplete: () => {
          setNextAnimationTrigger!(true);
        },
      });

      // folder 1
      tl.to(folder1Ref.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
      });

      tl.to(folder1Ref.current!.position, {
        y: 0,
      });

      tl.to(folder1Ref.current!.position, {
        x: -6,
      });

      // folder 2
      tl.to(
        folder2Ref.current!.scale,
        {
          x: 1,
          y: 1,
          z: 1,
        },
        "<"
      );

      tl.to(folder2Ref.current!.position, {
        y: 0,
      });

      tl.to(folder1Ref.current!.position, {
        x: -8,
      });

      tl.to(
        folder2Ref.current!.position,
        {
          x: -4,
        },
        "<"
      );

      // folder 3
      tl.to(
        folder3Ref.current!.scale,
        {
          x: 1,
          y: 1,
          z: 1,
        },
        "<"
      );

      tl.to(folder3Ref.current!.position, {
        y: 0,
      });

      tl.to(folder1Ref.current!.position, {
        x: -12,
      });

      tl.to(
        folder2Ref.current!.position,
        {
          x: -8,
        },
        "<"
      );

      tl.to(
        folder3Ref.current!.position,
        {
          x: -4,
        },
        "<"
      );

      // folder 4
      tl.to(
        folder4Ref.current!.scale,
        {
          x: 1,
          y: 1,
          z: 1,
        },
        "<"
      );

      tl.to(folder4Ref.current!.position, {
        y: 0,
      });

      // exit animation
      tl.to(groupRef.current!.position, {
        x: 40,
        duration: 1,
      });
    }
  }, [triggerAnimation]);

  return (
    <group ref={groupRef}>
      <group scale={0} position={[0, -4, 0]} ref={folder1Ref}>
        <Folder />
      </group>
      <group scale={0} position={[0, -4, 0]} ref={folder2Ref}>
        <Folder />
      </group>
      <group scale={0} position={[0, -4, 0]} ref={folder3Ref}>
        <Folder />
      </group>
      <group scale={0} position={[0, -4, 0]} ref={folder4Ref}>
        <Folder />
      </group>
    </group>
  );
};

const FolderQueueStatic: React.FC = () => {
  return (
    <group scale={0.4} position={[-10, 3, 0]}>
      <group scale={1} position={[0, 0, 0]}>
        <Folder />
      </group>
      <group scale={1} position={[-10, 0, 0]}>
        <Folder />
      </group>
      <group scale={1} position={[-5, 0, 0]}>
        <Folder />
      </group>
      <group scale={1} position={[5, 0, 0]}>
        <Folder />
      </group>
    </group>
  );
};

export const FolderQueueStaticScene = with3DSectionAnimation(FolderQueueStatic);
export default FolderQueueScene;
