import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const input = "Hey !";
  return (
    <Welcome name={input} />
  )
}


export default App;
