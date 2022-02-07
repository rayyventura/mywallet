import React, {  useState,useContext } from 'react';
import styled from 'styled-components'
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

 
export default function IncomePage() {
  const [value, setValue]=useState();
  const [description,setDescription]=useState();
  const {info} = useContext(UserContext);
  const navigate = useNavigate();

  function submitForm(event){
    event.preventDefault();

    const data={
      value,
      description
    }

    axios.post('http://localhost:5000/income',data,{
      headers:{ Authorization: `Bearer ${info.token}`}
    }).then(res => navigate("/records")).catch(res => alert("Falha em adicionar transação"));
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
      <Container>
          <Header>
             <p> Nova Entrada </p>
          </Header>
         <Form onSubmit={submitForm}>
           <input type="number" min="0.01" step="0.01"  placeholder='Valor' value={value} onChange={e=>setValue(e.target.value)} required/>
           <input type="text" placeholder='Descrição' value={description} onChange={e=>setDescription(e.target.value)} required/>
           <button type='submit' > Salvar entrada </button>
         </Form>
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
