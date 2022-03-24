import './App.css';
import {Header} from './components/Header'; 
import {Name} from'./components/Name';
import {Contact} from'./components/Contact';
import {Date} from'./components/Date';
import { FilesProvider } from './filesContext'

function App() {
 
  return (
    <>
    <FilesProvider  >
    <Header/>
    <Name/>
    <Contact/>
    <Date/>
    </FilesProvider>
    </>
  );
}

export default App; 

