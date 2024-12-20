import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBox } from "@react-three/cannon";
const Wall = ({ position, size }) => {
    const [ref] = useBox(() => ({
        args: size,
        position,
        type: "Static"
    }));
    return (_jsxs("mesh", { ref: ref, position: position, receiveShadow: true, children: [_jsx("boxGeometry", { args: size }), _jsx("meshStandardMaterial", { color: "lightblue" })] }));
};
const Room = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Wall, { position: [0, -0.5, 0], size: [10, 1, 10] }), _jsx(Wall, { position: [0, 2, -5], size: [10, 4, 1] }), _jsx(Wall, { position: [-5, 2, 0], size: [1, 4, 10] }), _jsx(Wall, { position: [5, 2, 0], size: [1, 4, 10] })] }));
};
export default Room;
