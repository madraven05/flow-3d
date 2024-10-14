import React from "react";
import HeroMobileScene from "./hero-mobile-scene";
import { HeroMobile } from "../../assets/hero-mobile";
import { Chat } from "../../assets/chat";
import { Like } from "../../assets/like";
import { Love } from "../../assets/love";
import { Folder } from "../../assets/folder";
import { Cloud } from "../../assets/cloud";
import { Aws } from "../../assets/aws";
import { Google } from "../../assets/google";
import { Azure } from "../../assets/azure";
import { Database } from "../../assets/database";
import { MySQL } from "../../assets/mysql";
import { Mongo } from "../../assets/mongo";

import { motion } from "framer-motion-3d";

const FinalScene: React.FC<{ showScene: boolean }> = ({ showScene }) => {
  if (!showScene) {
    return null;
  } else
    return (
      <motion.group
        initial={{ scale: 0 }}
        animate={{ scale:  1 }}
        transition={{
            bounce: true,
        }}
      >
        <group scale={0.4} position={[0, -3, 0]}>
          <group
            scale={20}
            position={[0, -15, 0]}
            rotation={[Math.PI / 7, 0, 0]}
          >
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

        <group scale={0.5} position={[10, 3, 0]}>
          <group scale={1}>
            <Database />
          </group>
          <group scale={1} position={[-2.5, 3, 0]}>
            <MySQL />
          </group>
          <group position={[2.5, 3, 0]} scale={1}>
            <Mongo />
          </group>
        </group>
      </motion.group>
    );
};

export default FinalScene;
