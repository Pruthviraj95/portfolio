import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from './CanvasLoader';

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                    <Sphere visible args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial
                            color="#302b63"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            roughness={0}
                        />
                    </Sphere>

                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Hero3D;
