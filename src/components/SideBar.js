import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import createIcon from '../assets/create.svg';
import retrieveIcon from '../assets/retrieve.svg';
import updateIcon from '../assets/update.svg';
import deleteIcon from '../assets/delete.svg';

const SideBar = () => {
  return (
    <Container>
      <FirstLinkWrapper>
        <Link to="/create">create</Link>
        <img src={createIcon} alt="" />
      </FirstLinkWrapper>

      <LinkWrapper>
        <Link to="/retrieve">retrieve</Link>
        <img src={retrieveIcon} alt="" />
      </LinkWrapper>

      <RetrieveLinksWrapper>
        <Link to="/retrieve/random">retrieve one random</Link>
        <Link to="/retrieve/byName">retrieve by name</Link>
        <Link to="/retrieve/byRegion">retrieve by region</Link>
      </RetrieveLinksWrapper>

      <LinkWrapper>
        <Link to="/update">update</Link>
        <img src={updateIcon} alt="" />
      </LinkWrapper>

      <LinkWrapper>
        <Link to="/delete">delete</Link>
        <img src={deleteIcon} alt="" />
      </LinkWrapper>
    </Container>
  );
};

const Container = styled.aside`
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;

  background: #ffffff;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  width: 195px;
  margin-bottom: 33px;
  padding-left: 55px;
  display: flex;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background-color: #f3f3f3;
  }

  a {
    width: 47px;
    display: inline-block;
    margin-right: 17px;
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

  img {
    height: 16px;
  }
`;

const FirstLinkWrapper = styled.div`
  width: 195px;
  margin-top: 33px;
  margin-bottom: 33px;
  padding-left: 55px;
  display: flex;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background-color: #f3f3f3;
  }

  a {
    width: 47px;
    display: inline-block;
    margin-right: 17px;
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

  img {
    height: 16px;
  }
`;

const RetrieveLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;
  padding-left: 75px;

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: black;
    font-weight: 300;
    border-bottom: 1px solid #ffffff;
    transition: 0.5s;

    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

export default SideBar;
