import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ModalUser from './ModalUser';

const UserBox = ({ userInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <ModalUser showModal={showModal} setShowModal={setShowModal} user={userInfo}/>
      <UserWrapper onClick={openModal}>
        <img src={userInfo.picture} alt="user" />
        <UserContentWrapper>
          <h5>{`${userInfo.name.first} ${userInfo.name.last}`}</h5>
          <UserInfoWrapper>
            <h4>{userInfo.location.country}</h4>
            <span>{userInfo.location.state}</span>
          </UserInfoWrapper>
        </UserContentWrapper>
      </UserWrapper>
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;
`;

const UserWrapper = styled.div`
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background-color: #f3f3f3;
  }

  img {
    height: 44px;
    width: 44px;
    margin-right: 2rem;
    padding: 10px;
    border-radius: 50%;
    background: #f3f3f3;
  }
`;

const UserInfoWrapper = styled.div`
  background: #f3f3f3;
  padding: 7px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 12px;
    font-weight: normal;
    margin-right: 4px;
  }

  span {
    font-size: 12px;
    font-weight: lighter;
  }
`;

const UserContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5 {
    padding: 10px;
    background: #f3f3f3;
    margin: 0;
    padding: 7px;
    border-radius: 5px;
  }
`;

export default UserBox;
