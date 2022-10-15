import React, { useState } from "react";
import Child from "./Child";
import "./Parent.css";
import Waves from "./UI/Waves";

function Parent() {
  const [newTitle, setNewTitle] = useState("Change this title 😎");
  const [title, setTitle] = useState("");
  const changeTitleHandler = (title: string) => {
    setTitle(title);
  };
  return (
    <div className="parent">
      <h1>{newTitle}</h1>
      <Child onChangeTitle={changeTitleHandler} />
      <button
        onClick={() => {
          if (title.trim().length === 0) {
            setNewTitle("Change this title 😅");
          } else {
            setNewTitle(title);
          }
        }}
      >
        Change title
      </button>
      <Waves />
    </div>
  );
}

export default Parent;
