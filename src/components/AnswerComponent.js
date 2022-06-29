import React from "react";

function AnswerComponent(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        height: "20%",
        backgroundColor: "pink",
        border: "1px solid black",
        boxSizing: "border-box",
      }}
    >
      {props.name}
    </div>
  );
}

export default AnswerComponent;
