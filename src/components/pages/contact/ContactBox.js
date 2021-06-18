import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import DatabaseInfoBox from '../../DatabaseInfoBox';

const ContactBox = () => {
  return (
    <Container>
      <ArrivalBox>
        <Wrapper>
          <p>For any contact please reach me through my GitHub:</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/HenriqueGieseke"
          >
            My GitHub
          </a>
          <Link  to="/">
            Home
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
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;
  

  p {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    margin-bottom: 1rem;
    @media (max-width: 950px) {
    font-size: 0.9rem;
  }
  }

  a {
    text-decoration: none;
    font-size: 15px;
    transition: 0.5s;
    font-weight: 700;
    margin-bottom: 2rem;
    color: black;
    cursor: pointer;

    &:hover {
      color: #606060;
    }
  }
`;

export default ContactBox;
