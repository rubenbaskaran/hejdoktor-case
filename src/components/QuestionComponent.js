import React from "react";
import AnswerComponent from "./AnswerComponent";

function QuestionComponent(props) {
  const [input, setInput] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "50%",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "33%",
          backgroundColor: "lightgreen",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <button
            style={{
              width: "80%",
              height: "80%",
            }}
            onClick={() => props.ChangeQuestion("back")}
          >
            Back
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <button
            style={{
              width: "80%",
              height: "80%",
            }}
            onClick={() => props.ChangeQuestion("next")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionComponent;
