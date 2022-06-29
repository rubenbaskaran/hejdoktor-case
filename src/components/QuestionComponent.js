import React from "react";

function QuestionComponent(props) {
  const [input, setInput] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "20%",
        backgroundColor: "grey",
      }}
    >
      <label
        style={{
          display: "flex",
          width: "90%",
          height: "90%",
          backgroundColor: "purple",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {props.question}
      </label>
    </div>
  );
}

export default QuestionComponent;
