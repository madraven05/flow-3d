import {
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion-3d";
import { GroupProps, ThreeEvent } from "@react-three/fiber";

interface with3DSectionAnimationProps {}

const with3DSectionAnimation = <P extends object>(
  Model: React.ComponentType<P>
) => {
  return ({ ...props }: P & with3DSectionAnimationProps) => {
    const { scrollYProgress } = useScroll();

    const ref = useRef<GroupProps>(null);

    const mouseX: MotionValue<number> = useMotionValue(0);
    const mouseY: MotionValue<number> = useMotionValue(0);

    const rotateX = useTransform(
      mouseY,
      [-1, 1],
      [Math.PI / 16, -Math.PI / 16]
    );
    const rotateY = useTransform(
      mouseX,
      [-1, 1],
      [-Math.PI / 16, Math.PI / 16]
    );

    const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Normalize mouse position to range [-1, 1]
      mouseX.set((clientX / width) * 2 - 1);
      mouseY.set((clientY / height) * 2 - 1);
    };

    return (
      <motion.group
        ref={ref}
        rotation-x={rotateX} // Rotate based on mouse movement
        rotation-y={rotateY}
        whileHover={{ scale: 1.1 }}
        onPointerMove={handlePointerMove}
      >
        <Model {...(props as P)} />
      </motion.group>
    );
  };
};

export default with3DSectionAnimation;
