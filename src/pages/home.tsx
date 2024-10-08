import React from "react";
import HeroCanvas from "../components/three/canvas/hero-canvas";
import FeaturesCanvas from "../components/three/canvas/features-canvas";
import HomeSection from "../components/sections/home-section";
import UseCaseCanvas from "../components/three/canvas/use-case-canvas";
import DevCanvas from "../components/three/canvas/dev-canvas";

const Home: React.FC = () => {
  return (
    <div className="">
      {/* Hero section */}
      <HomeSection
      idx={1}
        gradient="bg-gradient-to-r from-slate-900 to-rose-400"
        canvas={<HeroCanvas />}
      >
        <h1 className="text-3xl font-extrabold">Flow3D</h1>
        <p>
          Master System Design with Interactive 3D Architecture Diagrams.
          Visualize complex systems in real-time, explore dynamic animations,
          and deepen your understanding through engaging, hands-on learning
          experiences. Turn abstract concepts into tangible knowledge with
          intuitive visuals.
        </p>
        <div>
          <button className="bg-orange-300/70 p-3 font-space-mono font-semibold rounded-lg">
            Get Started
          </button>
        </div>
      </HomeSection>

      {/* Features */}
      <HomeSection
      idx={2}
        gradient={"bg-gradient-to-r from-slate-900 to-violet-400"}
        canvas={<FeaturesCanvas />}
      >
        <h1 className="text-3xl font-extrabold">Features</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit
          eius vero ea illum voluptate ut quos soluta velit eveniet. Assumenda
          ducimus, maiores iusto dolorem tenetur obcaecati autem ullam illum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit
          eius vero ea illum voluptate ut quos soluta velit eveniet. Assumenda
          ducimus, maiores iusto dolorem tenetur obcaecati autem ullam illum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit
          eius vero ea illum voluptate ut quos soluta velit eveniet. Assumenda
          ducimus, maiores iusto dolorem tenetur obcaecati autem ullam illum.
        </p>
      </HomeSection>

      {/* Use cases */}
      <HomeSection
      idx={3}
        gradient="bg-gradient-to-r from-gray-900 to-teal-400"
        canvas={<UseCaseCanvas />}
      >
        <h1 className="text-3xl font-extrabold">Use cases</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
        </div>
      </HomeSection>

      {/* Dev */}
      <HomeSection
      idx={4}
        gradient="bg-gradient-to-r from-slate-900 to-cyan-400"
        canvas={<DevCanvas />}
      >
        <h1 className="text-3xl font-extrabold">Contributing</h1>
        <p>
          Master System Design with Interactive 3D Architecture Diagrams.
          Visualize complex systems in real-time, explore dynamic animations,
          and deepen your understanding through engaging, hands-on learning
          experiences. Turn abstract concepts into tangible knowledge with
          intuitive visuals.
        </p>
        <div>
          <button className="bg-orange-300/70 p-3 font-space-mono font-semibold rounded-lg">
            Get Started
          </button>
        </div>
      </HomeSection>
    </div>
  );
};

export default Home;
