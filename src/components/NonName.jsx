import React, {useState} from 'react';
import styled from 'styled-components';
import {Date} from'./Date';

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

const Section = styled.section`
padding: 0.5em;
margin: 0.5em;
border-radius: 10px;

 background:  #F174DC;;
`;


function NonName ({nombre, segundoNombre, paterno, materno}) {
  const [buttonClicked, setButtonClicked] = useState(false);

  let handleButtonClick = () => {
      setButtonClicked(true)
  }
  return (
    <>
    <Section>
   
    <p> {nombre + " " }{segundoNombre + " " } {paterno + " " }{materno + " " } </p>
    
    </Section>
    <a href="#abajo"> <Send onClick={handleButtonClick}>
      Continuar
    </Send></a>
    {buttonClicked ? <Date {...{nombre, segundoNombre, paterno, materno} }/> : null}
    <a name="abajo"></a>
   </>
  )
}
export {NonName}