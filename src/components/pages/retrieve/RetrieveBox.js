import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import DatabaseInfoBox from '../../DatabaseInfoBox';

const RetrieveBox = () => {
  return (
    <Container>
      <ArrivalBox>
        <Wrapper>
          <Link to="/retrieve/random">
            retrieve one random user
          </Link>
          <Link to="/retrieve/byName">
            retrieve by name
          </Link>
          <Link to="/retrieve/byRegion">
            retrieve by region
          </Link>
        </Wrapper>
      </ArrivalBox>
      <DatabaseInfoBox />
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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

const ArrivalBox = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 25px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 950px) {
    width: 80%;
    height: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    transition: 0.3s;
    font-weight: 400;
    margin-bottom: 2rem;
    color: black;
    cursor: pointer;

    &:hover {
      color: #707070;
    }
  }
`;

export default RetrieveBox;
