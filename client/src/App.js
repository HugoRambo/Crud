import React, {useState} from "react"

import './App.css';

function App() {
  const [values, setValues] = useState()
  console.log(values)
  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue, 
      [value.target.name]: value.target.value,
    }))
  }
  const handleClickButton = () =>{
    console.log(values)
  }


  return (
    <div className="App--container">
      <div className="register--container">
        <h1 className='register--title'>Scrim Shop</h1>
        <input 
        type="text" 
        name="name" 
        placeholder="Nome"
        className='register--input'
        onChange={handleChangeValues}>
        </input>

  
        <input 
        type="text" 
        name="const" 
        placeholder="Preço"
        className='register--input'
        onChange={handleChangeValues}>
        </input>

     
        <input 
        type="text" 
        name="category" 
        placeholder="Categoria"
        className='register--input'
        onChange={handleChangeValues}>
        </input>

        <button  className='register--button' onClick={() => handleClickButton()}>Cadastrarttttt</button>
      </div>
        
    </div>
  );
}

export default App;
