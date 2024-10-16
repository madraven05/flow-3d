import { Suspense, useEffect, useRef } from "react";
import { HeroMobile } from "../../assets/hero-mobile";
import { Chat } from "../../assets/chat";
import { Like } from "../../assets/like";
import { Love } from "../../assets/love";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import gsap from "gsap";
import with3DSectionAnimation from "../../../hocs/with-3d-section-animation";

export interface AnimatedSceneProps {
  triggerAnimation: boolean;
  setNextAnimationTrigger?: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroMobileScene: React.FC<AnimatedSceneProps> = ({
  triggerAnimation,
  setNextAnimationTrigger,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const mobileRef = useRef<THREE.Group>(null);
  const chatRef = useRef<THREE.Group>(null);
  const likeRef = useRef<THREE.Group>(null);
  const loveRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (
      triggerAnimation &&
      mobileRef.current &&
      chatRef.current &&
      likeRef.current &&
      loveRef.current
    ) {
      const tl = gsap.timeline({
        repeat: 0,
        yoyo: true,
        ease: "expo.inOut",
        onComplete: () => {
          setNextAnimationTrigger!(true);
        },
      });

      tl.to(mobileRef.current!.scale, {
        x: 15,
        y: 15,
        z: 15,
        delay: 0.5,
        duration: 0.5,
      });

      // Chat animations
      tl.to(chatRef.current!.scale, {
        x: 1,
        y: 1,
        z: 1,
      });

      tl.to(
        chatRef.current!.position,
        {
          x: 3,
          y: 12,
        },
        "<"
      );

      // Like animations
      tl.to(
        likeRef.current!.scale,
        {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          delay: 0.25,
        },
        "<"
      );

      tl.to(
        likeRef.current!.position,
        {
          x: -4,
          y: 12,
        },
        "<"
      );

      // Love animations
      tl.to(
        loveRef.current!.scale,
        {
          x: 1.5,
          y: 1.5,
          z: 1.5,
          delay: 0.25,
        },
        "<"
      );

      tl.to(
        loveRef.current!.position,
        {
          y: 18,
        },
        "<"
      );

      // Exit animation
      tl.to(groupRef.current!.scale, {
        x: 0,
        y: 0,
        z: 0,
        delay: 0.5,
      });
    }
  }, [
    triggerAnimation,
    chatRef.current,
    mobileRef.current,
    likeRef.current,
    loveRef.current,
  ]);

  return (
    <group
      ref={groupRef}
      rotation={[Math.PI / 8, 0, 0]}
      scale={0.75}
      position={[0, -8, 0]}
    >
      <Suspense fallback={null}>
        {/* Mobile, scale: 15 */}
        <group ref={mobileRef} rotation={[-Math.PI / 7, 0, 0]}>
          <HeroMobile />
        </group>

        {/* Chat icon,  x: 3, y: 12, scale: 1*/}
        <group position={[0, 0, 0]} scale={0} ref={chatRef}>
          <Chat />
        </group>

        {/* Like Icon, x: -4, y: 12, scale: 1.5 */}
        <group ref={likeRef} scale={0} position={[0, 0, 0]}>
          <Like />
        </group>

        {/* Love icon, y: 18, scale: 1.5 */}
        <group scale={0} position={[0, 0, 0]} ref={loveRef} key={"love"}>
          <Love />
        </group>
      </Suspense>
    </group>
  );
};

const MobileStatic:React.FC = () => {
  return (
    <group scale={0.4} position={[0, -3, 0]}>
      <group scale={20} position={[0, -15, 0]} rotation={[Math.PI / 7, 0, 0]}>
        <HeroMobile />
      </group>

      <group position={[3, 0, 0]} scale={1}>
        <Chat />
      </group>

      <group scale={1.5} position={[-4, 0, 0]}>
        <Like />
      </group>

      <group scale={1.5} position={[-1, 6, 0]} key={"love"}>
        <Love />
      </group>
    </group>
  );
};

export const MobileStaticScene = with3DSectionAnimation(MobileStatic);
export default HeroMobileScene;
