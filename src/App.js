import React from "react";
import QuestionComponent from "./components/QuestionComponent";
import TestData from "./data/TestData.js";

function App() {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [listOfQuestions, setListOfQuestions] = React.useState(TestData);

  function ChangeQuestion(direction) {
    if (direction === "back") {
      if (questionNumber !== 0) {
        setQuestionNumber(() => questionNumber - 1);
      }
    } else if (direction === "next") {
      if (questionNumber !== listOfQuestions.length - 1) {
        setQuestionNumber(() => questionNumber + 1);
      }
    }
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          height: "50%",
          backgroundColor: "lightblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuestionComponent
          question={listOfQuestions[questionNumber]["question"]}
          type={listOfQuestions[questionNumber]["numberOfAllowedAnswers"]}
          ChangeQuestion={ChangeQuestion}
        />
      </div>
    </div>
  );
}

export default App;
