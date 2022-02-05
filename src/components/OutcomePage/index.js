import React from 'react';
import styled from 'styled-components';
 
export default function IncomePage() {
  return (
      <Container>
          <Header>
             <p> Nova Saída </p>
          </Header>
         <Form>
           <input type="number" min="1" step="any"  placeholder='Valor' required/>
           <input type="text" placeholder='Descrição' required/>
           <button type='submit' > Salvar saída </button>
         </Form>
      </Container>
  );
}

const Container = styled.div` 
font-family: 'Raleway','sans-serif';
`
const Header = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 22px;
p{
    font-size: 26px;
    font-weight: bold;
    line-height: 31px;
    color: #FFFFFF;
}
`
const Form = styled.form` 
font-family: 'Raleway', 'sans-serif';
font-size: 32px;

display:flex;
justify-content: center;
align-items: center;
flex-direction:column;

input{
  textarea::placeholder{
    color:black;
  }
  all:unset;
  padding: 9px;
  margin-bottom: 9px;

  font-size: 18px;
  font-weight: bold;

  color:black;

  border: 1px solid white;
  border-radius:12px;

  background-color: white;

  width: 300px;
}
button{
  all:unset;
  background-color: #A328D6;
  color:white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight:600;

  width:300px;
  padding: 9px;
  border-radius: 12px;

  cursor:pointer;

  :hover{
  font-size: 17px;
  }
}
`
