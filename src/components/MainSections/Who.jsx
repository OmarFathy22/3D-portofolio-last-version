import React from "react";
import styled from "styled-components";
import Test from "../componentSection/CUBE";
import bg from '../../assets/img/bg.jpeg'
function HERO() {
  const Section = styled.div`
  background-image: url(${bg});
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 1100px) {
      height: 200vh;
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
    flex-direction: row-reverse;
    @media (max-width: 1100px) {
      flex-direction: column;
    }
  `;
  const LeftMain = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1100px) {
      justify-content: center;
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
  `;

  return (
    <Section>
      <Container>
        <Main>
          <LeftMain>
            <Text>Think outside the square space</Text>
            <SubContainer>
              <Dash />
              <Disc>Who we Are</Disc>
            </SubContainer>
            <Wise>
            a creative group of designers and developers with a passion for the arts.
            </Wise>
            <LearnBtn>See our Works</LearnBtn>
          </LeftMain>
          <RightMain>
            <Test/>
          </RightMain>
        </Main>
      </Container>
    </Section>
  );
}
export default HERO;
