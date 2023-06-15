import React from 'react';
import Calculate from './Calculate';
import Hello from './Hello';
import './App.css';

function App() {
  const sum = 15;
  const style={
    backgroundColor:'black',
    color:'aqua'
  }

  return (
    <>
      <Hello name="강성수" color="red" isSelected={false}/>
      <div>안녕</div>
    </>
  );
}

export default App;