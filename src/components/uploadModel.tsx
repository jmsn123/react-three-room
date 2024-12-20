import React, { useRef, useState } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group } from "three";
import { useLoader } from "@react-three/fiber";

const UploadModel: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [model, setModel] = useState<Group | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const loader = new GLTFLoader();

      loader.load(url, (gltf) => {
        setModel(gltf.scene);
      });
    }
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        accept=".glb,.gltf"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <button onClick={() => inputRef.current?.click()}>
        Upload Your Model
      </button>
      {model && (
        <primitive
          object={model}
          position={[0, 0, 0]}
          scale={1.5}
          castShadow
          receiveShadow
        />
      )}
    </>
  );
};

export default UploadModel;
