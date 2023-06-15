import React, { useState } from 'react';

function Calculate() {
  const [number, setNumber] = useState(0);
  const [cal, setcal] = useState(0);
  const [text, setText] = useState("");

  const onPlus = () => {
    setcal(number+cal);
    setText(text + String(number) + "+")
    setNumber(0);
  };

  const onMinus = () => {
    setcal(number-cal);
    setText(text + String(number) + "-")
    setNumber(0);
  };

  const onMul = () => {
    setcal(number*cal);
    setText(text + String(number) + "X")
    setNumber(0);
  };

  const onDiv = () => {
    setcal(number/cal);
    setText(text + String(number) + "/")
    setNumber(0);
  };

  const onMod = () => {
    setcal(number%cal);
    setText(text + String(number) + "%")
    setNumber(0);
  };

  const onEqual = () => {
    setText(text + String(number))
  };

  const onOne = () => {
    setNumber(number*10+1)
  };

  const onTwo = () => {
    setNumber(number*10+2)
  };

  const onThree = () => {
    setNumber(number*10+3)
  };

  const onFour = () => {
    setNumber(number*10+4)
  };
  const onFive = () => {
    setNumber(number*10+5)
  };

  const onSix = () => {
    setNumber(number*10+6)
  };

  const onSeven = () => {
    setNumber(number*10+7)
  };

  const onEight = () => {
    setNumber(number*10+8)
  };

  const onNine = () => {
    setNumber(number*10+9)
  };

  const onZero = () => {
    setNumber(number*10)
  };

  


  return (
    <div>
      {/* <input onChange={onChange} value={text}  /> */}
      <h1>{number}</h1>
      <h1>{cal}</h1>
      <h1>{text}</h1>
      <button onClick={onOne}>1</button>
      <button onClick={onTwo}>2</button>
      <button onClick={onThree}>3</button> <br></br>
      <button onClick={onFour}>4</button>
      <button onClick={onFive}>5</button>
      <button onClick={onSix}>6</button> <br></br>
      <button onClick={onSeven}>7</button>
      <button onClick={onEight}>8</button>
      <button onClick={onNine}>9</button> <br></br>
      <button onClick={onPlus}>+</button>
      <button onClick={onZero}>0</button>
      <button onClick={onMinus}>-</button> <br></br>
      <button onClick={onMul}>*</button>
      <button onClick={onDiv}>/</button>
      <button onClick={onMod}>%</button> <br></br>
      <button onClick={onEqual}>=</button> <br></br>
    </div>
  );
}

export default Calculate;