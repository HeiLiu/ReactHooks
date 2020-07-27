import React, { useState, useEffect } from "react";

const TestEffect = () => {
  let [state, setState] = useState(0);
  useEffect(() => {
    console.log("Click");
    return () => {
      console.log('清除作用');
    }
  });

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => {setState(state + 1)}}>CLICK BUTTON</button>
    </div>
  );
};

export default TestEffect;
