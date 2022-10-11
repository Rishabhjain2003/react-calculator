import logo from './logo.svg';
import './App.css';
import "./styles.css"
import {useReducer} from "react"
import React, {useState} from "react"


function App() {
  const [result, setResult] = useState("");

  const handleClick =  (e) => {
    setResult(result.concat(e.target.name));
  }

  const AC = () =>{
    setResult("");
  }

  const DEL = () =>{
    setResult(result.slice(0,-1));
  }

  const EVAL = () =>{
    try{
      setResult(""+eval(result));
    }
    catch{
      setResult("");
      alert("ERROR");
    }
  }


  return (
    <div className='display'>
      <div className="calculator-grid">
        <div className="output">
          <div className="current-output">{result}</div>
        </div>
        <button onClick={AC} className="span-two" id="AC">AC</button>
        <button name='/' onClick={handleClick}>/</button>
        <button onClick={DEL}  id="DEL">DEL</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='*' onClick={handleClick}>*</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='-' onClick={handleClick}>-</button>
        <button name='.' onClick={handleClick}>.</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='='  onClick={EVAL} className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
