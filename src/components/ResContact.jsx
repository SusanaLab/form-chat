import React, {useState} from 'react';
import styled from 'styled-components';
import { Info } from './info';


const Section = styled.section`
padding: 0.5em;
margin: 0.5em;
border-radius: 10px;
 justify-content: center;
 background:  #F174DC;;
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

function ResContact ({correo, telefono, dia, mes, year, nombre, segundoNombre, paterno, materno}) {
  const [buttonClicked, setButtonClicked] = useState(false);

  let handleButtonClick = () => {
      setButtonClicked(true)
  }
  return (
    <>
    <Section>
   
    <p>Correo electronico: {correo} </p>
    <p> Telefono celular: {telefono} </p>
  
    </Section> 
    <a href="#abajo"> <Send onClick={handleButtonClick}>
      Enviar Informacion
    </Send></a>
    {buttonClicked ?   <Info {...{correo, telefono, dia, mes, year, nombre, segundoNombre, paterno, materno} } /> : null}
    <a name="abajo"></a>
    </>
  )
}
export {ResContact}