import React from "react";

const userOutput = (props) => {
  if (props.length > 5) {
    return (
      <div>
        <p>Long Enough</p>
      </div>
    );
  }
  {
    return (
      <div>
        <p>Too Short</p>
      </div>
    );
  }
};

export default userOutput;
