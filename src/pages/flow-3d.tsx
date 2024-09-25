import React from "react";
import MenuManager from "../components/menu-manager";
import TopMenuTray from "../components/top-menu-tray";
import { useAppSelector } from "../components/hooks/use-app-dispatch";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Plane } from "@react-three/drei";

const Flow3D = () => {
  const sceneData = useAppSelector((state) => state.scene);

  return (
    <div className="mt-10 pt-5 min-h-screen w-full flex gap-2">
      <TopMenuTray />
      <MenuManager />
      <div className="z-0 w-full shadow-md">
        {sceneData.metadata.id ? (
          <Canvas>
            <Box/>
            <OrbitControls/>
          </Canvas>
        ) : null}
      </div>
    </div>
  );
};

export default Flow3D;
