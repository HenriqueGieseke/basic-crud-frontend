import React from 'react';
import styled, { keyframes } from 'styled-components';
import bigLogo from '../../../assets/bigLogo.svg';
import DatabaseInfoBox from '../../DatabaseInfoBox';

const ArrivalContent = () => {
  return (
    <Container>
      <ArrivalBox>
        <LogoWrapper>
          <TextWrapper>
            <h1>basic</h1>
            <h1>CRUD</h1>
          </TextWrapper>
          <img src={bigLogo} alt="" />
        </LogoWrapper>
      </ArrivalBox>
      <DatabaseInfoBox />
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.section`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
    height: 200%;
  }
`;

const ArrivalBox = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 25px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    animation: ${FadeIn} 1.5s ease;
  }

  @media (max-width: 950px) {
    width: 80%;
    height: 80%;
  }
`;

const LogoWrapper = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: #f3f3f3;
  animation: ${FadeIn} 1.5s ease;


  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
`;

export default ArrivalContent;
