import React from "react";
import AnswerComponent from "./AnswerComponent";

function QuestionComponent(props) {
  const [input, setInput] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "80%",
        backgroundColor: "grey",
      }}
    >
      <label
        style={{
          display: "flex",
          width: "100%",
          height: "33%",
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {props.question} + " " + {props.numberOfAllowedAnswers}
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "34%",
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
      </div>
    </div>
  );
}

export default QuestionComponent;
