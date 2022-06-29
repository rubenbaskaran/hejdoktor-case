import React from "react";

function QuestionComponent() {
  const [input, setInput] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "50%",
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label>What is your name?</label>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button
        onClick={() =>
          console.log(`You've entered: ${input}. Going to next question!`)
        }
      >
        Next question
      </button>
    </div>
  );
}

export default QuestionComponent;
