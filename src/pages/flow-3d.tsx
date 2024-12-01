import React, { useContext, useRef, useState } from "react";
import MenuManager from "../components/menu-manager";
import TopMenuTray from "../components/top-menu-tray";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import {
  edgeIdToFCDict,
  EdgeIdToFCDictKeys,
  nodeIdToFCDict,
  NodeIdToFCDictKeys,
} from "../components/three/components-dir";
import EditComponentMenu from "../components/edit-component-menu";
import { useFlow3D } from "../components/hooks/use-flow3d";
import GridPlane from "../components/three/assets/grid-plane";
import ModeIcon from "../components/common/mode-icon";
import { ViewContext } from "../components/context/view-context";
import ShortcutManager from "../components/shortcut-manager";
import VPC from "../components/three/nodes/aws/vpc";
import AwsIGW from "../components/three/nodes/aws/igw";
import LaserPointer from "../components/laser-pointer";
import BoundaryBox from "../components/boundary-box";
import CursorToCanvasPos from "../components/cursor-to-canvas-pos";

const Flow3D: React.FC = () => {
  const { scene, nodes, edges } = useFlow3D();
  const viewContext = useContext(ViewContext);

  const [openMenuManager, setOpenMenuManager] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-10 pt-5 min-h-screen w-full flex gap-2">
      {/* Components */}
      <TopMenuTray canvasRef={canvasRef} />
      <MenuManager
        openMenu={openMenuManager}
        setOpenMenu={setOpenMenuManager}
      />
      <EditComponentMenu />
      <ModeIcon />
      <ShortcutManager
        openMenuManager={openMenuManager}
        setOpenMenuManager={setOpenMenuManager}
      />

      {/* Canvas */}
      <div ref={canvasRef} className="fullscreen-container w-full shadow-md">
        {viewContext?.isPresentationMode ? <LaserPointer /> : null}
        {viewContext?.searchBoundaryBox?.searching ? <BoundaryBox/> : null}
        {scene.metadata.id ? (
          <Canvas
            style={{
              zIndex:
                viewContext?.isPresentationMode ||
                viewContext?.searchBoundaryBox?.searching
                  ? -1
                  : 0,
            }}
            shadows
          >
            <OrthographicCamera
              makeDefault
              position={[10, 10, 10]}
              zoom={50}
              near={0}
              far={1000}
            />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={2} castShadow position={[5, 5, 8]} />
            <GridPlane
              castShadow
              receiveShadow
              position={[0, -0.5, 0]}
              args={[25, 25]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {/* Render nodes */}
            {nodes.map((nodeProps, idx) => {
              const componentId = nodeProps.componentId;
              const SceneNode =
                nodeIdToFCDict[componentId as NodeIdToFCDictKeys];
              return <SceneNode key={idx} {...nodeProps} />;
            })}
            {/* Render edges */}
            {edges.map((edgeProps, idx) => {
              const edgeId = edgeProps.edgeId;
              const EdgeNode = edgeIdToFCDict[edgeId as EdgeIdToFCDictKeys];
              return <EdgeNode key={idx} {...edgeProps} />;
            })}
            {!viewContext?.freezeOrbitControl ? <OrbitControls /> : null}
            <CursorToCanvasPos/>
          </Canvas>
        ) : null}
      </div>
    </div>
  );
};

export default Flow3D;
