import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import '../style/modal.css';

const ModalUser = ({ showModal, setShowModal, user }) => {
  const closeModal = (e) => {
    setShowModal(false);
  };

  return (
    <ReactModal
      overlayClassName="modal"
      className="content"
      isOpen={showModal}
      onClick={closeModal}
      appElement={document.getElementById('root') || undefined}
    >
      <ButtonWrapper>
        <StyledButton onClick={closeModal}>X</StyledButton>
      </ButtonWrapper>
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
    </ReactModal>
  );
};

const UpperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    max-width: 126px;
    max-height: 126px;
    border-radius: 50%;
    margin-top: 2rem;
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
  padding-left: 4rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  span {
    margin-bottom: 1rem;
    background: #f3f3f3;
    border-radius: 6px;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const StyledButton = styled.button`
  font-size: 2rem;
  border: none;
  cursor: pointer;
  background: #fff;
  align-self: flex-start;
  border-radius: 50%;
  padding: 3px;

  transition: 0.5s;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default ModalUser;
