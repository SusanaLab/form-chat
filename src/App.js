import './App.css';
import React, {useState} from 'react';
import {Header} from './components/Header'; 
import {Name} from'./components/Name';
import styled from 'styled-components';

// import {Contact} from'./components/Contact';
// import {Date} from'./components/Date';
// import { FilesProvider } from './filesContext' 

const Send = styled.button`
  font-size: 3.0 rem;
  text-align: right;
  color: #FAFAFA;
  background: #F93F83;
  border-radius: 3px;
  border:0px;
`;
 
 function App(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  let handleButtonClick = () => {
      setButtonClicked(true)
  }

  return (
    <>
    <div >
      <Header/>
     <a href="#abajo"> <Send onClick={handleButtonClick}>
      Iniciar
    </Send></a>
    {buttonClicked ? <Name/> : null}
 </div>
  <a name="abajo"></a>
  </>
  );
}

export default App;
// {/* <FilesProvider  >
// <Header/>
// <Name/>
// <Contact/>
// <Date/>
// </FilesProvider> */}

