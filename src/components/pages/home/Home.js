import React from 'react';
import styled from 'styled-components';
import ArrivalContent from './ArrivalContent';
import NavBar from '../../NavBar';
import SideBar from '../../SideBar';

const Home = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <ArrivalContent />
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

export default Home;
