import React from 'react'
import styled from 'styled-components';
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
function StartButton () {
    return (
          <Send> Iniciar </Send>
    )
  }
  
  export {StartButton};