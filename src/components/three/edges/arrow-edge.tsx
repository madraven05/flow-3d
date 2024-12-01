import { Cone, Line } from "@react-three/drei";
import React, { useMemo } from "react";
import { Flow3DArrowEdge } from "../../models/edge";
import { MeshPhongMaterial } from "three";
import withEditEdgeOptions from "../../hocs/with-edit-edge-options";
import * as THREE from "three";

const ArrowEdge: React.FC<Flow3DArrowEdge> = ({
  guuid,
  points = [
    [0, 0, 0],
    [0, 0, 1],
  ],
  color = "black",
  width = 2,
  ...props
}) => {

  const subtractVectors = (
    end: [number, number, number],
    start: [number, number, number]
  ): THREE.Vector3 => {
    return new THREE.Vector3(
      end[0] - start[0],
      end[1] - start[1],
      end[2] - start[2]
    );
  };

  const angle = useMemo(() => {
    const start = points[0] as [number, number, number];
    const end = points[1] as [number, number, number];
    const dir = subtractVectors(end, start);
    const angle = Math.atan2(dir.z, dir.x);
    return angle;
  }, [points]);

  return (
    <group castShadow {...props} key={guuid}>
      <Line points={points} color={color} lineWidth={width} />
      
      <Cone
        args={[0.1, 0.3]}
        position={points[1] as [number, number, number]}
        rotation={[0, -angle, -Math.PI/2]}
        material={new MeshPhongMaterial({ color: color })}
      />
    </group>
  );
};

export default withEditEdgeOptions(ArrowEdge);
