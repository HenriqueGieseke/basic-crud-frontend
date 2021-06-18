import React from 'react';
import styled from 'styled-components';
import NavBar from '../../NavBar';
import RetrieveByRegionBox from './RetrieveByRegionBox';
import SideBar from '../../SideBar';

const RetrieveByRegion = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <RetrieveByRegionBox />
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  @media (max-width: 950px) {
    min-height: 900px;
  }
`;

const MainContainer = styled.section`
  height: 93%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default RetrieveByRegion;
