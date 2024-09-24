import React, { useEffect, useRef, useState } from "react";
import { ComputerDesk } from "../assets/computer-desk";
import { PaperPlane } from "../assets/paper-plane";
import * as THREE from "three";
import gsap from "gsap";
import { RoundedBox, Text3D } from "@react-three/drei";
const HomeScene = () => {
  //   trigger Animation states
  const [paperInAnimation, setPaperInAnimation] = useState(false);
  const [computerOutAnimation, setComputerOutAnimation] = useState(false);
  const [paperFlyAnimation, setPaperFlyAnimation] = useState(false);
  const [paperIdleAnimation, setPaperIdleAnimation] = useState(false);

  // refs
  const planeRef = useRef<THREE.Group>(null);
  const computerRef = useRef<THREE.Group>(null);
  const awsRef = useRef<THREE.Group>(null);
  const dockerRef = useRef<THREE.Group>(null);
  const mongoRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (computerRef.current) {
      const computerTl = gsap.timeline({
        repeat: 0,
        ease: "expo.in",
        onComplete: () => setPaperInAnimation(true),
      });
      computerTl.to(computerRef.current.scale, {
        x: 3,
        y: 3,
        z: 3,
        duration: 0.3,
      });
      computerTl.to(
        computerRef.current.position,
        {
          y: -1.2,
          duration: 0.3,
        },
        "-=1"
      );
    }
  }, []);

  // paper in animation
  useEffect(() => {
    if (paperInAnimation && planeRef.current) {
      planeRef.current.visible = true;
      const planeTl = gsap.timeline({
        delay: 1,
        ease: "expo.in",
        yoyo: true,
        onComplete: () => setComputerOutAnimation(true),
      });
      planeTl.to(planeRef.current.position, {
        y: 4,
        z: 1,
        duration: 1,
      });
    }
  }, [paperInAnimation]);

  // computer out animation
  useEffect(() => {
    if (computerOutAnimation && computerRef.current) {
      gsap.to(computerRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        ease: "expo.out",
        yoyo: true,
        duration: 0.5,
        onComplete: () => setPaperFlyAnimation(true),
      });
    }
  }, [computerOutAnimation]);

  // paper fly animation
  useEffect(() => {
    if (paperFlyAnimation && planeRef.current) {
      planeRef.current.position.set(-5, 2, 0);
      planeRef.current.rotation.set(Math.PI / 3, 0, Math.PI / 2);

      gsap.to(planeRef.current.position, {
        x: 2,
        duration: 3,
        ease: "expo.in",
        yoyo: true,
        onComplete: () => {
          setPaperIdleAnimation(true);
        },
      });

      const blocksTl = gsap.timeline({delay: 2, ease: "expo.in", yoyo: true });
      blocksTl.to(dockerRef.current!.position, {
        y: 0,
        duration: 0.3,
      });
      blocksTl.to(awsRef.current!.position, {
        y: 0,
        delay: 0.1,
        duration: 0.3,
      });
      blocksTl.to(mongoRef.current!.position, {
        y: 0,
        delay: 0.2,
        duration: 0.3,
      });
    }
  }, [paperFlyAnimation]);

  // paper idle animation
  useEffect(() => {
    if (paperIdleAnimation && planeRef.current) {
      const flyTl = gsap.timeline({
        delay: 0.5,
        repeat: -1,
        ease: "expo.inOut",
      });
      flyTl.to(planeRef.current.position, {
        x: Math.random() * 0.01 + 2,
        // z: Math.random() * 0.01 + 2,
      });
      flyTl.to(planeRef.current.position, {
        x: -Math.random() * 0.01 + 2,
        // z: -Math.random() * 0.01 + 2,
      });
    }
  }, [paperIdleAnimation]);

  return (
    <>
      {/* Computer Desk */}
      <group scale={0} ref={computerRef} rotation={[Math.PI / 8, 0, 0]}>
        <ComputerDesk />
      </group>

      {/* Paper plane */}
      <group
        ref={planeRef}
        visible={false}
        scale={0.2}
        rotation={[0, 0, Math.PI]}
        position={[0, -1.2, -2]}
      >
        <PaperPlane />
      </group>

      {/* AWS block */}
      <group ref={awsRef} position={[0, -7, 0]}>
        <RoundedBox
          radius={0.2}
          material={new THREE.MeshPhongMaterial({ color: "orange" })}
        />
        <group position={[-0.34, -0.1, 0.5]}>
          <Text3D
            font={"/helvetiker_regular.typeface.json"}
            material={new THREE.MeshPhongMaterial({ color: "#454545" })}
            size={0.26}
            height={0.05}
          >
            aws
          </Text3D>
        </group>
      </group>

      {/* Docker block */}
      <group ref={dockerRef} position={[-2, -7, -2]}>
        <RoundedBox
          radius={0.2}
          material={new THREE.MeshPhongMaterial({ color: "skyblue" })}
        />
        <group position={[-0.34, -0.1, 0.5]}>
          <Text3D
            font={"/helvetiker_regular.typeface.json"}
            material={new THREE.MeshPhongMaterial({ color: "#454545" })}
            size={0.18}
            height={0.05}
          >
            docker
          </Text3D>
        </group>
      </group>

      {/* Mongo block */}
      <group ref={mongoRef} position={[2, -7, -1]}>
        <RoundedBox
          radius={0.2}
          material={new THREE.MeshPhongMaterial({ color: "lightgreen" })}
        />
        <group position={[-0.36, -0.07, 0.5]}>
          <Text3D
            font={"/helvetiker_regular.typeface.json"}
            material={new THREE.MeshPhongMaterial({ color: "#454545" })}
            size={0.17}
            height={0.05}
          >
            Mongo
          </Text3D>
        </group>
      </group>
    </>
  );
};

export default HomeScene;
