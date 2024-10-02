import React, { useContext, useState } from "react";
import MenuManager from "../components/menu-manager";
import TopMenuTray from "../components/top-menu-tray";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import {
  ComponentKey,
  componentsDict,
} from "../components/three/components-dir";
import EditComponentMenu from "../components/edit-component-menu";
import { useFlow3D } from "../components/hooks/use-flow3d";
import GridPlane from "../components/three/assets/grid-plane";
import ModeIcon from "../components/common/mode-icon";
import { ViewContext } from "../components/context/view-context";
import ShortcutManager from "../components/shortcut-manager";

const Flow3D: React.FC = () => {
  const { scene, nodes } = useFlow3D();
  const viewContext = useContext(ViewContext);

  const [openMenuManager, setOpenMenuManager] = useState(false);

  return (
    <div className="mt-10 pt-5 min-h-screen w-full flex gap-2">
      {/* Components */}
      <TopMenuTray />
      <MenuManager openMenu={openMenuManager} setOpenMenu={setOpenMenuManager}/>
      <EditComponentMenu />
      <ModeIcon />
      <ShortcutManager openMenuManager={openMenuManager} setOpenMenuManager={setOpenMenuManager}/>

      {/* Canvas */}
      <div className="-z-5 w-full shadow-md">
        {scene.metadata.id ? (
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
            <GridPlane
              receiveShadow
              position={[0, -0.5, 0]}
              args={[25, 25]}
              rotation={[-Math.PI / 2, 0, 0]}
            />

            {nodes.map((nodeProps) => {
              const componentId = nodeProps.componentId;
              const SceneNode = componentsDict[componentId as ComponentKey];
              return <SceneNode {...nodeProps} />;
            })}
            {viewContext?.currEditMode !== "move" ? <OrbitControls /> : null}
          </Canvas>
        ) : null}
      </div>
    </div>
  );
};

export default Flow3D;
