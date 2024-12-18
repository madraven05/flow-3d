import { Plane, ShapeProps } from "@react-three/drei";
import React, { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ViewContext } from "../../context/view-context";
import { ThreeEvent } from "@react-three/fiber";
import {
  createFlow3DNode,
  createFlow3DTextNode,
  Flow3DNodes,
} from "../../models/node";
import { generateUUID } from "three/src/math/MathUtils.js";
import { useFlow3D } from "../../hooks/use-flow3d";
import { addNodeToScene } from "../../redux/features/nodes/node-actions";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { fragmentShader, vertexShader } from "../shaders/grid-shaders";

interface GridPlaneProps extends ShapeProps<typeof THREE.PlaneGeometry> {
  gridDensity?: number;
  lineThickness?: number;
  planeColor?: string;
}

const GridPlane: React.FC<GridPlaneProps> = ({
  gridDensity = 0.02,
  lineThickness = 0.002,
  planeColor = "white",
  ...props
}) => {
  const viewContext = useContext(ViewContext);
  const { scene } = useFlow3D();
  const dispatch = useAppDispatch();

  const planeRef = useRef<THREE.Mesh>(null);
  const [pointerPos, setPointerPos] = useState<THREE.Vector3>(
    new THREE.Vector3()
  );
  const [isWrongPos, setIsWrongPos] = useState<boolean>(false);

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      interval: { value: gridDensity },
      lineThickness: { value: lineThickness },
      color: { value: new THREE.Color(planeColor) },
      uPointerPos: { value: pointerPos },
      uWrongPos: { value: isWrongPos },
      uSearchingNode: { value: viewContext?.findNodePos?.searching },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  useEffect(() => {
    if (viewContext?.findNodePos?.searching) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [viewContext?.findNodePos?.searching]);

  const addNewNode = (pos: THREE.Vector3) => {
    if (viewContext?.findNodePos?.searching && !isWrongPos) {
      const position: [number, number, number] = [pos.x, 0, pos.z];

      const componentId = viewContext.findNodePos.componentId;
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
          position: position,
        });
      }

      // add node to scene
      dispatch(addNodeToScene(newNode));

      viewContext.setFindNodePos(null);
    }
  };

  const handlePointerClick = (event: ThreeEvent<MouseEvent>) => {
    if(event.intersections.length > 1) return;
    const intersectPoint = event.intersections[0]?.point;
    if (intersectPoint && viewContext?.findNodePos?.searching) {
      addNewNode(intersectPoint);
    }
  };

  const handlePointerMove = (event: ThreeEvent<MouseEvent>) => {
    if (viewContext?.findNodePos?.searching) {
      setPointerPos(event.intersections[0].point);
      if (event.intersections.length > 1) setIsWrongPos(true);
      else setIsWrongPos(false);
    }
  };

  return (
    <group>
      <Plane
        onClick={handlePointerClick}
        onPointerMove={handlePointerMove}
        ref={planeRef}
        {...props}
      >
        <primitive attach="material" object={shaderMaterial} />
      </Plane>
    </group>
  );
};

export default GridPlane;
