import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { Canvas } from "@react-three/fiber";
import HumanModel from "./components/HumanModel";
import { Physics } from "@react-three/cannon";
import Room from "./components/Room";
const App = () => {
    return _jsx("div", {
        style: { height: "100vh" },
        children: _jsxs(Canvas, {
            shadows: true,
            camera: { fov: 50 },
            children: [
                _jsx("ambientLight", { intensity: 0.5 }),
                _jsx("directionalLight", {
                    position: [5, 10, 5],
                    intensity: 1,
                    castShadow: true
                }),
                _jsxs(Physics, {
                    children: [
                        _jsx(Room, {}),
                        _jsx(HumanModel, { position: [1, 1, 0] }),
                        _jsx(HumanModel, { position: [1, 1, 0] })
                    ]
                })
            ]
        })
    });
};
export default App;