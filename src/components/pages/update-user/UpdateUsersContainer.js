import React, { useEffect, useRef, useState } from 'react';
import spinner from '../../../assets/Spinner-1s-200px.gif';
import styled, { keyframes } from 'styled-components';
import UpdateUserBox from './UpdateUserBox';

const UpdateUsersContainer = ({ users, isLoading, found, setUserToUpdate }) => {
  const [userUpdate, setUserUpdate] = useState({});
  const [userSelected, setUserSelected] = useState(false);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    found(true);
    setUserToUpdate(userUpdate);
  }, [userSelected, userUpdate, found, setUserToUpdate]);

  if (userSelected) {
    return null;
  } else if (isLoading) {
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
          return (
            <UpdateUserBox
              key={user._id}
              setSelected={setUserSelected}
              setUser={setUserUpdate}
              userInfo={user}
            />
          );
        })}
      </Container>
    );
  } else {
    return (
      <ContainerScroll>
        {users.map((user) => {
          return (
            <UpdateUserBox
              key={user._id}
              setSelected={setUserSelected}
              setUser={setUserUpdate}
              userInfo={user}
            />
          );
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

export default UpdateUsersContainer;
