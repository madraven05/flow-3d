import React, { HTMLAttributes, ReactNode } from "react";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import {
  createFlow3DNode,
  createFlow3DTextNode,
  Flow3DNodes,
} from "../models/node";
import { generateUUID } from "three/src/math/MathUtils.js";
import { addNodeToScene } from "../redux/features/nodes/node-actions";
import { useFlow3D } from "../hooks/use-flow3d";
import { createFlow3DDashEdge, createFlow3DEdge, Flow3DEdges } from "../models/edge";
import { addEdgeToScene } from "../redux/features/edges/edge-actions";

interface ComponentCardProps extends HTMLAttributes<HTMLDivElement> {
  componentId: string;
  type: "node" | "edge";
  children: ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  componentId,
  type,
  children,
}) => {
  const dispatch = useAppDispatch();

  const { scene } = useFlow3D();

  const handleAddComponent = () => {
    if(type === "node") {
      handleAddNode();
    } else {
      handleAddEdge();
    }
  }

  const handleAddEdge = () => {
    let newEdge: Flow3DEdges
    switch (componentId) {
      case "line-edge":
        newEdge = createFlow3DEdge(componentId, scene.metadata.id as string)
        break;
      case "dash-edge":
        newEdge = createFlow3DDashEdge(componentId, scene.metadata.id as string);
        break;
      default:
        newEdge = createFlow3DEdge(componentId, scene.metadata.id as string)
        break;
    }
    dispatch(addEdgeToScene(newEdge));
  }

  const handleAddNode = () => {
    console.debug(`Adding component to scene: ${componentId}`);
    let newNode: Flow3DNodes;
    if (componentId === "text") {
      newNode = createFlow3DTextNode(
        componentId,
        generateUUID(),
        scene.metadata.id as string
      );
    } else {
      newNode = createFlow3DNode(
        componentId,
        generateUUID(),
        scene.metadata.id as string
      );
    }
    dispatch(addNodeToScene(newNode));
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
