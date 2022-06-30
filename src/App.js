import React from "react";
import TestData from "./data/TestData.js";
import QuestionComponent from "./components/QuestionComponent";
import AnswerComponent from "./components/AnswerComponent";
import ProgressBarComponent from "./components/ProgressBarComponent";
import FinalScreenComponent from "./components/FinalScreenComponent";
import hejdoktorLogo from "./assets/hejdoktor-logo.png";

function App() {
  const [questionId, setQuestionId] = React.useState(0);
  const [showFinalScreen, setShowFinalScreen] = React.useState(false);
  const [progressBarWidth, setProgressBarWidth] = React.useState("0%");
  const [answersForSingleQuestion, setAnswersForSingleQuestion] =
    React.useState([]);
  const [answersForAllQuestions, setAnswersForAllQuestions] = React.useState(
    []
  );

  React.useEffect(() => {
    GetSavedAnswers();
    UpdateProgressBar();
  }, [questionId, showFinalScreen]);

  function GetSavedAnswers() {
    if (
      answersForAllQuestions[questionId] !== undefined &&
      answersForAllQuestions[questionId].length !== 0
    ) {
      setAnswersForSingleQuestion(() => answersForAllQuestions[questionId]);
    }
  }

  function UpdateProgressBar() {
    if (showFinalScreen) {
      setProgressBarWidth("100%");
    } else {
      setProgressBarWidth(() => (100 / TestData.length) * questionId + "%");
    }
  }

  function ChangeQuestion(direction) {
    if (direction === "back") {
      if (showFinalScreen === true) {
        setShowFinalScreen(() => false);
      } else {
        setQuestionId(() => questionId - 1);
      }
    } else if (direction === "next") {
      SaveOrUpdateAnswers();

      if (questionId !== TestData.length - 1) {
        setQuestionId(() => questionId + 1);
      } else if (questionId === TestData.length - 1) {
        setShowFinalScreen(() => true);
      }
    }
  }

  function SaveOrUpdateAnswers() {
    if (
      answersForAllQuestions[questionId] === undefined ||
      answersForAllQuestions[questionId].length === 0
    ) {
      setAnswersForAllQuestions((oldArray) => [
        ...oldArray,
        answersForSingleQuestion,
      ]);
    } else {
      const copyOfAllAnswers = [...answersForAllQuestions];
      copyOfAllAnswers[questionId] = answersForSingleQuestion;
      setAnswersForAllQuestions(() => copyOfAllAnswers);
    }

    setAnswersForSingleQuestion([]);
  }

  return (
    <>
      <img
        alt="hejdoktor logo"
        style={{
          position: "absolute",
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
            width: "80%",
            height: "90%",
            backgroundColor: "white",
            border: "5px solid black",
            borderRadius: "25px",
            marginTop: "10px",
          }}
        >
          <QuestionComponent
            question={TestData[questionId]["question"]}
            questionId={questionId}
            ChangeQuestion={ChangeQuestion}
            showFinalScreen={showFinalScreen}
            answersForSingleQuestion={answersForSingleQuestion}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "85%",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              overflow: "auto",
              backgroundColor: "#F1F1F1",
              padding: "20px 0px 20px 0px",
            }}
          >
            {!showFinalScreen &&
              TestData[questionId]["answers"].map((item) => (
                <AnswerComponent
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  numberOfRequiredAnswers={
                    TestData[questionId]["numberOfRequiredAnswers"]
                  }
                  answersForSingleQuestion={answersForSingleQuestion}
                  setAnswersForSingleQuestion={setAnswersForSingleQuestion}
                  question={TestData[questionId]["question"]}
                  allAnswers={answersForAllQuestions}
                  questionNumber={questionId}
                />
              ))}
            {showFinalScreen && (
              <FinalScreenComponent
                answersForAllQuestions={answersForAllQuestions}
              />
            )}
          </div>
          <ProgressBarComponent progressBarWidth={progressBarWidth} />
        </div>
      </div>
    </>
  );
}

export default App;
