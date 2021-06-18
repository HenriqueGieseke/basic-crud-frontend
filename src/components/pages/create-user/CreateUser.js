import React from 'react';
import styled from 'styled-components';
import CreateUserBox from './CreateUserBox';
import NavBar from '../../NavBar';
import SideBar from '../../SideBar';

const CreateUser = () => {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <SideBar />
        <CreateUserBox />
      </MainContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;

  @media (max-width: 950px) {
    min-height: 1150px;
  }
`;

const MainContainer = styled.section`
  height: 93%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default CreateUser;
