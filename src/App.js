import React from "react";
import QuestionComponent from "./components/QuestionComponent";

function App() {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [listOfQuestions, setListOfQuestions] = React.useState([
    { question: "What is your firstname?", type: "text" },
    { question: "What is your lastname?", type: "text" },
  ]);

  function ChangeQuestion(direction) {
    if (direction === "back") {
      if (questionNumber !== 0) {
        setQuestionNumber(questionNumber - 1);
      }
    } else if (direction === "next") {
      if (questionNumber !== listOfQuestions.length) {
        setQuestionNumber(questionNumber + 1);
      }
    }
  }

  React.useEffect(() => {
    console.log("Length: " + listOfQuestions.length);
    console.log(questionNumber);
  }, [questionNumber]);

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
        <QuestionComponent ChangeQuestion={ChangeQuestion} />
      </div>
    </div>
  );
}

export default App;
