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
import {auth} from '../config/config'
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      console.log(userCredential)}).catch((error)=>{
        console.log(error)
      })
    }
  

  return (
    <StyledContainer>
      <StyledImage src={Img} />
      <StyledCard>
        <StyledCard.Body>
          <StyledFormContainer onSubmit={signIn}>
            <StyledFormGroup>
              <StyledFormControl
                type='email'
                placeholder='Enter email'
                value={email}
                onChange = {(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
              />
              <StyledFormControl
                type='password'
                placeholder='Password'
                value={password}
                onChange = {(e: React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
              />
            </StyledFormGroup>
            <StyledButton type='submit'>Login</StyledButton>
          </StyledFormContainer>
        </StyledCard.Body>
      </StyledCard>
    </StyledContainer>
  );
};
