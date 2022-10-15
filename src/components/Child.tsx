import React, { useState } from "react";
import "./Child.css";

type Props = {
  onChangeTitle: (title: string) => void;
};

function Child({ onChangeTitle }: Props) {
  return (
    <div className="child">
      <h2>Writte new Title</h2>
      <input
        type="text"
        required
        maxLength={15}
        onChange={(e) => {
          onChangeTitle(e.target.value);
        }}
      />
    </div>
  );
}

export default Child;
