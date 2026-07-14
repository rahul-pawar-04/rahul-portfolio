import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

const ThreeBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -2,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />

        <pointLight position={[10, 10, 10]} intensity={2} />

        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#4f8cff"
              wireframe
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;