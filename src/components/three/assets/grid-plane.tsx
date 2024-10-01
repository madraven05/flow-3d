import { Plane, ShapeProps } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

interface GridPlaneProps extends ShapeProps<typeof THREE.PlaneGeometry> {
  gridDensity?: number;
  lineThickness?: number;
  planeColor?: string
}

const GridPlane: React.FC<GridPlaneProps> = ({
  gridDensity = 0.04,
  lineThickness = 0.002,
  planeColor = "white",
  ...props
}) => {
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      interval: { value: gridDensity },
      lineThickness: { value: lineThickness },
      color: {value: new THREE.Color(planeColor)}
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

  return (
    <Plane {...props}>
      <primitive attach="material" object={shaderMaterial} />
    </Plane>
  );
};

export default GridPlane;
