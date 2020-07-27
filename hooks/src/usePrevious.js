import React, { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const add = () => setCount(count + 1);
  return (
    <h1 onClick={add}>
      Now: {count}, before: {prevCount}
    </h1>
  );
}
