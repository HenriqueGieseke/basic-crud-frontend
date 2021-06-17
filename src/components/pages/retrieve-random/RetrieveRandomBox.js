import React, { useState, useEffect } from 'react';
import spinner from '../../../assets/Spinner-1s-200px.gif';
import styled, { keyframes } from 'styled-components';
import DatabaseInfoBox from '../../DatabaseInfoBox';
import axios from 'axios';

const RetrieveRandomBox = () => {
  const [getUser, setGetUser] = useState(true);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getNewUser = () => {
    setGetUser((prev) => !prev);
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchUser = async () => {
      const { data } = await axios.get(`https://basic-crud-backend-hgfdev.herokuapp.com/randomUser`);

      setUser(data);
      setIsLoading(false);
    };

    fetchUser();
  }, [getUser]);

  if (isLoading) {
    return (
      <Container>
        <ContentBox>
          <Wrapper>
            <h2>Loading...</h2>
            <StyledSpinner src={spinner} />
          </Wrapper>
        </ContentBox>
        <DatabaseInfoBox />
      </Container>
    );
  } else {
    return (
      <Container>
        <ContentBox>
          <UpperWrapper>
            <img src={user[0].picture} alt="user" />
            <h1>
              {user[0].name.first} {user[0].name.last}
            </h1>
            <span>{user[0].location.country}</span>
          </UpperWrapper>
          <LowerWrapper>
            <span>
              <strong>State: </strong>
              {user[0].location.state}
            </span>
            <span>
              <strong>City: </strong>
              {user[0].location.city}
            </span>
            <span>
              <strong>Street: </strong>
              {user[0].location.street.name} {user[0].location.street.number}
            </span>
            <span>
              <strong>E-mail: </strong>
              {user[0].email}
            </span>
            <span>
              <strong>Username: </strong>
              {user[0].login.username}
            </span>
            <span>
              <strong>Age: </strong>
              {user[0].dob.age}
            </span>
            <span>
              <strong>Cell phone: </strong>
              {user[0].cell}
            </span>
            <span>
              <strong>Phone: </strong>
              {user[0].phone}
            </span>
          </LowerWrapper>
          <ButtonWrapper>
            <StyledButton onClick={getNewUser}>New User</StyledButton>
          </ButtonWrapper>
        </ContentBox>
        <DatabaseInfoBox />
      </Container>
    );
  }
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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
    margin-bottom: 1rem;
  }

  img {
    max-width: 128px;
    max-height: 128px;
    border-radius: 50%;
    margin-top: 2rem;
  }

  span {
    margin-bottom: 2rem;
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

const StyledSpinner = styled.img`
  height: 60px;
`;

const ContentBox = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 25px;
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h5 {
    font-weight: 300;
    font-size: 19px;
  }

  @media (max-width: 950px) {
    width: 80%;
    height: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const Container = styled.section`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
    height: 200%;
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

const StyledButton = styled.button`
  height: 34px;
  width: 70px;
  background: #000000;
  border-radius: 5px;
  border: none;
  margin-left: 1rem;
  margin-bottom: 1rem;
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default RetrieveRandomBox;
