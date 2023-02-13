import React, { FC, useState } from 'react';
import {
  StyledContainer,
  StyledImage,
  StyledCard,
  StyledFormGroup,
  StyledFormContainer,
  StyledButton,
  StyledFormControl,
} from '../components/Globals';
import Img from '../terry-vlisidis-WsEbnsnKbUE-unsplash.jpg';


export const SignUp: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const register = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log( name, password, email)
  }

  return (
    <StyledContainer>
      <StyledImage src={Img} />

      <StyledCard>
        <StyledCard.Body>
          <StyledFormContainer onSubmit={register}>
            <StyledFormGroup>
              <StyledFormControl
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <StyledFormControl
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <StyledFormControl
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </StyledFormGroup>
            <StyledButton type='submit'>Login</StyledButton>
          </StyledFormContainer>
        </StyledCard.Body>
      </StyledCard>
    </StyledContainer>
  );
};
