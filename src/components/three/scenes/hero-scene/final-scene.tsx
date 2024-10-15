import React from "react";
import { MobileStaticScene } from "./hero-mobile-scene";
import { motion } from "framer-motion-3d";
import { FolderQueueStaticScene } from "./folder-queue-scene";
import { ServerStaticScene } from "./server-scene";
import { DataStaticScene } from "./data-scene";

const FinalScene: React.FC<{ showScene: boolean }> = ({ showScene }) => {
  if (!showScene) {
    return null;
  } else
    return (
      <motion.group
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          bounce: true,
        }}
      >
        <MobileStaticScene />
        <FolderQueueStaticScene />
        <ServerStaticScene />
        <DataStaticScene />
      </motion.group>
    );
};

export default FinalScene;
