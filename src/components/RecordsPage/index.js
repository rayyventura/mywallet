import React, { useEffect, useState,useContext } from 'react';
import styled from 'styled-components'
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';




export default function RecordsPage() {
   
        const [userData,setUserData] = useState();
        const { info }= useContext(UserContext);
        const navigate = useNavigate();
        let income=0;
        let outcome=0;
        useEffect(()=>{
            axios.get('http://localhost:5000/records',{
                headers: {
                    Authorization : `Bearer ${info.token}`
                }
             }).then((res => setUserData(res.data))).catch(res => alert("Falha em carregar dados do usuário"));

        },[info.token])

         if(userData){
             userData.transactions.forEach(data=>{
                 if(data.type==='income'){
                     income+=data.value;
                 }else{
                     outcome+=data.value;
                 }
             }
             )}
    
        function RecordsStructure({record}){
            return(
                <Record type={record.type}>
                    <div>
                        <p className="date">{record.date}</p>
                        <p className="description">{record.description}</p>
                    </div>
                    <p className="value">R$ {record.value}</p>
                </Record>
            )
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
       {userData &&  <p>Olá, {userData.name}</p> }
        <ion-icon name="exit-outline" onClick={()=>navigate('/')}></ion-icon>
    </Header>
    <Records saldo={income-outcome>0}>
        <Text user={userData}>
            {
                userData?  userData.transactions.map((record,i)=>{
                    return(
                        <RecordsStructure record={record} key={i}/>
                    )
            }) :  <p>Não há registros de entrada ou saída</p>
            }
        </Text>
    <div className="footer">
        <p>Saldo</p>
        <p className='saldo'>R$ {(income - outcome).toFixed(2)} </p>
    </div>
    </Records>
    <Footer>
        <div className="income"  onClick={()=>navigate('/income')}>
        <ion-icon name="add-circle-outline"></ion-icon>
        <p>Nova entrada</p>
        </div>
        <div className="outcome" onClick={()=>navigate('/outcome')}>
        <ion-icon name="remove-circle-outline"></ion-icon>
        <p>Nova saída</p>
        </div>
    </Footer>
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
color:white;
width:320px;

font-family: 'Raleway','sans-serif';

`

const Header = styled.div` 
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 22px;
p{
    font-size: 26px;
}

ion-icon{
color:white;
width: 26px;
height: 26px;
font-weight: bold;
cursor:pointer;
}
`
const Records = styled.div`
width:320px;
height: 400px;
position:relative;

background-color: white;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

border-radius: 12px;

.footer{
    position:absolute;
    bottom:9px;
    left:26px;
    width:260px;
    color:black;
    font-weight: bold;
    font-size: 16px;

    display:flex;
    justify-content:space-between;

    .saldo{
        color:${({saldo})=>saldo? '#03AC00':'#C70000'};
    }
}
`
const Record = styled.div`
width:340;
display:flex;
justify-content: space-between;
font-size:12px;

text-align: center;

.date{
   color: #C6C6C6;
   padding-right: 9px;
}
.description{
color: #000;
font-weight: bold;
word-break: break-word;
padding:2px;
}
.value{
color:${props=>props.type==='income'?'#03AC00':'#C70000'};

}
div{
    display:flex;
}
`
const Text = styled.div` 
width:${props=>!props.userData? '180px': '360px'}
p{
    font-size: 18px;
    line-height: 23px;
    color: #868686;
}
`
const Footer = styled.div` 
display: flex;
gap: 10px;

div{
    color: white;
    margin-top: 9px;
    width:155px;
    height:114px;

    background-color: #A328D6;

    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding: 12px;
    cursor:pointer;

    :hover{
        ion-icon{
         height:24px;
         width:24px;
         font-weight: bold;
        }
}
}
ion-icon{
height:25px;
width:25px;
cursor:pointer;
:hover{
    height:24px;
    width:24px;

    font-weight: bold;
}
}


`