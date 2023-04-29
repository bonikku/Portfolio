import React from "react"
import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Haccpc from "./Haccpc"
import styled from "styled-components"

const Desc = styled.div`
  position: absolute;
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  opacity: 60%;
  border-radius: 10px;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    margin: auto;
    top: 0;
    bottom: 100px;
    left: 0;
    right: 0;
  }
`

const Hacking = () => {
  return (
    <>
      <Canvas camera={{ fov: 35, position: [120, 30, 20] }}>
        <Stage environment="city" intensity={0.6}>
          <Haccpc />
        </Stage>

        <OrbitControls enableZoom={false} autoRotate></OrbitControls>
      </Canvas>
      <Desc></Desc>
    </>
  )
}

export default Hacking
