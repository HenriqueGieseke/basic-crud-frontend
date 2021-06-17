import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import userDeletedIcon from '../../../assets/deleteIcon.svg';

const DeleteUserView = ({ user }) => {
  const [deleteUser, setDeleteUser] = useState(false);
  const [deleteReady, setDeleteReady] = useState(false);

  const isFirstRun = useRef(true);

  const refreshPage = () => {
    window.location.reload();
  };

  const handleDelete = () => {
    setDeleteUser(false);
    setDeleteReady(true);
  };

  const handleSelectDelete = () => {
    setDeleteUser(true);
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    try {
      const deleteUser = async () => {
        await axios.delete(`https://basic-crud-backend-hgfdev.herokuapp.com/deleteUser/${user._id}`);

      };
      deleteUser();
    } catch (error) {
      console.log(error);
    }
  }, [deleteReady]);

  if (deleteUser) {
    return (
      <ContentBox>
        <UserDeletedWrapper>
          <h2>Are you sure?</h2>
        </UserDeletedWrapper>
        <ButtonsWrapper>
          <StyledButton onClick={refreshPage}>NO</StyledButton>
          <StyledButton onClick={handleDelete}>YES</StyledButton>
        </ButtonsWrapper>
      </ContentBox>
    );
  } else if (deleteReady) {
    return (
      <ContentBox>
        <UserDeletedWrapper>
          <h2>User Deleted</h2>
          <img src={userDeletedIcon} alt="user deleted" />
        </UserDeletedWrapper>
        <UserDeletedWrapper>
          <StyledButton onClick={refreshPage}>Back</StyledButton>
        </UserDeletedWrapper>
      </ContentBox>
    );
  } else {
    return (
      <ContentBox>
        <UpperWrapper>
          <img src={user.picture} alt="user" />
          <h1>
            {user.name.first} {user.name.last}
          </h1>
          <span>{user.location.country}</span>
        </UpperWrapper>
        <LowerWrapper>
          <span>
            <strong>State: </strong>
            {user.location.state}
          </span>
          <span>
            <strong>City: </strong>
            {user.location.city}
          </span>
          <span>
            <strong>Street: </strong>
            {user.location.street.name} {user.location.street.number}
          </span>
          <span>
            <strong>E-mail: </strong>
            {user.email}
          </span>
          <span>
            <strong>Username: </strong>
            {user.login.username}
          </span>
          <span>
            <strong>age: </strong>
            {user.dob.age}
          </span>
          <span>
            <strong>Cell phone: </strong>
            {user.cell}
          </span>
          <span>
            <strong>Phone: </strong>
            {user.phone}
          </span>
        </LowerWrapper>
        <ButtonsWrapper>
          <StyledButton onClick={refreshPage}>BACK</StyledButton>
          <StyledButton onClick={handleSelectDelete}>DELETE</StyledButton>
        </ButtonsWrapper>
      </ContentBox>
    );
  }
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContentBox = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 25px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    animation: ${FadeIn} 1.5s ease;
  }

  h5 {
    font-weight: 300;
    font-size: 19px;
  }

  @media (max-width: 950px) {
    width: 80%;
    height: 80%;
  }
`;

const UpperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;

  h1 {
    background: #f3f3f3;
    border-radius: 6px;
    padding-right: 1rem;
    padding-left: 1rem;

    text-align: center;
    margin-top: 2rem;
  }

  img {
    max-width: 126px;
    max-height: 126px;
    border-radius: 50%;
  }

  span {
    margin-bottom: 3.5rem;
    background: #f3f3f3;
    border-radius: 6px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const LowerWrapper = styled.div`
  padding-left: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;

  span {
    margin-bottom: 1rem;
    background: #f3f3f3;
    border-radius: 6px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  animation: ${FadeIn} 1.5s ease;
`;

const StyledButton = styled.button`
  height: 34px;
  width: 70px;
  margin-top: 1rem;
  background: #000000;
  border-radius: 5px;
  border: none;
  color: #ffffff;

  cursor: pointer;
  animation: ${FadeIn} 1.5s ease;

  font-size: 0.65rem;
  font-weight: 700;

  transition: 0.2s;

  &:hover {
    background-color: #454545;
  }

  &:active {
    background-color: #353535;
  }
`;

const UserDeletedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 1.5s ease;

  h2 {
    animation: ${FadeIn} 1.5s ease;
  }

  img {
    margin-left: 10px;
    animation: ${FadeIn} 1.5s ease;
  }
`;

export default DeleteUserView;
