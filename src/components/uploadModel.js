import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const UploadModel = () => {
    const inputRef = useRef(null);
    const [model, setModel] = useState(null);
    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            const loader = new GLTFLoader();
            loader.load(url, (gltf) => {
                setModel(gltf.scene);
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: "file", ref: inputRef, accept: ".glb,.gltf", style: { display: "none" }, onChange: handleFileUpload }), _jsx("button", { onClick: () => inputRef.current?.click(), children: "Upload Your Model" }), model && (_jsx("primitive", { object: model, position: [0, 0, 0], scale: 1.5, castShadow: true, receiveShadow: true }))] }));
};
export default UploadModel;
