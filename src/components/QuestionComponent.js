import React from "react";

function QuestionComponent(props) {
  const [input, setInput] = React.useState("");

  return (
    <>
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
    </>
  );
}

export default QuestionComponent;
