import React, { useState } from "react";

const Test1 = () => {
  // 声明多个 state 变量！
  // 使用 Hook 初始化的state不能放入条件语句中， 必须都渲染
  let [age, setAge] = useState(18);
  let [name, setName] = useState("HeiLiu");
  let [work, setWork] = useState("FE");

  return (
    <div>
      <p>age: {age}</p>
      <p>name: {name}</p>
      <p>work: {work}</p>
    </div>
  );
};

export default Test1;
