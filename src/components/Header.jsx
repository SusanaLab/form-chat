import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 4em;
margin:0em;
background: #F174DC;
`;
const Title = styled.h1`
  font-size: 3.0 rem;
  text-align: left;
  color: black;
`;
const Info = styled.h2`
font-size: 3.0 rem;
text-align: left;
color: black;
`;
const Time = styled.h3`
font-size: 3.0 rem;
text-align: Left;
color: #F0F0F0 ;
`;
function Header () {
  return (
<Wrapper>
  <Title>Cursos financieros </Title>
  <Info>¿Quieres recibir información detalla sobre nuestros cursos de cultura financiera?</Info>
  <Time>Te tomara menos de 5 minutos </Time>
</Wrapper>
  )
}

export {Header};