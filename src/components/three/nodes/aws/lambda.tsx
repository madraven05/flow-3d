import React from "react";
import { Flow3DNode } from "../../../models/node";
import Triangle3D from "../triangle-3d";
import withEditNodeOptions from "../../../hocs/with-edit-node-options";

const AWSLambda: React.FC<Flow3DNode> = () => {
  const color = "#F1893E";
  return (
    <group>
      <group rotation={[0, Math.PI / 6, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0, 0.4, -0.3]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        >
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, 0, -0.6]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0, -0.4, -0.3]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        >
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <Triangle3D
          color={color}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          bevelSize={0.001}
          height={0.1}
          width={0.06}
          position={[0, 0, -0.3]}
        />
      </group>
      <group position={[-0.5, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0, 0.4, -0.3]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        >
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, 0, -0.6]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0, -0.4, -0.3]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        >
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <Triangle3D
          color={color}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          bevelSize={0.001}
          height={0.1}
          width={0.06}
          position={[0, 0, -0.3]}
        />
      </group>
      <group position={[-1, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
        <mesh>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0, 0.4, -0.3]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        >
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, 0, -0.6]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh
          position={[0, -0.4, -0.3]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
        >
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <Triangle3D
          color={color}
          rotation={[0, Math.PI / 2, -Math.PI / 2]}
          bevelSize={0.001}
          height={0.1}
          width={0.06}
          position={[0, 0, -0.3]}
        />
      </group>
    </group>
  );
};

export default withEditNodeOptions(AWSLambda);
