import React from "react";
import HeroCanvas from "../components/three/canvas/hero-canvas";
import HomeSection from "../components/sections/home-section";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <HomeSection
        idx={1}
        gradient="bg-gradient-to-br from-50% from-orange-200/50 to-orange-400/50"
        canvas={<HeroCanvas />}
      >
        <div className="w-full items-center justify-center flex absolute -z-10 right-1/2 lg:right-20">
          <div
            className="h-52 w-52 lg:h-80 lg:w-80 animate-blob relative left-52 blur-2xl mix-blend-multiply rounded-full bg-yellow-light"
          />
          <div
            className="h-44 w-44 lg:h-64 lg:w-64 animation-delay-2000 animate-blob relative left-20 blur-2xl mix-blend-multiply bottom-20 rounded-full bg-green-light"
          />
          <div
            className="h-6 lg:h-72 lg:w-72 animation-delay-4000 animate-blob relative top-20 right-20 blur-2xl mix-blend-multiply rounded-full bg-green-dark/50"
          />
        </div>
        <h1 className="text-5xl text-gray-600 font-extrabold">
          Flow<span className="text-green-light">3D</span>
        </h1>
        <p>
          Design 3D Cloud Architecture Effortlessly. Create, visualize, and
          customize interactive cloud architecture diagrams in 3D. Build your
          infrastructure with ease, all in one place.
        </p>
        <div className="mt-3">
          <Link
            to={"/flow-3d"}
            className="bg-yellow-light text-sm p-3 shadow-md hover:border-2 hover:border-green-dark focus:shadow-inner transition duration-200 ease-in-out font-space-mono rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </HomeSection>
    </div>
  );
};

export default Home;
