import React from "react";
import QuestionComponent from "./components/QuestionComponent";
import NavigationComponent from "./components/NavigationComponent";
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
          flexDirection: "column",
          width: "75%",
          height: "75%",
        }}
      >
        <QuestionComponent
          question={listOfQuestions[questionNumber]["question"]}
          numberOfAllowedAnswers={
            listOfQuestions[questionNumber]["numberOfAllowedAnswers"]
          }
        />
        <NavigationComponent ChangeQuestion={ChangeQuestion} />
      </div>
    </div>
  );
}

export default App;
