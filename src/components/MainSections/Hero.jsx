import React , {useState , useEffect} from "react";
import styled from "styled-components";
import logo from "../../assets/img/fashion-removebg-preview.png";
import search from "../../assets/img/search.png";
import moon from "../../assets/img/moon.png";
import { useMediaQuery } from 'react-responsive'
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import bg from '../../assets/img/bg.jpeg'

import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
function HERO() {
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })
  const Section = styled.div`
  background-image: url(${bg});
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
      @media (max-width: 1100px) {
        height:115vh;
      }
  `;
  const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  
  `;
  const AppBar = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
  `;

  const Img = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    cursor:pointer;
  `;
  const List = styled.ul`
    display: flex;
    gap: 20px;

    @media (max-width: 1100px) {
      display: none;
    }
  `;
  const ListItem = styled.li`
    font-weight: 530;
    font-size: 15px;
    letter-spacing: 0.6px;
    cursor: pointer;
    list-style: none;
  `;
  const SearchIcon = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
    @media (max-width: 1100px) {
      display: none;
    }
  `;
  const Button = styled.button`
    background-color: #da4ea2;
    border: none;
    padding: 10px 25px;
    border-radius: 4px;
    cursor: pointer;
  `;
  const LeftLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
  `;
  const RightLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
  `;
  const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 9;
    align-items: center;
    height:100%;
    width:100%;
    @media (max-width: 1100px) {
      height: 200vh !important;
      flex-direction: column;
    }
    
  `;
  const LeftMain = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height:500px;
    justify-content:flex-start;
    padding-top:20px;
    @media (max-width: 1100px) {
      height: 100vh;
      align-content: center;
      align-items: center;
      text-align:center;
    }

  `;
  const SubContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `;
  const Text = styled.h1`
    font-size: 80px;
  `;
  const Dash = styled.div`
    width: 25px;
    height: 4px;
    background-color: gray;
    border-radius: 10px;
  `;
  const Disc = styled.h2`
    color: #da4ea2;
  `;
  const Wise = styled.h3`
    font-size: 24px;
    color: lightgray;
    font-weight: 300;
  `;
  const LearnBtn = styled.button`
    background-color: #da4ea2;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    width: fit-content;
  `;
  const RightMain = styled.section`
    flex: 1;
    height:700px;
    width: 500px;
    position: relative;
    justify-content:center;
    align-items:flex-start;
      @media (max-width: 1100px) {
      justify-content: center;
      align-content: center;
      align-items: center;
      text-align:center;
    }
    
  `;
  const Moon = styled.img`
    height: 500px;
    width: 500px
    object-fit: contain;
    position: absolute;
    top:40px;
    right:120px;
    animation: animate-img 2s infinite ease-in-out alternate;
    
    @keyframes animate-img {
     to{
      transform: translateY(20px);
     }
    }
    @media (max-width: 1100px) {
    
      height: 260px;
      width: 260px;
      left: 120px;
      top: 40px;

    }
  `;

  const list = ["Home", "Studio", "Works", "Contact"];
  return (
    <Section>
      <Container>
        <AppBar>
          <LeftLinks>
            <Img src={logo} />
            <List>
              {list.map((item) => {
                return <ListItem key={item}>{item}</ListItem>;
              })}
            </List>
          </LeftLinks>
          <RightLinks>
            <SearchIcon src={search} />
            <Button>Hire me</Button>
          </RightLinks>
        </AppBar>
        <Main>
          <LeftMain>
            <Text>Think. Make. Solve.</Text>
            <SubContainer>
              <Dash />
              <Disc>What we Do</Disc>
            </SubContainer>
            <Wise>
              we enjoy creating delightful, human-centered digital experiences.
            </Wise>
            <LearnBtn>Learn More</LearnBtn>
          </LeftMain>
          <RightMain className="animated_img">
            <Canvas style={{height:"650px" , width:"100%"}} className="spere">
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <OrbitControls enableZoom={false} />
              <Sphere args={[1, 100, 120]} scale={isMobile?2:2.6}>
                <MeshDistortMaterial
                  color="#56219c"
                  attach="material"
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            <Moon src={moon}/>
          </RightMain>
        </Main>
      </Container>
    </Section>
  );
}
export default HERO;
