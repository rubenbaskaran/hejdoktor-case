import React from "react";
import QuestionComponent from "./components/QuestionComponent";
import AnswerComponent from "./components/AnswerComponent";
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
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "60%",
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {listOfQuestions[questionNumber]["answers"].map((item) => (
            <AnswerComponent key={item.name} name={item.name} />
          ))}
        </div>
        <NavigationComponent ChangeQuestion={ChangeQuestion} />
      </div>
    </div>
  );
}

export default App;
