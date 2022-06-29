import React from "react";

function QuestionComponent(props) {
  const [input, setInput] = React.useState("");

  return (
    <>
      <label
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        {props.question}
      </label>
    </>
  );
}

export default QuestionComponent;
