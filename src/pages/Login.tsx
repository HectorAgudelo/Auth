import React, { FC } from 'react';
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

export const Login: FC = () => {
  return (
    <StyledContainer>
      <StyledImage src={Img} />

      <StyledCard>
        <StyledCard.Body>
          <StyledFormContainer>
            <StyledFormGroup>
              <StyledFormControl type='email' placeholder='Enter email' />
              <StyledFormControl type='password' placeholder='Password' />
            </StyledFormGroup>
            <StyledButton>Login</StyledButton>
          </StyledFormContainer>
        </StyledCard.Body>
      </StyledCard>
    </StyledContainer>
  );
};
