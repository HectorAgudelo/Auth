import { Form, Button, Container, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
height: 100vh;
width: 100vw;
`;

export const StyledButton = styled(Button)`
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

export const StyledFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100vw;
`;

export const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`;

export const StyledFormControl = styled(Form.Control)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  width: 345px;
  height: 25px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  
`;

export const StyledCard = styled(Card)`
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

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
  z-index: -1;

`;