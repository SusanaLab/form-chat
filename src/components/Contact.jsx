import React from 'react'
import styled from 'styled-components';
import { useState} from "react";
import operadora from  '../assets/operadora.png'
import { ResContact } from './ResContact';

const Componente = styled.section`
 display: flex;
 border-radius: 10px;
 justify-content: center;
 padding: 0.5em;
 margin: 0.5em;
`;
const Form = styled.form`
padding: 4em;
background: #F0F0F0;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;
const Question = styled.h1`
  font-size: 3.0 rem;
  text-align: left;
  color: black;
  margin: 40px;

`;

const Input = styled.input`
  padding: 0.7em;
  margin: 0.7em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Foto = styled.img`
    width: 50px;
    height: 60px;
    margin: 15px;
    border: 2px solid #F174DC;
    box-sizing: border-box;
    border-radius: 10px;
`;
const Send = styled.button`
  font-size: 3.0 rem;
  text-align: left;
  color: #FAFAFA;
  background: #F93F83;
  border-radius: 3px;
  border:0px;
  justify-content: center;
  align-items: center;
  align-content: space-around;
 
  
`;


function Contact ({dia, mes, year, nombre, segundoNombre, paterno, materno}) {
    const [correo, setCorreo] = useState('');
   const [telefono, setTelefono] = useState('');

   const [buttonClicked, setButtonClicked] = useState(false);

  let handleButtonClick = () => {
      setButtonClicked(true)
  }

  return (
    <>
<Componente>
    <Foto src={operadora} alt="operadora"/> 
    <Form onSubmit={function handleSubmit(e) {
    e.preventDefault();
    console.log('click.');
  }}>
        <Question> Datos de contacto</Question>
        <Input type="text" placeholder='Correo electronico' value= {correo} onChange={(event) => {
                  setCorreo(event.target.value);
                  console.log(correo)
                }} />
        <Input type="text" placeholder='Telefono celular' value= {telefono}  onChange={(event) => {
                  setTelefono(event.target.value);
                  console.log(telefono)
                }} />
         </Form>
</Componente>
<a href="#abajo"><Send onClick={handleButtonClick}>
      Enviar
    </Send></a>
    {buttonClicked ? <ResContact {...{correo, telefono, dia, mes, year, nombre, segundoNombre, paterno, materno} }/> : null}
    <a name="abajo"></a>
</>   
  )
}
export {Contact}; 