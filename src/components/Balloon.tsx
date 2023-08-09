import React, { useTransition } from "react";
import { useState } from "react";
const Balloon = () => {
    const [size, setSize] = useState(20)
    const [balloon, setBalloon] = useState('🎈')
  const handleClick = () => {
    if(size == 40){
        setBalloon("💥")
        setTimeout(() => {
            setBalloon("🎈")
            setSize(20)
        }, 3000);
        return
    }
    setSize(current => current+=5)
  };
  return (
    <div>
      <h1 onClick={handleClick} style={{fontSize: size+'px'}} className=" select-none">{balloon}</h1>
    </div>
  );
};

export default Balloon;
