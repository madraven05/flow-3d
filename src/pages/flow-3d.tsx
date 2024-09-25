import React from "react";
import MenuManager from "../components/menu-manager";
import TopMenuTray from "../components/top-menu-tray";
import { useAppSelector } from "../components/hooks/use-app-dispatch";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  ComponentKey,
  componentsDict,
} from "../components/three/components-dir";

const Flow3D:React.FC = () => {
  const sceneData = useAppSelector((state) => state.scene);

  return (
    <div className="mt-10 pt-5 min-h-screen w-full flex gap-2">
      <TopMenuTray />
      <MenuManager />
      <div className="z-0 w-full shadow-md">
        {sceneData.metadata.id ? (
          <Canvas>
            <ambientLight />
            <directionalLight position={[1, 1, 1]} />
            {sceneData.nodes.map((node) => {
              const componentId = node.componentId;
              const SceneNode = componentsDict[componentId as ComponentKey];
              return (
                <SceneNode
                  position={node.position}
                  color={node.color}
                  rotation={node.rotation}
                  scale={node.scale}
                />
              );
            })}
            <OrbitControls />
          </Canvas>
        ) : null}
      </div>
    </div>
  );
};

export default Flow3D;
