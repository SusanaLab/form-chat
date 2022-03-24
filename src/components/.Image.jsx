import React from 'react'
import styled from 'styled-components';
import operadora from  '../assets/operadora.png'

const Foto = styled.img`
    width: 50px;
    height: 60px;
    margin: 15px;
    border: 2px solid #F174DC;
    box-sizing: border-box;
    border-radius: 10px;
`;

function Image () {
  return (
    <Foto src={operadora} alt="operadora"/> 
  )
}

export {Image};