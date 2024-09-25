import React, { HTMLAttributes, ReactNode } from "react";
import CurvedBox from "../three/nodes/curved-box";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { Node } from "../models/node";
import { generateUUID } from "three/src/math/MathUtils.js";
import { addNodeToScene } from "../redux/features/scene/scene-actions";

interface ComponentCardProps extends HTMLAttributes<HTMLDivElement> {
  componentId: string,
  children: ReactNode;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ componentId, children }) => {
  const dispatch = useAppDispatch();
 
  const handleAddNode = () => {
    console.debug(`Adding component to scene: ${componentId}`)
    const newNode: Node = {
      componentId: componentId,
      guuid: generateUUID(),
      color: 'lightgreen',
      position: [0,0,0],
      rotation: [0,0,0],
      scale: [1,1,1]
    }
    dispatch(addNodeToScene(newNode));
  }

  return (
    <button onClick={handleAddNode} className="w-20 h-20 flex flex-col gap-2 justify-center items-center hover:-translate-y-0.5 transition duration-300 ease-in-out hover:cursor-pointer">
      {children}
    </button>
  );
};

export default ComponentCard;
