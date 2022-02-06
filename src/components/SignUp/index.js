import styled from 'styled-components';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
const navigate = useNavigate();
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [password,setPassword]=useState('');
const [passwordConfirm,setPasswordConfirm]=useState('');


function submitForm(event){
  
event.preventDefault();

const user = {
  email,
  name,
  password,
  passwordConfirm
}

if(password!==passwordConfirm ){
  alert("A confirmação precisa ser igual a senha");
  return;
}
axios.post('http://localhost:5000/signup',user).then((res=>{
  navigate('/');
})).catch(res=>{alert("Preencha os dados corretamente")});
}
const alert = (text) => toast.error(`${text}`, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
  return (
     <Container >
       
              <Title>
                  MyAccount
              </Title>
            <Form onSubmit={submitForm}>
              <input type="text" placeholder='Nome' value={name} onChange={(e)=>setName(e.target.value)} required />
              <input placeholder='E-mail' type="E-mail"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <input type="password" placeholder='Senha'  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              <input type="password" placeholder='Confirme a senha'  value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} required/>
              <button type='submit' > Cadastrar </button>
            </Form>

            <p onClick={()=>navigate('/')}>Já tem uma conta? Entre agora!</p>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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

