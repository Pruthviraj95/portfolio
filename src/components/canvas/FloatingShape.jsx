import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingShape = ({ color = "#00f3ff", position = [0, 0, 0], scale = 1 }) => {
    return (
        <div className="absolute w-64 h-64 pointer-events-none z-0" style={{ left: position[0], top: position[1] }}>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                        <Icosahedron args={[1, 0]} scale={scale}>
                            <MeshDistortMaterial
                                color={color}
                                attach="material"
                                distort={0.3}
                                speed={2}
                                roughness={0}
                                transparent
                                opacity={0.6}
                            />
                        </Icosahedron>
                    </Float>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default FloatingShape;
