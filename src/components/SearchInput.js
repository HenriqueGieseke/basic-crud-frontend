import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = ({ getQuery, placeHolder }) => {
  const searchFieldCreator = (field) => {
    const searchField = field
      .toLowerCase()
      .normalize('NFD')
      .replace(/([\u0300-\u036f]|[\s])/g, '');

    return searchField;
  };
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    const cleanInput = searchFieldCreator(text);
    getQuery(cleanInput);
    event.preventDefault();
  };

  const handleChange = (e) => {
    setText(e);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <SearchInputField
        type="text"
        placeholder={placeHolder}
        onChange={(e) => handleChange(e.target.value)}
        value={text}
        autoFocus
      />
      <SearchButton type="submit">SEARCH</SearchButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputField = styled.input`
  padding-left: 1rem;
  width: 50%;
  height: 34px;
  border: none;
  border-radius: 5px;
  background: #f3f3f3;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    filter: brightness(0.95);
  }
`;

const SearchButton = styled.button`
  height: 34px;
  width: 70px;
  background: #000000;
  border-radius: 5px;
  border: none;
  margin-left: 1rem;
  color: #ffffff;

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

export default SearchInput;
