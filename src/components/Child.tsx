import React from "react";
import "./Child.css";

function Child() {
  return (
    <div className="child">
      <h2>Writte new Title</h2>
      <input type="text" required maxLength={15} />
    </div>
  );
}

export default Child;
