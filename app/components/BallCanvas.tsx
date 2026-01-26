'use client';

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  Html,
  OrbitControls,
  Preload,
  useProgress,
  useTexture,
} from "@react-three/drei";
import { StaticImageData } from "next/image";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="canvas-load"></span>
      <p style={{ fontSize: 14, fontWeight: 800, marginTop: 40 }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Define the shape of the props for the Ball
interface BallProps {
  imgUrl: string;
}

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <hemisphereLight intensity={0.8} groundColor={"#000"} />
      <directionalLight position={[2, 2, 2]} intensity={0.4} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={'#fff8eb'}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

// Define props for the Canvas wrapper
interface BallCanvasProps {
  icon: StaticImageData | string;
}

export default function BallCanvas({ icon }: BallCanvasProps) {
  // Extract the string URL from StaticImageData if necessary
  const imgUrl = typeof icon === "string" ? icon : icon.src;

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={imgUrl} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}