import { Plane, ShapeProps } from "@react-three/drei";
import React, { useContext, useEffect, useRef } from "react";
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

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      interval: { value: gridDensity },
      lineThickness: { value: lineThickness },
      color: { value: new THREE.Color(planeColor) },
    },
    vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
    fragmentShader: `
          uniform vec2 iResolution;
          uniform float interval;
          uniform float lineThickness;
          varying vec2 vUv;
          uniform vec3 color;
    
          void main() {
            vec2 uv = vUv;
            vec3 col = color;
    
            // Calculate offset to center the grid
            float offset = (lineThickness / 2.0) - ((1.0 - interval) / 2.0);
    
            // Draw grid lines
            if (mod(uv.x + offset, interval) < lineThickness || mod(uv.y + offset, interval) < lineThickness) {
              col = vec3(0.4); 
            }
    
            gl_FragColor = vec4(col, 0.5);  // Output color with full opacity
          }
        `,
  });

  useEffect(() => {
    if (viewContext?.searchBoundaryBox?.searching) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [viewContext?.searchBoundaryBox?.searching]);

  const addNewNode = (pos: THREE.Vector3) => {
    if (viewContext?.searchBoundaryBox?.searching) {
      console.log("adding node");
      const position: [number, number, number] = [pos.x, 0, pos.z];

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
          position: position,
        });
      }

      // add node to scene
      dispatch(addNodeToScene(newNode));

      viewContext.setSearchBoundaryBox(null);
    }
  };

  const handlePointerOver = (event: ThreeEvent<MouseEvent>) => {
    const intersectPoint = event.intersections[0]?.point;
    if (intersectPoint && viewContext?.searchBoundaryBox?.searching) {
      addNewNode(intersectPoint);
    }
  };

  return (
    <group>
      <Plane onClick={handlePointerOver} ref={planeRef} {...props}>
        <primitive attach="material" object={shaderMaterial} />
      </Plane>
    </group>
  );
};

export default GridPlane;
