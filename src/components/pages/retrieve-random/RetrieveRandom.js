import React from 'react'
import styled from 'styled-components';
import NavBar from '../../NavBar';
import RetrieveRandomBox from './RetrieveRandomBox';
import SideBar from '../../SideBar';

const RetrieveRandom = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <RetrieveRandomBox />
      </MainContainer>
    </Container>
  )
};

const Container = styled.div`
  height: 100%;
`;

const MainContainer = styled.section`
  height: 93%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default RetrieveRandom
