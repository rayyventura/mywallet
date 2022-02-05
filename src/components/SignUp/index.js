import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

export default function SignUp() {

  return (
     <Container >
       
              <Title>
                  MyAccount
              </Title>
            <Form>
              <input placeholder='E-mail' type="email" required/>
              <input type="password" placeholder='Senha' required/>
              <button type='submit' > Entrar </button>
            </Form>

            <p>Primeira vez? Cadastre-se</p>
      
      </Container>
   
  )
}

const Container = styled.div` 
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;


p{
  color:white;
  font-size: 16px;
  font-family: 'Raleway', 'sans-serif';

  margin-top: 20px;
  cursor:pointer;

  :hover{
  font-weight: bold;
  }
}
`
const Title = styled.h1` 
font-family: 'Saira Stencil One';
font-size: 32px;

padding: 24px;

color:white;

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

