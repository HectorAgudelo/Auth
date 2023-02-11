import React, { FC } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 8px;

width: 402px;
height: 40px;

background: #343A40;
border-radius: 8px;
color: #ffffff;
`

const StyledFormContainer = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const StyledFormGroup = styled(Form.Group)``;



const StyledFormControl = styled(Form.Control)`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px;
gap: 8px;
margin: 20px;

width: 382px;
height: 25px;

border: 1px solid #CED4DA;
border-radius: 8px;`;



export const SignUp: FC = () => {
  return (
    <Container >
        <StyledFormContainer>
      <StyledFormGroup>
        
        <StyledFormControl type="password" placeholder="Password"/>
        <StyledFormControl type="email" placeholder="Enter email"/>
        <StyledFormControl type="password" placeholder="Password"/>
      
      </StyledFormGroup>
      <StyledButton>Login</StyledButton>
    </StyledFormContainer>
    </Container>
  
  );
};