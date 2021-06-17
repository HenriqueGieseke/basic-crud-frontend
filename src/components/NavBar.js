import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import smallLogo from '../assets/smallLogo.svg';
import createIcon from '../assets/create.svg';
import retrieveIcon from '../assets/retrieve.svg';
import updateIcon from '../assets/update.svg';
import deleteIcon from '../assets/delete.svg';

const NavBar = () => {
  return (
    <Container>
      <LogoWrapper>
        <h2>
          <Link to="/">basic-CRUD</Link>
        </h2>
        <img src={smallLogo} alt="logo" />
      </LogoWrapper>
      <MobileLinksWrapper>
        <Link to="/create">
          C <img src={createIcon} alt="create" />
        </Link>
        <Link to="/retrieve">
          R <img src={retrieveIcon} alt="retrieve" />
        </Link>
        <Link to="/update">
          U <img src={updateIcon} alt="update" />
        </Link>
        <Link to="/delete">
          D <img src={deleteIcon} alt="delete" />
        </Link>
      </MobileLinksWrapper>

      <LinksWrapper>
        <Link to="/contact">contact</Link>
        <Link to="/about">about</Link>
      </LinksWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 7%;
  background: #f3f3f3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 950px) {
    margin-bottom: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 32px;

  h2 {
    font-size: 25px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    width: 28px;
    height: 29px;
    margin-left: 15px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const MobileLinksWrapper = styled.div`
  display: none;

  @media (max-width: 1150px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 32px;

    a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    margin-bottom: 5px solid;
    border-bottom: 1px solid #f3f3f3;
    transition: 0.4s;

    &:hover {
      border-bottom: 1px solid;
    }
  }

  img {
    margin-right:20px;
  }
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 32px;

  a {
    margin-left: 21px;
    text-decoration: none;
    color: black;
    font-size: 18px;
    border-bottom: 1px solid #f3f3f3;
    transition: 0.4s;

    &:hover {
      border-bottom: 1px solid;
    }
  }
`;

export default NavBar;
