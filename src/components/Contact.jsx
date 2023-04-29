import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import Map from "./Map"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 10px;
`

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #e8e6e6;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_6i841vo",
        "template_baaq55u",
        ref.current,
        "8aypEK1hNHIWb72Lk"
      )
      .then(
        (result) => {
          console.log(result.text)
          setSuccess(true)
        },
        (error) => {
          console.log(error.text)
          setSuccess(false)
        }
      )
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Meow to me!</Title>
            <Input placeholder="Name/Nickname" name="name"></Input>
            <Input placeholder="Email" email="email"></Input>
            <TextArea
              placeholder="Write your message!"
              name="message"
              rows={10}
            ></TextArea>
            <Button type="submit">Send</Button>
            {success && "Message has been sent successfully"}
          </Form>
        </Left>
        <Right>
          <Map></Map>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
