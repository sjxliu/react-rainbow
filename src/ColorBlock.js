import React from "react";

function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}

export default ColorBlock;
