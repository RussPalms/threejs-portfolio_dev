import React from "react";

const Path = ({ position, castShadow, path }) => {
  return (
    <mesh
      geometry={path.Cube078.geometry}
      position={position}
      castShadow={castShadow}
    >
      <meshStandardMaterial
        color="#a8a8a8"
        roughness={1}
        metalness={0}
        opacity={1}
      />
    </mesh>
  );
};

export default Path;
