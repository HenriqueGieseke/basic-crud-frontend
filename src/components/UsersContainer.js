import spinner from '../assets/Spinner-1s-200px.gif';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import UserBox from './UserBox';

const UsersContainer = ({ users, isLoading }) => {
  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading...</h2>
        <StyledSpinner src={spinner} />
      </Wrapper>
    );
  } else if (users.length <= 5) {
    return (
      <Container>
        {users.map((user) => {
          return <UserBox key={user._id} userInfo={user} />;
        })}
      </Container>
    );
  } else {
    return (
      <ContainerScroll>
        {users.map((user) => {
          return <UserBox key={user._id} userInfo={user} />;
        })}
      </ContainerScroll>
    );
  }
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const ContainerScroll = styled.div`
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: 950px) {
    height: 70%;
    max-height: 850px;
  }
`;

const Wrapper = styled.div`
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 1.5s ease;

  img {
    margin-left: 10px;
  }
`;

const StyledSpinner = styled.img`
  height: 60px;
`;

export default UsersContainer;
