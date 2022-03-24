import React from 'react'
import styled from 'styled-components';


const Section = styled.section`
padding: 0.5em;
margin: 0.5em;
border-radius: 10px;

 background: #F93F83;
`;


function NonName (props) {

  return (
    
    <Section>
   
    <p> {props.nombre + " " }{props.segundoNombre + " " } {props.paterno + " " }{props.materno + " " } </p>
  
    </Section> 
   
  )
}
export {NonName}