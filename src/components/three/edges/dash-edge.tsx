import React from "react";
import { Flow3DDashEdge, Flow3DEdge } from "../../models/edge";
import { Line } from "@react-three/drei";
import withEditEdgeOptions from "../../hocs/with-edit-edge-options";

const DashEdge: React.FC<Flow3DDashEdge> = ({
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
      <Line dashed={true} dashSize={0.3} gapSize={0.2} points={points} color={color} lineWidth={width} />
    </group>
  );
};

export default withEditEdgeOptions(DashEdge);
