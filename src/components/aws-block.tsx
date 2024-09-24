import { RoundedBox, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";

const AwsBlock = () => {
  const texture = useLoader(THREE.TextureLoader, "/aws-transparent.png");

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; // Allow the texture to be wrapped/repeated
  texture.repeat.set(1.2, 1.2); 

  const materials = useMemo(
    () => [
      new THREE.MeshStandardMaterial({ map: texture, transparent: true }), // Front face (image)
      new THREE.MeshStandardMaterial({ color: "orange" }), // Back face
      new THREE.MeshStandardMaterial({ color: "orange" }), // Top face
      new THREE.MeshStandardMaterial({ color: "orange" }), // Bottom face
      new THREE.MeshStandardMaterial({ color: "orange" }), // Left face
      new THREE.MeshStandardMaterial({ color: "orange" }), // Right face
    ],
    [texture]
  );
  return (
    <group position={[1.5, 0, 0]}>
      <RoundedBox radius={0.1}>
        <primitive attach="material" object={materials} />
      </RoundedBox>
    </group>
  );
};

export default AwsBlock;
