import { useThree } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { ViewContext } from "./context/view-context";
import { Vector3 } from "three";

const CursorToCanvasPos = () => {
  const { camera, viewport } = useThree();
  const viewContext = useContext(ViewContext);

  useEffect(() => {
    const convertCursorToCanvasPosition = (e: MouseEvent) => {
      console.log("checking for canvas position");
      const { clientX, clientY } = e;
      const x = ((clientX-96/2) / window.innerWidth) * 2 - 1;
      const y = -((clientY-96/2) / window.innerHeight) * 2 + 1;

      // Convert NDC to world coordinates
      const canvasX = (x * viewport.width) / 2;
      const canvasY = (y * viewport.height) / 2;

      console.log(canvasX, canvasY);

      viewContext?.setSearchBoundaryBox((prevState) => ({
        ...prevState!,
        canvasPos: [canvasX+canvasY, 0, canvasX-canvasY],
      }));
    };

    document.addEventListener("click", convertCursorToCanvasPosition);

    return () => {
      document.removeEventListener("click", convertCursorToCanvasPosition);
    };
  }, [camera]);
  return null;
};

export default CursorToCanvasPos;
