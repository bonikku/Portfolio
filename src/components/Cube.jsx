import React, { useRef } from "react"
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei"
import * as THREE from "three"

const Cube = () => {
  const textRef = useRef()
  const colorMap = new THREE.TextureLoader().load("/public/nikkcube.jpg")
  const material = new THREE.MeshStandardMaterial()

  material.map = colorMap

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial map={colorMap}>
        <RenderTexture attach="{colorMap}">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text fontSize={1} color="#555">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

export default Cube
