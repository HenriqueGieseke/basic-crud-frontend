import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import databaseInfo from '../assets/databaseInfo.svg';
import spinner from '../assets/Spinner-1s-200px.gif';

const DatabaseInfoBox = () => {
  const [dbStats, setDbStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://basic-crud-backend-hgfdev.herokuapp.com/databaseStats');
      setDbStats(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Wrapper>
          <h2>Loading...</h2>
          <StyledSpinner src={spinner} alt="loading spinner" />
        </Wrapper>
      </Container>
    );
  } else {
    return (
      <Container>
        <TitleWrapper>
          <h3>Database Info</h3>
          <img src={databaseInfo} alt="" />
        </TitleWrapper>

        <ContextBox>
          <InfoWrapper>
            <span>Number of users</span>
            <InfoNumber>{dbStats.collectionSize}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>Male</span>
            <InfoNumber>{dbStats.males}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>Female</span>
            <InfoNumber>{dbStats.females}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>Average age</span>
            <InfoNumber>{dbStats.roundAvgAge}</InfoNumber>
          </InfoWrapper>
        </ContextBox>

        <ContextBox>
          <h4>Top Users Countries</h4>

          <InfoWrapper>
            <span>{dbStats.countryTopOneName}</span>
            <InfoNumber>{dbStats.countryTopOneTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.countryTopTwoName}</span>
            <InfoNumber>{dbStats.countryTopTwoTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.countryTopThreeName}</span>
            <InfoNumber>{dbStats.countryTopThreeTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.countryTopFourName}</span>
            <InfoNumber>{dbStats.countryTopFourTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.countryTopFiveName}</span>
            <InfoNumber>{dbStats.countryTopFiveTotal}</InfoNumber>
          </InfoWrapper>
        </ContextBox>

        <LastContextBox>
          <h4>Top Users States</h4>

          <InfoWrapper>
            <span>{dbStats.stateTopOneName}</span>
            <InfoNumber>{dbStats.stateTopOneTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.stateTopTwoName}</span>
            <InfoNumber>{dbStats.stateTopTwoTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.stateTopThreeName}</span>
            <InfoNumber>{dbStats.stateTopThreeTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.stateTopFourName}</span>
            <InfoNumber>{dbStats.stateTopFourTotal}</InfoNumber>
          </InfoWrapper>

          <InfoWrapper>
            <span>{dbStats.stateTopFiveName}</span>
            <InfoNumber>{dbStats.stateTopFiveTotal}</InfoNumber>
          </InfoWrapper>
        </LastContextBox>
      </Container>
    );
  }
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 25px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 950px) {
    width: 80%;
    height: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 1.5s ease;

  margin-bottom: 20px;

  img {
    width: 25px;
    height: 25px;
    margin-left: 13px;
  }

  h3 {
    font-weight: 500;
    font-size: 25px;
  }
`;

const ContextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
  animation: ${FadeIn} 1.5s ease;

  width: 100%;

  h4 {
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

const LastContextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;

  width: 100%;

  h4 {
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

const InfoWrapper = styled.div`
  width: 50%;
  margin-bottom: 7px;
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const InfoNumber = styled.span`
  font-weight: 600;
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

export default DatabaseInfoBox;
