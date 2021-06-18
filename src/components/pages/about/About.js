import React from 'react';
import styled from 'styled-components';
import AboutBox from './AboutBox';
import NavBar from '../../NavBar';
import SideBar from '../../SideBar';

const About = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <AboutBox />
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  @media (max-width: 950px) {
    min-height: 800px;
  }
`;

const MainContainer = styled.section`
  height: 93%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default About;
