import React from 'react'
import styled from 'styled-components';
import {  useContext} from "react";
import { FilesContext } from '../filesContext'
import operadora from  '../assets/operadora.png'
const Componente = styled.section`
 display: flex;
 justify-content: center;
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
const Send = styled.button`
  font-size: 3.0 rem;
  text-align: left;
  color: #FAFAFA;
  background: #F93F83;
  border-radius: 3px;
  border:0px;
  
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


function Date () {
const {dia, mes, año, setMes, setDia, setAño} = useContext(FilesContext);
   
  return (
<Componente>
    <Foto src={operadora} alt="operadora"/> 
    <Form>
        <Question> ¿Cual es tu fecha de nacimiento? </Question>
        <Input type="text" placeholder='Dia' value= {dia}  onChange={(event) => {
                  setDia(event.target.value);
                  console.log(dia)
                }} />
        <Input type="text" placeholder='Mes' onChange={(event) => {
                  setMes(event.target.value);
                  console.log(mes)
                }} />
        <Input type="text" placeholder='Año'   onChange={(event) => {
                  setAño(event.target.value);
                  console.log(año)
                }} />
        <Send> Enviar </Send>
    </Form>
</Componente>
  )
}
export {Date};