import './App.css';
import {Header} from './components/Header'; 
import {Name} from'./components/Name';
import {Contact} from'./components/Contact';
import {Date} from'./components/Date';
import { ResContact } from './components/ResContact';
function App() {
 
  return (
    <>
    <Header/>
    <Name/>
    <Contact/>
    <ResContact/>
    <Date/>
    </>
  );
}

export default App; 

