import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Cylinder, MeshWobbleMaterial, Icosahedron, Center } from '@react-three/drei'

function ccccc(children, color) {
  const fontSize = 280

  const canvas = document.createElement('canvas')
  canvas.width = 4096
  canvas.height = 2048
  const context = canvas.getContext('2d')

  context.fillStyle = "transparent"
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = color
  context.fillText(children, 1024, canvas.height / 2)
  return canvas

}

function TextRing({ children, direction = 1, position = [0, 0, 0], scale=1.5, rotate=[0,0,0] }) {

  const canvas = useMemo(() => {
    return ccccc(children, "white")
  }, [children])

  const texture = useRef()
  useFrame(({ clock }) => {
    if (direction > 0)
      texture.current.offset.x = clock.getElapsedTime() * 0.1
    else
      texture.current.offset.x = - clock.getElapsedTime() * 0.1
  })

  const cylArgs = [1, 1, 1, 64, 1, true]

  return (
    <group rotation-y={Math.PI / 4} scale={scale} position={position} rotation={rotate}>
      <Cylinder args={cylArgs}>
        <meshStandardMaterial attach="material" side={THREE.DoubleSide} alphaTest={0.5}>
          <canvasTexture
            attach="map"
            repeat={[6, 1]}
            image={canvas}
            premultiplyAlpha
            ref={texture}
            wrapS={THREE.RepeatWrapping}
            wrapT={THREE.RepeatWrapping}
            onUpdate={(s) => (s.needsUpdate = true)}
          />
        </meshStandardMaterial>
      </Cylinder>
    </group>
  )
}

export default TextRing