import React from "react";
import MenuManager from "../components/menu-manager";
import TopMenuTray from "../components/top-menu-tray";
import { useAppSelector } from "../components/hooks/use-app-dispatch";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, Plane } from "@react-three/drei";
import {
  ComponentKey,
  componentsDict,
} from "../components/three/components-dir";
import { MeshPhongMaterial } from "three";
import EditComponentMenu from "../components/edit-component-menu";

const Flow3D: React.FC = () => {
  const sceneData = useAppSelector((state) => state.scene);

  return (
    <div className="mt-10 pt-5 min-h-screen w-full flex gap-2">
      <TopMenuTray />
      <MenuManager />
      <EditComponentMenu />
      <div className="z-0 w-full shadow-md">
        {sceneData.metadata.id ? (
          <Canvas shadows>
            <OrthographicCamera
              makeDefault
              position={[10, 10, 10]}
              zoom={50}
              near={0.1}
              far={1000}
            />
            <ambientLight />
            <directionalLight position={[-10, 10, 10]} />
            <Plane
              material={new MeshPhongMaterial({ color: "white" })}
              receiveShadow
              position={[0, -0.5, 0]}
              args={[20, 25]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {sceneData.nodes.map((node) => {
              const componentId = node.componentId;
              const SceneNode = componentsDict[componentId as ComponentKey];
              return (
                <SceneNode
                  componentId={node.componentId}
                  guuid={node.guuid}
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
