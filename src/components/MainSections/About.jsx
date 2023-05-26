import React from "react";
import styled from "styled-components";
import { useState } from "react";
import WebDesign from "../ModelsLinks/WebDesign";
import SocialMedia from "../ModelsLinks/SocialMedia";
import ProductDesign from "../ModelsLinks/ProductDesign";
import Development from "../ModelsLinks/Development";
import Illustration from "../ModelsLinks/Illustration";
import bg from '../../assets/img/bg.jpeg'
function HERO() {
  const [Work, setWork] = useState("Web Design");
  const Section = styled.div`
  background-image: url(${bg});
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1100px) {
      height:"100%"
    }
  `;
  const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `;
  const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }
  `;

  const LeftMain = styled.section`
    flex: 1.3;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 1100px) {
      padding-top: 35px;
      flex: 0.7;
      justify-content: center;
    }
  `;
  const ProductList = styled.ul`
    width: 100%;
    @media screen and (max-width: 1100px) {
      text-align: center;
    }
  `;

  const ProductItem = styled.h1`
    font-size: 90px;
    cursor: pointer;
    position: relative;
    color: transparent;
    -webkit-text-stroke: 1px white;
    ::after {
      content: "${(props) => props.text}";
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      overflow: hidden;
      white-space: nowrap;
      background-color: red;
      background-image: linear-gradient(45deg, #f3ec78, #af4261, #4d024d);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
    @media screen and (max-width: 1100px) {
      ::after {
    
        left: 0px !important;
        top: 0 !important;
        width: 0px;
      }
    }
    &:hover {
      ::after {
        animation: animated-text linear 1s both;
      }
    }

    @keyframes animated-text {
      to {
        width: 100%;
      }
    }
    @media screen and (max-width: 1100px){
      font-size:40px
    }
  `;
  const RightMain = styled.section`
    border:"1px solid red",
    flex: 7 !important;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const list = [
    "Illustration",
    "Social Media",
    "Development",
    "Web Design",
    "Design",
  ];
  return (
    <Section>
      <Container>
        <Main>
          <LeftMain>
            {list.map((item) => {
              return (
                <ProductItem
                  key={item}
                  text={item}
                  onClick={() => {
                    setWork(item);
                    console.log(item);
                  }}
                >
                  {item}
                </ProductItem>
              );
            })}
          </LeftMain>
          <RightMain>
            {Work === "Web Design" && <WebDesign />}
            {Work === "Social Media" && <SocialMedia />}
            {Work === "Product Design" && <ProductDesign />}
            {Work === "Illustration" && <Illustration />}
            {Work === "Development" && <Development />}
          </RightMain>
        </Main>
      </Container>
    </Section>
  );
}
export default HERO;
