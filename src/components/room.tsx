import { MeshProps } from "@react-three/fiber";
import React from "react";
import { useBox } from "@react-three/cannon";

interface WallProps {
  position: [number, number, number];
  size: [number, number, number];
}

const Wall: React.FC<WallProps> = ({ position, size }) => {
  const [ref] = useBox(() => ({
    args: size,
    position,
    type: "Static"
  }));

  return (
    <mesh
      ref={ref as React.MutableRefObject<MeshProps>}
      position={position}
      receiveShadow
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

const Room: React.FC = () => {
  return (
    <>
      {/* Floor */}
      <Wall position={[0, -0.5, 0]} size={[10, 1, 10]} />
      {/* Walls */}
      <Wall position={[0, 2, -5]} size={[10, 4, 1]} />
      <Wall position={[-5, 2, 0]} size={[1, 4, 10]} />
      <Wall position={[5, 2, 0]} size={[1, 4, 10]} />
    </>
  );
};

export default Room;
