import React from "react";
import { Flow3DNode } from "../../models/node";
import { Cylinder } from "@react-three/drei";
import withEditNodeOptions from "../../hocs/with-edit-node-options";
import { MeshPhongMaterial } from "three";

const Database: React.FC<Flow3DNode> = ({ guuid, color, ...props }) => {
  return (
    <group {...props} key={guuid}>
      <Cylinder position={[0,-0.25,0]} args={[0.5, 0.5, 0.3]} material={new MeshPhongMaterial({color: color})} />
      <Cylinder position={[0,0.1,0]} args={[0.5, 0.5, 0.3]} material={new MeshPhongMaterial({color: color})} />
      <Cylinder position={[0,0.45,0]} args={[0.5, 0.5, 0.3]} material={new MeshPhongMaterial({color: color})} />
      <Cylinder position={[0,0,0]} args={[0.3, 0.3, 0.7]} material={new MeshPhongMaterial({color: color})} />
    </group>
  );
};

export default withEditNodeOptions(Database);
