import React from "react";
import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import UseCases from "../components/sections/use-cases";
import Dev from "../components/sections/dev";

const Home:React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Features/>
      <UseCases/>
      <Dev/>
    </div>
  );
};

export default Home;
