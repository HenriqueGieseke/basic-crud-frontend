import React from 'react';
import styled from 'styled-components';
import NavBar from '../../NavBar';
import RetrieveAndDeleteBox from './RetrieveAndDeleteBox';
import SideBar from '../../SideBar';

const DeleteUser = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <RetrieveAndDeleteBox />
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

export default DeleteUser;
