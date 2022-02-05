import React from 'react';
import styled from 'styled-components'



export default function RecordsPage() {
    const teste=[
        {
        date:30.10,
        description:'Almoço',
        type:'outcome',
        value:45.45
        },
        {
            date:25.02,
            description:'Salário',
            type:'income',
            value:10000
        }]
        function RecordsStructure({record}){
            return(
                <Record type={record.type}>
                    <div>
                        <p className="date">{record.date}</p>
                        <p className="description">{record.description}</p>
                    </div>
                    <p className="value">{record.value}</p>
                </Record>
            )
    
        }
  return (

  <Container>
    <Header>
        <p>Olá, Fulano</p>
        <ion-icon name="exit-outline"></ion-icon>
    </Header>
    <Records>
        <Text>
            {/* <p>Não há registros de entrada ou saída</p> */}
            {
                teste.map(record=>{
                    return(
                        <RecordsStructure record={record} key={record.date}/>
                    )
            })
            }
        </Text>
    </Records>
    <Footer>
        <div className="income">
        <ion-icon name="add-circle-outline"></ion-icon>
        <p>Nova entrada</p>
        </div>
        <div className="outcome">
        <ion-icon name="remove-circle-outline"></ion-icon>
        <p>Nova saída</p>
        </div>
        
    </Footer>
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

background-color: white;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

border-radius: 12px;
`
const Record = styled.div`
display:flex;
justify-content: space-between;
.date{
   color: #C6C6C6;
   font-size:16px;
   padding-right: 9px;
}
.description{
color: #000;
}
.value{
color:${props=>props.type==='income'?'#03AC00':'#C70000'}
}
div{
    display:flex;
}
`
const Text = styled.div` 
width:180px;
p{
    word-break: break-word;
    text-align: center;
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