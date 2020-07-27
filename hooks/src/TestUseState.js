import React, { useState } from "react";

const TestUseState = () => {
  // useState 会返回一对值：当前状态和一个让你更新它的函数
  // 通过解构获得对应参数

  let [state, setState] = useState(0);
  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          // 如果是 setState(state ++); 实际行为会与预期不符合 为什么？？
          setState(state + 1);
        }}
      >
        CLICK
      </button>
    </div>
  );
};

export default TestUseState;
