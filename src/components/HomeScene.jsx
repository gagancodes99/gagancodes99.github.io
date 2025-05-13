import { Center, OrbitControls } from '@react-three/drei'
import React, { useMemo, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import TextRing from './WrappedText/TextRing'
import { useControls } from 'leva'
const HomeScene = () => {
//     const { position, rotation } = useControls('Torus Transform', {
//     position: {
//       value: { x: 1.5, y: 1.8, z: 0 },
//       min: -5,
//       max: 5,
//       step: 0.001,
//     },
//     rotation: {
//       value: { x: 0, y: 0, z: 0.71 },
//       min: 0,
//       max: Math.PI * 2,
//       step: 0.001,
//     },
//   })
    const particlesRef = useRef();
    const particles = useMemo(() => {
    const points = []
    const radius = 1 // Slightly larger than sphere radius

    for (let i = 0; i < 4000; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      points.push(x, y, z)
    }

    return new Float32Array(points)
  }, [])
 useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002
      particlesRef.current.rotation.x += 0.0002
    }
  })
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Center>
        <group scale={1}>
          <points ref={particlesRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={particles.length / 3}
                array={particles}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial color="fff" size={0.02} />
            <PointMaterial
              transparent
              color="#fff"
              size={0.012}
              sizeAttenuation={true}
              depthWrite={true}
            />
          </points>
          <group>
            <TextRing rotate={[0, 0, 0]}>React Native</TextRing>
            <TextRing rotate={[Math.PI / 4, Math.PI / 4, 0]}>Next.js</TextRing>
            <TextRing rotate={[0, Math.PI / 3, Math.PI / 4]}>Nuxt.js</TextRing>
            <TextRing rotate={[Math.PI / 3, 0, Math.PI / 4]}>
              CI/CD Pipeline
            </TextRing>
            <TextRing rotate={[Math.PI / 6, Math.PI / 4, Math.PI / 2]}>
              Backend Dev
            </TextRing>
            <TextRing rotate={[Math.PI / 4, Math.PI / 6, Math.PI / 3]}>
              Frontend Dev
            </TextRing>
            <TextRing rotate={[Math.PI / 5, Math.PI / 3, Math.PI / 5]}>
              Figma
            </TextRing>
            <TextRing rotate={[Math.PI / 4, Math.PI / 6, Math.PI / 3]}>
              AWS
            </TextRing>
          </group>
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[2, 0.3, 16, 100]} />
            <meshPhysicalMaterial
              color="#C9C7BA"
              roughness={0.6}
              metalness={0.8}
              clearcoat={1}
              reflectivity={1}
              side={THREE.DoubleSide}
            />
          </mesh>

          <group>
            <mesh rotation={[Math.PI, 0, 0]} position={[0, -1.75, 0]}>
            <torusGeometry args={[2, 0.3, 16, 100, Math.PI * 0.99]} />
            <meshPhysicalMaterial
              color="#C9C7BA"
              roughness={0.6}
              metalness={0.8}
              clearcoat={1}
              reflectivity={1}
              side={THREE.DoubleSide}
            />
          </mesh>

            <mesh rotation={[Math.PI / 2, 0, 0]} position={[2, -1.75, 0]}>
                <circleGeometry args={[0.3, 32]} />
                <meshPhysicalMaterial
                color="#C9C7BA"
                side={THREE.DoubleSide}
                roughness={0.6}
                metalness={0.8}
                clearcoat={1}
                reflectivity={1}
                />
            </mesh>

            <mesh rotation={[Math.PI / 2, 0, 0]} position={[-2, -1.81, 0]}>
                <circleGeometry args={[0.3, 32]} />
                <meshPhysicalMaterial
                color="#C9C7BA"
                side={THREE.DoubleSide}
                roughness={0.6}
                metalness={0.8}
                clearcoat={1}
                reflectivity={1}
                />
            </mesh>
          </group>
          <mesh
            position={[1.5, 1.8, 0.0]}
            rotation={[0, 0, 0.71]}
            >
            <torusGeometry args={[0.3, 0.05, 16, 100, Math.PI * 0.7]} />
            <meshPhysicalMaterial
                color="#F66435"
                roughness={0.6}
                metalness={0.1}
                clearcoat={1}
                reflectivity={1}
                side={THREE.DoubleSide}
                />
        </mesh>
        <mesh
        position={[
            1.78,
            1.94,
            0,
        ]}
        >
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshPhysicalMaterial
            color="#F66435"
            roughness={0.5}
            metalness={0.3}
            clearcoat={1}
            reflectivity={1}
        />
        </mesh>
        </group>
      </Center>
    </>
  );
}

export default HomeScene
