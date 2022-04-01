import React from 'react'
import styled from 'styled-components';
const Section = styled.section`
padding: 0.5em;
margin: 0.5em;
border-radius: 10px;

 background: #F93F83;
`;

function Info ({correo, telefono, dia, mes, year, nombre, segundoNombre, paterno, materno}) {
    return (
          <>
          <Section>
         <p> Fecha de nacimiento {dia + " " }{mes + " " }{year + " " } </p>
          <p>Correo Electronico:{correo} </p>
          <p> Telefono celular: {telefono} </p>
          <p> Correo:  {correo} </p>
          <p> Nombre: {nombre + " " }{segundoNombre + " " } {paterno + " " }{materno + " " } </p>
         </Section>
         <a name="abajo"></a>
          </>
    )
  }
  
  export {Info};