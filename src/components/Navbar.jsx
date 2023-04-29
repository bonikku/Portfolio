import React from "react"
import styled from "styled-components"

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const ListItem = styled.li`
  cursor: pointer;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.img`
  height: 50px;
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <a href="nikolaaowo.space">
            <Logo src="/public/img/logo.png" />
          </a>
          <List>
            <a>
              <ListItem>Home</ListItem>
            </a>
            <a>
              <ListItem>Studio</ListItem>
            </a>
            <a>
              <ListItem>Works</ListItem>
            </a>
            <a>
              <ListItem>Contact</ListItem>
            </a>
          </List>
        </Links>
        <Button>Meow!</Button>
      </Container>
    </Section>
  )
}

export default Navbar
