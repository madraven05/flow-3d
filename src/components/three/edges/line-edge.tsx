import React from "react";
import { Flow3DEdge } from "../../models/edge";
import { Line } from "@react-three/drei";
import withEditEdgeOptions from "../../hocs/with-edit-edge-options";

const LineEdge: React.FC<Flow3DEdge> = ({
  guuid,
  points = [
    [0, 0, 0],
    [0, 0, 1],
  ],
  color = "black",
  width = 2,
  ...props
}) => {
  return (
    <group {...props} key={guuid}>
      <Line points={points} color={color} lineWidth={width} />
    </group>
  );
};

export default withEditEdgeOptions(LineEdge);
