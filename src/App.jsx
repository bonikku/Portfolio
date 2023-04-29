import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import styled from "styled-components"
import Azure from "./components/Azure"
import Hacking from "./components/Hacking"
import PixelArt from "./components/PixelArt"
import WebDev from "./components/WebDev"
import Navbar from "./components/Navbar"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("/public/img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App