import React from 'react';
import styled from 'styled-components';
import NavBar from '../../NavBar';
import RetrieveByNameBox from '../../RetrieveByNameBox';
import SideBar from '../../SideBar';

const RetrieveByName = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <RetrieveByNameBox />
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

export default RetrieveByName;
