import React, { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + state.step,
      };
    case "decrement":
      return {
        ...state,
        count: state.count + state.step,
      };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    step: 10,
  });
  const { count, step } = state;

  return (
    <>
      <h1>{count}</h1>
      <h1>{step}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "decrement" })}>DECREMENT</button>
    </>
  );
}
