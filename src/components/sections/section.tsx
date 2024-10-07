import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";
import HeroScene from "../three/scenes/hero-scene";

interface HomeSectionProps {
  canvas: ReactNode;
  children: ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({ canvas, children }) => {
  return (
    <section className="bg-gradient-to-r w-full from-slate-900 to-rose-400 min-h-screen text-white flex flex-wrap-reverse justify-between items-center">
      {/* R3F Canvas */}
      <div className="w-full lg:w-1/2 h-72 lg:h-96">{canvas}</div>

      {/* Text */}
      <div className="flex flex-col bg-200 gap-5 lg:w-1/2 h-96 w-full p-14 rounded-tl-3xl rounded-bl-3xl bg-rose-200/10 backdrop-blur-md justify-center items-start">
        {children}
      </div>
    </section>
  );
};

export default HomeSection;
