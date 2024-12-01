import React, {
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import {
  createFlow3DNode,
  createFlow3DTextNode,
  Flow3DNodes,
} from "../models/node";
import { generateUUID } from "three/src/math/MathUtils.js";
import { addNodeToScene } from "../redux/features/nodes/node-actions";
import { useFlow3D } from "../hooks/use-flow3d";
import {
  createFlow3DArrowEdge,
  createFlow3DDashEdge,
  createFlow3DEdge,
  Flow3DEdges,
} from "../models/edge";
import { addEdgeToScene } from "../redux/features/edges/edge-actions";
import { ViewContext } from "../context/view-context";
import { getXZDragPosition } from "../hocs/with-edit-node-options";

interface ComponentCardProps extends HTMLAttributes<HTMLDivElement> {
  componentId: string;
  type: "node" | "edge";
  children: ReactNode;
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  componentId,
  type,
  children,
  setOpenMenu
}) => {
  const dispatch = useAppDispatch();

  const { scene } = useFlow3D();
  const viewContext = useContext(ViewContext);

  const [isFindNodePos, setIsFindNodePos] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleCursorPosition = (e: MouseEvent) => {
      if (isFindNodePos) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };
    document.addEventListener("mousemove", handleCursorPosition);

    return () => {
      document.removeEventListener("mousemove", handleCursorPosition);
    };
  }, []);

  const handleAddComponent = () => {
    if (type === "node") {
      handleAddNode();
    } else {
      handleAddEdge();
    }
  };

  const handleAddEdge = () => {
    let newEdge: Flow3DEdges;
    switch (componentId) {
      case "line-edge":
        newEdge = createFlow3DEdge(componentId, scene.metadata.id as string);
        break;
      case "dash-edge":
        newEdge = createFlow3DDashEdge(
          componentId,
          scene.metadata.id as string
        );
        break;
      case "arrow-edge":
        newEdge = createFlow3DArrowEdge(
          componentId,
          scene.metadata.id as string
        );
        break;
      default:
        newEdge = createFlow3DEdge(componentId, scene.metadata.id as string);
        break;
    }
    dispatch(addEdgeToScene(newEdge));
  };

  const handleAddNode = () => {
    console.debug(`Adding component to scene: ${componentId}`);

    // finding node position
    viewContext?.setCurrEditMode("view");
    viewContext?.setSearchBoundaryBox({
      componentId: componentId,
      searching: true
    });
    setOpenMenu!(false);
  };

  return (
    <button
      onClick={handleAddComponent}
      className="w-20 h-20 flex flex-col gap-2 justify-center items-center hover:-translate-y-0.5 transition duration-300 ease-in-out hover:cursor-pointer"
    >
      {children}
    </button>
  );
};

export default ComponentCard;
