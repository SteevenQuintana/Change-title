import React from "react";
import Child from "./Child";
import "./Parent.css";
import Waves from "./UI/Waves";

function Parent() {
  return (
    <div className="parent">
      <h1>Change this title 😎</h1>
      <Child />
      <button>Change title</button>
      <Waves />
    </div>
  );
}

export default Parent;
