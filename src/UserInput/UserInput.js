import React from "react";

const charComp = {
  display: "inline-block",
  padding: "16px",
  textalign: "center",
  margin: "16px",
  border: "1px solid black",
};

const userInput = (props) => {
  return (
    <div style={charComp}>
      <p onClick={props.click}> {props.text}</p>
    </div>
  );
};

export default userInput;
