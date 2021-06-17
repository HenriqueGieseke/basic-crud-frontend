import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import DatabaseInfoBox from '../../DatabaseInfoBox';
import axios from 'axios';
import createUserIcon from '../../../assets/createUser.svg';
import userCreated from '../../../assets/userCreated.svg';

const CreateUserBox = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [streetName, setStreetName] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');
  const [nationality, setNationality] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [phone, setPhone] = useState('');
  const [picture, setPicture] = useState('');
  const [newUser, setNewUser] = useState({});
  const [created, setCreated] = useState(false);

  const isFirstRun = useRef(true);

  const handleSubmit = () => {
    setNewUser({
      name: {
        first: firstName,
        last: lastName,
      },
      gender: gender,
      login: {
        username: username,
        password: password,
      },
      dob: {
        age: age,
      },
      email: email,
      location: {
        street: {
          name: streetName,
          number: streetNumber,
        },
        city: city,
        state: state,
        country: country,
        postcode: postcode,
      },
      nationality: nationality,
      cell: cellphone,
      phone: phone,
      picture: picture,
    });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    try {
      const createUser = async () => {
        await axios({
          method: 'post',
          url: 'https://basic-crud-backend-hgfdev.herokuapp.com/createUser',
          data: newUser,
        });

        setCreated(true);
      };

      createUser();
    } catch (error) {
      console.log(error);
    }
  }, [newUser]);

  if (created) {
    return (
      <Container>
        <UserCreatedContentBox>
          <UserCreatedWrapper>
            <h2>User Created</h2>
            <img src={userCreated} alt="user created" />
          </UserCreatedWrapper>
          <UserCreatedWrapper>
            <StyledBackButton onClick={refreshPage}>Back</StyledBackButton>
          </UserCreatedWrapper>
        </UserCreatedContentBox>
        <DatabaseInfoBox />
      </Container>
    );
  } else {
    return (
      <Container>
        <ContentBox>
          <StyledForm>
            <TitleWrapper>
              <h3>Create User</h3>
              <img src={createUserIcon} alt="create user icon" />
            </TitleWrapper>
            <InputWrapper>
              <label>
                first name:
                <input
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  value={firstName}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                last name:
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  value={lastName}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                gender:
                <StyledSelect
                  onChange={(e) => setGender(e.target.value)}
                  defaultValue=""
                >
                  <option hidden value="">
                    gender
                  </option>
                  <option>female</option>
                  <option>male</option>
                </StyledSelect>
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                age:
                <SmallInput
                  min="1"
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  value={age}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                username:
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  value={username}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                password:
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  value={password}
                />
              </label>
            </InputWrapper>
            <SectionWrapper>
              <label>
                e-mail:
                <LargeInput
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                />
              </label>
            </SectionWrapper>
            <InputWrapper>
              <label>
                street name:
                <LargeInput
                  onChange={(e) => setStreetName(e.target.value)}
                  type="text"
                  value={streetName}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                number:
                <SmallInput
                  min="1"
                  onChange={(e) => setStreetNumber(e.target.value)}
                  type="number"
                  value={streetNumber}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                city:
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  value={city}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                state:
                <input
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  value={state}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                country:
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  value={country}
                />
              </label>
            </InputWrapper>
            <InputWrapper>
              <label>
                postcode:
                <input
                  onChange={(e) => setPostcode(e.target.value)}
                  type="text"
                  value={postcode}
                />
              </label>
            </InputWrapper>
            <SectionWrapper>
              <label>
                nationality:
                <input
                  onChange={(e) => setNationality(e.target.value)}
                  type="text"
                  value={nationality}
                />
              </label>
            </SectionWrapper>
            <InputWrapper>
              <label>
                cell phone:
                <input
                  onChange={(e) => setCellphone(e.target.value)}
                  type="tel"
                  value={cellphone}
                />
              </label>
            </InputWrapper>
            <SectionWrapper>
              <label>
                phone:
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  value={phone}
                />
              </label>
            </SectionWrapper>
            <InputWrapper>
              <label>
                picture:
                <LargeInput
                  onChange={(e) => setPicture(e.target.value)}
                  type="url"
                  placeholder="https://"
                  value={picture}
                />
              </label>
            </InputWrapper>
            <StyledButton onClick={handleSubmit} type="submit">
              CREATE
            </StyledButton>
          </StyledForm>
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

    font-size: 0.8rem;
  }
`;

const UserCreatedContentBox = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 25px;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 1.5s ease;

  h5 {
    font-weight: 300;
    font-size: 19px;
  }

  @media (max-width: 950px) {
    width: 80%;
    height: 80%;
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

const StyledForm = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 1.5s ease;

  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

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

const InputWrapper = styled.div`
  width: 70%;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  label {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    background: #f3f3f3;
    border: none;
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
      border-bottom: 1px solid black;
    }

    &:focus {
      border-bottom: 1px solid black;
    }
  }
`;

const SectionWrapper = styled.div`
  width: 70%;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  label {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    background: #f3f3f3;
    border: none;
    border-bottom: 90% 1px solid #ffffff;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
      border-bottom: 1px solid black;
    }

    &:focus {
      border-bottom: 1px solid black;
    }
  }
`;

const StyledSelect = styled.select`
  border: none;
  background: #f3f3f3;
  border-radius: 5px;
  font-size: 0.7rem;
`;

const LargeInput = styled.input`
  width: 60%;
  background: #f3f3f3;
  border: none;
`;

const SmallInput = styled.input`
  width: 20%;
  background: #f3f3f3;
  border: none;
`;

const StyledButton = styled.button`
  height: 34px;
  width: 70px;
  margin-top: 1rem;
  background: #000000;
  border-radius: 5px;
  border: none;
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

const UserCreatedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 1.5s ease;

  img {
    margin-left: 10px;
  }
`;

const StyledBackButton = styled.button`
  height: 34px;
  width: 70px;
  margin-top: 1rem;
  background: #000000;
  border-radius: 5px;
  border: none;
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

export default CreateUserBox;
