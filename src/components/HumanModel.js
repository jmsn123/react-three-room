import { jsx as _jsx } from "react/jsx-runtime";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
const HumanModel = ({ position }) => {
    const { scene } = useGLTF("/human.glb");
    const [ref, api] = useBox(() => ({
        mass: 1,
        position, // Ensure starting position is correct
        args: [1, 2, 1] // Adjust collision box dimensions to match model
    }));
    const { camera } = useThree();
    const [keys, setKeys] = useState({});
    // Speed settings
    const walkSpeed = 2;
    const runSpeed = 5;
    // Handle keypress events for movement
    useEffect(() => {
        const handleKeyDown = (e) => setKeys((prev) => ({ ...prev, [e.key]: true }));
        const handleKeyUp = (e) => setKeys((prev) => ({ ...prev, [e.key]: false }));
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    // Movement logic
    useFrame(() => {
        const direction = new THREE.Vector3();
        const velocity = new THREE.Vector3();
        if (keys["w"] || keys["ArrowUp"])
            direction.z -= 1; // Move forward
        if (keys["s"] || keys["ArrowDown"])
            direction.z += 1; // Move backward
        if (keys["a"] || keys["ArrowLeft"])
            direction.x -= 1; // Move left
        if (keys["d"] || keys["ArrowRight"])
            direction.x += 1; // Move right
        // Normalize direction and set speed
        if (direction.length() > 0) {
            direction.normalize();
            const speed = keys["Shift"] ? runSpeed : walkSpeed; // Run with Shift key
            velocity.set(direction.x * speed, 0, direction.z * speed);
            api.velocity.set(velocity.x, 0, velocity.z);
            // Rotate model to face direction
            const angle = Math.atan2(direction.x, direction.z);
            ref.current.rotation.y = angle;
        }
        // Camera follows the model in a third-person perspective
        if (ref.current) {
            const pos = ref.current.position;
            const cameraOffset = new THREE.Vector3(0, 5, 10); // Adjust these values for better perspective
            const targetPosition = new THREE.Vector3().copy(pos).add(cameraOffset);
            // Smoothly transition the camera to the target position
            camera.position.lerp(targetPosition, 0.1);
            camera.lookAt(pos.x, pos.y, pos.z); // Keep camera focused on the model
        }
    });
    return (_jsx("primitive", { ref: ref, object: scene, scale: 0.06, position: [0, -1, 1], castShadow: true, receiveShadow: true }));
};
export default HumanModel;
