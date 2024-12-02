import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 z-20 bg-primary flex gap-10 w-full py-3 px-8 font-space-mono text-xl font-semibold uppercase">
      <div className="flex justify-center items-center gap-2">
        <img src="/assets/icon.png" className="w-8 lg:w-10 rounded-md shadow-sm" />
        <h3 className="font-space-mono">Flow3D</h3>
      </div>
    </div>
  );
};

export default Navbar;
