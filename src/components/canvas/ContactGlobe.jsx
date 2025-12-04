import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

const GlobeMesh = () => {
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.005;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Sphere ref={ref} args={[1, 64, 64]} scale={2.5}>
            <meshStandardMaterial
                color="#302b63"
                wireframe
                emissive="#bc13fe"
                emissiveIntensity={0.5}
                transparent
                opacity={0.3}
            />
        </Sphere>
    );
};

const ContactGlobe = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <GlobeMesh />
            </Canvas>
        </div>
    );
};

export default ContactGlobe;
