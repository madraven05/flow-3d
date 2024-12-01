import React, { useContext, useEffect, useRef, useState } from "react";
import { ViewContext } from "./context/view-context";
import {
  createFlow3DNode,
  createFlow3DTextNode,
  Flow3DNodes,
} from "./models/node";
import { generateUUID } from "three/src/math/MathUtils.js";
import { useFlow3D } from "./hooks/use-flow3d";
import { useAppDispatch } from "./hooks/use-app-dispatch";
import { addNodeToScene } from "./redux/features/nodes/node-actions";

interface BoundaryBoxProps {
}

const BoundaryBox: React.FC<BoundaryBoxProps> = ({
}) => {
  const viewContext = useContext(ViewContext);
  const { scene } = useFlow3D();
  const dispatch = useAppDispatch();

  const boundaryRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const findNodePosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", findNodePosition);

    return () => {
      document.removeEventListener("mousemove", findNodePosition);
    };
  }, []);

  const addNewNode = () => {
    if (viewContext?.searchBoundaryBox?.searching) {
      console.log("adding node");

      const componentId = viewContext.searchBoundaryBox.componentId;
      let newNode: Flow3DNodes;
      if (componentId === "text") {
        newNode = createFlow3DTextNode(
          componentId,
          generateUUID(),
          scene.metadata.id as string
        );
      } else {
        newNode = createFlow3DNode({
          componentId: componentId,
          guuid: generateUUID(),
          sceneGuuid: scene.metadata.id as string,
          position: viewContext.searchBoundaryBox.canvasPos!,
        });
      }

      // add node to scene
      dispatch(addNodeToScene(newNode));

      viewContext.setSearchBoundaryBox(null);
    }
  };

  return (
    <div
      onClick={addNewNode}
      ref={boundaryRef}
      className="fixed h-24 w-24 transform border-2 border-green-700  bg-opacity-20 bg-green-400"
      style={{
        top: `${cursorPosition.y - 96/2}px`,
        left: `${cursorPosition.x - 96/2}px`,
        transform: "rotateX(54deg) rotateY(0deg) rotateZ(46deg)",
        transformStyle: "preserve-3d",
      }}
    ></div>
  );
};

export default BoundaryBox;
