import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Word = ({ children, ...props }) => {
    const color = new THREE.Color();
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useFrame(({ camera }) => {
        ref.current.quaternion.copy(camera.quaternion);
        ref.current.material.color.lerp(color.set(hovered ? '#00f3ff' : 'white'), 0.1);
    });

    return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />;
};

const Cloud = ({ count = 4, radius = 20 }) => {
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        const skills = [
            "Java", "Spring Boot", "Hibernate", "REST API", "MySQL", "JSP",
            "React", "Three.js", "Tailwind", "Git", "Maven", "Gradle",
            "Microservices", "Security", "Agile", "AWS", "Docker", "Linux"
        ];

        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skills[(i * count + j) % skills.length]]);
        return temp;
    }, [count, radius]);
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />);
};

import { useState } from 'react';

const TechOrbit = () => {
    return (
        <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                <fog attach="fog" args={['#202025', 0, 80]} />
                <Cloud count={8} radius={20} />
                <TrackballControls />
            </Canvas>
        </div>
    );
};

export default TechOrbit;
