import React from "react";
import QuestionComponent from "./components/QuestionComponent";
import AnswerComponent from "./components/AnswerComponent";
import NavigationComponent from "./components/NavigationComponent";
import TestData from "./data/TestData.js";
import hejdoktorLogo from "./assets/hejdoktor-logo.png";

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
    <>
      <img
        alt="hejdoktor logo"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "absolute",
          margin: "5px",
        }}
        src={hejdoktorLogo}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#EB533F",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
            height: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "20%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QuestionComponent
              question={listOfQuestions[questionNumber]["question"]}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "60%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              overflow: "auto",
            }}
          >
            {listOfQuestions[questionNumber]["answers"].map((item) => (
              <AnswerComponent
                key={item.name}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "20%",
              backgroundColor: "white",
            }}
          >
            <NavigationComponent ChangeQuestion={ChangeQuestion} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
