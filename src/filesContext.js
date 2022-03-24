import React, {useState, createContext} from 'react'


export const FilesContext = createContext();

export const FilesProvider = (props) => {
  
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [año, setAño] = useState('');
    const [nombre, setNombre] = useState('');
    const [segundoNombre, setSegundoNombre] = useState('');
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');


    return(
        <FilesContext.Provider value ={{
          dia,
          setDia,
          mes,
          setMes,
          año,
          setAño,
          nombre,
          setNombre,
          segundoNombre,
          setSegundoNombre,
          paterno,
          setPaterno,
          materno,
          setMaterno,
          correo,
          setCorreo,
          telefono,
          setTelefono
        }}>
            {props.children}
        </FilesContext.Provider>
    )
}