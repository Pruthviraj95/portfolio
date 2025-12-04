import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, Text, Html } from '@react-three/drei';
import { useRef, useState } from 'react';

const Node = ({ position, label, color }) => {
    const ref = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
            ref.current.scale.setScalar(hovered ? 1.5 : 1);
        }
    });

    return (
        <group position={position}>
            <Sphere ref={ref} args={[0.5, 32, 32]} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </Sphere>
            <Html distanceFactor={10}>
                <div className="bg-black/50 text-white px-2 py-1 rounded text-xs whitespace-nowrap backdrop-blur-sm border border-white/10">
                    {label}
                </div>
            </Html>
        </group>
    );
};

const Connection = ({ start, end }) => {
    return (
        <Line points={[start, end]} color="white" transparent opacity={0.2} lineWidth={1} />
    );
};

const SystemDiagram3D = () => {
    const nodes = [
        { id: 1, pos: [0, 2, 0], label: "Frontend (JSP)", color: "#00f3ff" },
        { id: 2, pos: [-2, 0, 0], label: "Spring Controller", color: "#bc13fe" },
        { id: 3, pos: [2, 0, 0], label: "REST API", color: "#bc13fe" },
        { id: 4, pos: [0, -2, 0], label: "Hibernate ORM", color: "#302b63" },
        { id: 5, pos: [0, -4, 0], label: "MySQL DB", color: "#ffffff" },
    ];

    return (
        <div className="w-full h-[400px] glass-panel overflow-hidden">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                {nodes.map((node) => (
                    <Node key={node.id} position={node.pos} label={node.label} color={node.color} />
                ))}

                <Connection start={[0, 2, 0]} end={[-2, 0, 0]} />
                <Connection start={[0, 2, 0]} end={[2, 0, 0]} />
                <Connection start={[-2, 0, 0]} end={[0, -2, 0]} />
                <Connection start={[2, 0, 0]} end={[0, -2, 0]} />
                <Connection start={[0, -2, 0]} end={[0, -4, 0]} />
            </Canvas>
        </div>
    );
};

export default SystemDiagram3D;
