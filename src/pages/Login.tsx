import React, { FC } from 'react';
import { Form, Button, Container, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import Img from '../terry-vlisidis-WsEbnsnKbUE-unsplash.jpg';

const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
height: 100vh;
width: 100vw;

`;

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 364px;
  height: 40px;
  background: #343a40;
  border-radius: 8px;
  color: #ffffff;
 
`;

const StyledFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100vw;
`;

const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`;

const StyledFormControl = styled(Form.Control)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 345px;
  height: 25px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  
`;

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 30rem;
  border-radius: 8px;
  background-color: #ffffff;
  position: relative;
  top: 150px;
 
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  z-index: -1;

`;

export const Login: FC = () => {
  return (
    <StyledContainer>
      <StyledImage src={Img} />
      
        <StyledCard>
          <Card.Body>
            <StyledFormContainer>
              <StyledFormGroup>
                <StyledFormControl type='password' placeholder='Password' />
                <StyledFormControl type='email' placeholder='Enter email' />
              </StyledFormGroup>
              <StyledButton>Login</StyledButton>
            </StyledFormContainer>
          </Card.Body>
        </StyledCard>
      
    </StyledContainer>
  );
};
