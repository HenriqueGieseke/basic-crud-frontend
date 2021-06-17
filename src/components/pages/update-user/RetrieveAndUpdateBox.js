import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import DatabaseInfoBox from '../../DatabaseInfoBox';
import updateUser from '../../../assets/updateUser.svg';
import SearchInput from '../../SearchInput';
import axios from 'axios';
import userNotFound from '../../../assets/notFound.svg';
import UpdateUsersContainer from './UpdateUsersContainer';
import UpdateUserForm from './UpdateUserForm';

const RetrieveAndUpdateBox = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState({});

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const fetchUser = async () => {
      setIsLoading(true);
      setSearchActive(true);
      const { data } = await axios.get(`https://basic-crud-backend-hgfdev.herokuapp.com/user/${query}`);

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

  if (userFound) {
    return (
      <Container>
        <UpdateUserForm user={userToUpdate} />
        <DatabaseInfoBox />
      </Container>
    );
  } else if (notFound) {
    return (
      <Container>
        <ContentBox>
          <UpperContentWrapper>
            <TitleWrapper>
              <h3>Update User</h3>
              <img src={updateUser} alt="" />
            </TitleWrapper>
            <h5>Search User to Update</h5>
            <SearchInput
              getQuery={(query) => {
                setQuery(query);
              }}
              placeHolder="search name"
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
              <h3>Update User</h3>
              <img src={updateUser} alt="" />
            </TitleWrapper>
            <h5>Search User to Update</h5>
            <SearchInput
              getQuery={(query) => {
                setQuery(query);
              }}
              placeHolder="search name"
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
              <h3>Update User</h3>
              <img src={updateUser} alt="" />
            </TitleWrapper>
            <h5>Search User to Update</h5>
            <SearchInput
              getQuery={(query) => {
                setQuery(query);
              }}
              placeHolder="search name"
            />
          </UpperContentWrapper>

          <UpdateUsersContainer
            found={setUserFound}
            setUserToUpdate={setUserToUpdate}
            users={users}
            isLoading={isLoading}
          />
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
    width: 80%;
    height: 80%;
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

export default RetrieveAndUpdateBox;
