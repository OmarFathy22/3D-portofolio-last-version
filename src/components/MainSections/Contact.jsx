import React from "react";
import styled from "styled-components";
import MapChart from "../componentSection/Map";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import bg from '../../assets/img/bg.jpeg'

function HERO() {
  const Section = styled.div`
  background-image: url(${bg});
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
  `;
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

  `;
  const Main = styled.div`
    background-image: url(${bg});
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    @media screen and (max-width: 1100px){
      flex-direction:column;
      /* align-items:flex-start; */
      justify-content:flex-start;
      align-content:flex-start;
      margin-top:200px;
    }
  `;
  const EmptyContent = styled.div`
    flex: 1.5;
    @media screen and (max-width: 1100px){
      display:none;
    }
    `
  const LeftMain = styled.section`
    height:100vh;
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 20px;
  `;
   const Form = styled.form`
   width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 1100px){
      width:340px;
      text-align:center;
    }
   `
   const ContactUs = styled.h1`
    font-weight: 100 ;
    letter-spacing: 1px;
   `
   const Name = styled.input`
   padding: 20px;
   border-radius: 5px;
   background-color: #eae7e7;
   color: black;

   `
    const Email = styled.input`
    padding: 20px;
   border-radius: 5px;
   background-color: #eae7e7;
   color: black;

   `
    const Message = styled.textarea`
    padding: 20px;
    border-radius: 5px;
    background-color: #eae7e7;
    color: black;
    resize:none

    `
    const Submit = styled.button`
      background-color: #da4ea2;
    border: none;
    padding: 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    `
  const RightMain = styled.section`
    flex: 6;
    height: 100%;
    width: 100%;
  `;
  const form = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_hnf0i09', 'template_fnmzw0s', form.current, 'HUq4s0kbtihg_jb62')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent, We will contact you shortly")
      }, (error) => {
          console.log(error.text);
          alert("Message not sent")
      });
      
    }

  return (
    <Section>
      <Container>
        <Main>
          <EmptyContent/>
          <LeftMain>
            <Form ref={form} onSubmit={handleSubmit}>
            <ContactUs>Contact Us</ContactUs>
              <Name type="text" placeholder="Name" name= "name" />
              <Email type="email" placeholder="Email" name="email" />
              <Message rows={10} placeholder="Write your Message..." name="message" />
              <Submit type="submit" onClick={handleSubmit}>Send</Submit>
            </Form>
          </LeftMain>
          <RightMain>
            <MapChart/>
          </RightMain>
        </Main>
      </Container>
    </Section>
  );
}
export default HERO;
