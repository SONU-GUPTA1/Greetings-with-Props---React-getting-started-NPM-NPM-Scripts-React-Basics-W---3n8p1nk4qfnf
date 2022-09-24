import React from "react";
import { useState } from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const[input, setInput ] = useState(" ");
  const change=(e)=>{
    setInput(e.target.value);
  }
  return (
    <div>
    <input type="text" onChange={change} /> 
      <Welcome name={input} />
    </div>
  )
}


export default App;
