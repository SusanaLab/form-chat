import React from 'react'
import styled from 'styled-components';
import {  useContext} from "react";
import { FilesContext } from '../filesContext'
import operadora from  '../assets/operadora.png'
const Componente = styled.section`
 display: flex;
 justify-content: center;
 flex-direction: column;
 padding: 0.5em;
 margin: 0.5em;
`;
const Form = styled.section`
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


function Contact () {
  const {correo, telefono, setCorreo, setTelefono} = useContext(FilesContext);

  return (
<Componente>
    <Foto src={operadora} alt="operadora"/> 
    <Form>
        <Question> Datos de contacto</Question>
        <Input type="text" placeholder='Correo electronico'   onChange={(event) => {
                  setCorreo(event.target.value);
                  console.log(correo)
                }}/>
        <Input type="text" placeholder='Telefono celular'   onChange={(event) => {
                  setTelefono(event.target.value);
                  console.log(telefono)
                }}/>
         </Form>
</Componente>
  )
}
export {Contact}; 