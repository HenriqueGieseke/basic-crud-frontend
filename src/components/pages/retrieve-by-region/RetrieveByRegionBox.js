import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import DatabaseInfoBox from '../../DatabaseInfoBox';
import retrieveTitleIcon from '../../../assets/retrieveTitleIcon.svg';
import SearchInput from '../../SearchInput';
import axios from 'axios';
import UsersContainer from '../../UsersContainer';
import userNotFound from '../../../assets/notFound.svg';

const RetrieveByRegionBox = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const fetchUser = async () => {
      setIsLoading(true);
      setSearchActive(true);
      const { data } = await axios.get(`https://basic-crud-backend-hgfdev.herokuapp.com/region/${query}`);

      if (data === 'not found') {
        setNotFound(true);
        return;
      } else {
        setUsers(data);
        setNotFound(false);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [query]);

  if (notFound) {
    return (
      <Container>
        <ContentBox>
          <UpperContentWrapper>
            <TitleWrapper>
              <h3>Retrieve User</h3>
              <img src={retrieveTitleIcon} alt="" />
            </TitleWrapper>
            <h5>Search By Region</h5>
            <SearchInput
              getQuery={(query) => {
                setQuery(query);
              }}
              placeHolder="search country, state or city"
            />
          </UpperContentWrapper>
          <Wrapper>
            <h2>User Not Found</h2>
            <img src={userNotFound} alt="not found icon" />
          </Wrapper>
        </ContentBox>
        <DatabaseInfoBox />
      </Container>
    );
  } else if (!searchActive) {
    return (
      <Container>
        <ContentBox>
          <UpperContentWrapper>
            <TitleWrapper>
              <h3>Retrieve User</h3>
              <img src={retrieveTitleIcon} alt="" />
            </TitleWrapper>
            <h5>Search By Region</h5>
            <SearchInput
              getQuery={(query) => {
                setQuery(query);
              }}
              placeHolder="search country, state or city"
            />
          </UpperContentWrapper>
        </ContentBox>
        <DatabaseInfoBox />
      </Container>
    );
  } else {
    return (
      <Container>
        <ContentBox>
          <UpperContentWrapper>
            <TitleWrapper>
              <h3>Retrieve User</h3>
              <img src={retrieveTitleIcon} alt="" />
            </TitleWrapper>
            <h5>Search By Region</h5>
            <SearchInput
              getQuery={(query) => {
                setQuery(query);
              }}
              placeHolder="search region"
            />
          </UpperContentWrapper>

          <UsersContainer users={users} isLoading={isLoading} />
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

const UpperContentWrapper = styled.div`
  height: 30%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;
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
    height: 80%;
    width: 80%;
    max-height: 1100px;
    justify-content: space-between;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0px;

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

export default RetrieveByRegionBox;
