import React from "react";
import HeroCanvas from "../components/three/canvas/hero-canvas";
import FeaturesCanvas from "../components/three/canvas/features-canvas";
import HomeSection from "../components/sections/home-section";
import UseCaseCanvas from "../components/three/canvas/use-case-canvas";
import DevCanvas from "../components/three/canvas/dev-canvas";
import FeatureBullet from "../components/common/feature-bullet";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // const features = [
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit eius vero ea illum voluptate ut quos soluta velit eveniet",
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit eius vero ea illum voluptate ut quos soluta velit eveniet",
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit eius vero ea illum voluptate ut quos soluta velit eveniet",
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit eius vero ea illum voluptate ut quos soluta velit eveniet",
  // ];
  return (
    <div className="flex flex-col text-gray-700">
      {/* Hero section */}
      <HomeSection
        idx={1}
        gradient="bg-gradient-to-br from-50% from-orange-200/50 to-orange-400/50"
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
          <Link to={"/flow-3d"} className="bg-orange-300/70 p-3 shadow-md hover:-translate-y-0.5 focus:shadow-inner transition duration-200 ease-in-out font-space-mono font-semibold rounded-lg">
            Get Started
          </Link>
        </div>
      </HomeSection>

      {/* Features */}
      {/* <HomeSection
        direction="left"
        idx={2}
        gradient={"bg-gradient-to-tr from-50% from-orange-200/50 to-orange-400/50"}
        canvas={<FeaturesCanvas />}
      >
        <h1 className="text-3xl font-extrabold">Features</h1>
        {features.map((feature, idx) => (
          <FeatureBullet idx={idx + 1} feature={feature} />
        ))}
      </HomeSection> */}

      {/* Use cases */}
      {/* <HomeSection
        idx={3}
        gradient="bg-gradient-to-br from-50%  to-orange-400/50"
        canvas={<UseCaseCanvas />}
      >
        <h1 className="text-3xl font-extrabold">Use cases</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
          <div className="h-48 w-64 bg-white rounded-lg shadow-md" />
        </div>
      </HomeSection> */}

      {/* Dev */}
      {/* <HomeSection
        direction="left"
        idx={4}
        gradient="bg-gradient-to-tr from-50% from-orange-200/50 to-orange-400/50"
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
      </HomeSection> */}
    </div>
  );
};

export default Home;
