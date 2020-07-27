import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TestUseState from "./TestUseState";
import Test1 from "./Test1";
import TestEffect from "./TestEffect";
// import Counter from './usePrevious';
import Counter from './useReducer';


ReactDOM.render(<Counter />, document.getElementById("root"));
