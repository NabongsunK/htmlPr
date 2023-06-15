import React, { useState } from 'react';
import Calculate from './Calculate';

function Hello({name, color, isSelected}) {
  const [number, setNumber] = useState(false);
  const onCal = () => {
    setNumber(!number);
  };
  
  return (
    <div style={{color:color}}>
        안녕하세요 {name} <button onClick={onCal}>계산기</button>
        {number && <Calculate/>}
    </div>
  );
}

Hello.defaultProps = {
  name:'이름없음'
}

export default Hello;