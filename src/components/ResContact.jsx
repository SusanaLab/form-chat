import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
padding: 0.5em;
margin: 0.5em;
 justify-content: center;
 background: #F93F83;
`;


function ResContact (props) {
 

  return (
    <Section>
    <p>Correo electronico: {props.correo} </p>
    <p> Telefono celular: {props.telefono} </p>
    </Section> 
  )
}
export {ResContact}