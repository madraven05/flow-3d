import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HomeSectionProps {
  idx?: number;
  gradient: string;
  canvas: ReactNode;
  children: ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  idx = 0,
  canvas,
  gradient,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isContentInView = useInView(contentRef, { amount: 0.5 });

  return (
    <motion.div
      ref={sectionRef}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`sticky top-0 w-full ${gradient} overflow-x-hidden min-h-screen text-white lg:flex lg:flex-wrap-reverse justify-between items-center`}
    >
      {/* R3F Canvas */}
      <div className="w-full absolute lg:static lg:w-1/2 lg:h-screen">{canvas}</div>

      {/* Text */}
      <motion.div
        ref={contentRef}
        className={`${isContentInView ? 'opacity-100 scale-100': 'opacity-0 scale-0'} ease-in-out transition duration-1000 transform  flex flex-col bg-200 gap-5 lg:w-1/2 lg:h-2/3 h-screen w-full p-14 lg:rounded-tl-3xl lg:rounded-bl-3xl bg-rose-200/10 backdrop-blur-md lg:backdrop-blur-md justify-center items-start`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
