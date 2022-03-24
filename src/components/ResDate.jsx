import React from 'react'
import styled from 'styled-components';


const Section = styled.section`
padding: 0.5em;
margin: 0.5em;
border-radius: 10px;

 background: #F93F83;
`;


function ResDate (props) {

  return (
    
    <Section>
   
    <p> {props.dia + " " }{props.mes + " " }{props.year + " " } </p>
  
    </Section> 
   
  )
}
export {ResDate}