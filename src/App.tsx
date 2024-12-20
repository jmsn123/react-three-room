import { Canvas } from "@react-three/fiber";
import HumanModel from "./components/HumanModl";
import { Physics } from "@react-three/cannon";
import React from "react";
import Room from "./components/Room";

const App: React.FC = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas shadows camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Physics>
          <Room />
          <HumanModel position={[1, 1, 0]} />
          <HumanModel position={[1, 1, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default App;
