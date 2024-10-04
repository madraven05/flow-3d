import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../context/view-context";
import { motion } from "framer-motion-3d";
import { useGesture } from "@use-gesture/react";
import { Flow3DNode } from "../models/node";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { updateNodeProperties } from "../redux/features/nodes/node-actions";

interface withEditNodeOptionsProps {}

export const getXZDragPosition = (
  x: number,
  y: number
): [number, number, number] => {
  const xMovement = x / 80;
  const zMovement = y / 80;

  return [xMovement + zMovement, 0, zMovement - xMovement]
};

/**
 * HOC that provides editing functionality to a Flow3DNode.
 * Functionalities - Edit menu on select, dragging on move
 * @param Model - Flow3DNode
 * @returns 
 */
const withEditNodeOptions = <P extends object>(
  Model: React.ComponentType<P>
) => {
  return ({ ...props }: P & withEditNodeOptionsProps) => {
    const viewContext = useContext(ViewContext);

    const [hovered, setHovered] = useState(false);

    const dispatch = useAppDispatch();

    //#region Helper functions
    const getComponentGuuid = (): string | null => {
      if ("guuid" in props) {
        return props["guuid"] as string;
      }
      return null;
    };

    const setNodePosition = (newPosition: [number, number, number]): void => {
      const update: Partial<Flow3DNode> = {
        position: newPosition,
      };
      dispatch(
        updateNodeProperties({
          guuid: getComponentGuuid() as string,
          update: update,
        })
      );
    };
    //#endregion

    //#region useEffects
    useEffect(() => {
      const editMode = viewContext?.currEditMode;
      switch (editMode) {
        case "move":
          
          break;
        case "select":
          break;
        case "view":
          viewContext?.setComponentGuuid(null);
          break;
        default:
          viewContext?.setComponentGuuid(null);
          break;
      }
    }, [viewContext?.currEditMode]);
    //#endregion

    // Drag logic
    const bind = useGesture({
      onDrag: ({ offset: [x, y], lastOffset }) => {
        if (
          viewContext?.currEditMode === "move" &&
          viewContext.componentGuuid
        ) {
          viewContext?.setFreezeOrbitControl(true);
          const newPosition = getXZDragPosition(x,y);

          if(lastOffset) setNodePosition(newPosition);
        }
      },
      onDragEnd: () => {
        viewContext?.setFreezeOrbitControl(false);
      }
    });
    
    //#region Event handlers
    const handleOnHover = () => {
      if (viewContext?.currEditMode !== "view") {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }
    };

    const handleLeaveHover = () => {
      document.body.style.cursor = "auto";
      setHovered(false);
    };

    const handleEditNode = () => {
      if (viewContext?.currEditMode !== "view") {
        viewContext?.setComponentGuuid(getComponentGuuid());
      } else {
        viewContext?.setComponentGuuid(null);
      }
    };
    //#endregion

    return (
      <motion.group
        // position={dragPosition}
        onPointerOver={handleOnHover}
        onPointerLeave={handleLeaveHover}
        animate={{ y: hovered ? 0.3 : 0 }}
        onClick={handleEditNode}
      >
        <Model {...(props as P)} {...bind()} />
      </motion.group>
    );
  };
};

export default withEditNodeOptions;
