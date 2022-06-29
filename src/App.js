import React from "react";
import QuestionComponent from "./components/QuestionComponent";
import AnswerComponent from "./components/AnswerComponent";
import TestData from "./data/TestData.js";
import hejdoktorLogo from "./assets/hejdoktor-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [questionId, setQuestionId] = React.useState(0);
  const [showFinalScreen, setShowFinalScreen] = React.useState(false);
  const [progressBarWidth, setProgressBarWidth] = React.useState("0%");
  const [answersForSingleQuestion, setAnswersForSingleQuestion] =
    React.useState([]);
  const [answersForAllQuestions, setAnswersForAllQuestions] = React.useState(
    []
  );

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
      const _allAnswers = [...answersForAllQuestions];
      _allAnswers[questionId] = answersForSingleQuestion;
      setAnswersForAllQuestions(() => _allAnswers);
    }

    setAnswersForSingleQuestion([]);
  }

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

  React.useEffect(() => {
    // console.log(allAnswers);
  }, [answersForAllQuestions]);

  return (
    <>
      <img
        alt="hejdoktor logo"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: 0,
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
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "15%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {questionId !== 0 && (
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  style={{
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                  }}
                  onClick={() => ChangeQuestion("back")}
                />
              )}
            </div>
            {!showFinalScreen && (
              <QuestionComponent question={TestData[questionId]["question"]} />
            )}
            {showFinalScreen && (
              <QuestionComponent question="Thank you for participating!" />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!showFinalScreen &&
                TestData[questionId]["numberOfRequiredAnswers"] ===
                  answersForSingleQuestion.length && (
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      height: "50px",
                      width: "50px",
                      cursor: "pointer",
                    }}
                    onClick={() => ChangeQuestion("next")}
                  />
                )}
            </div>
          </div>
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
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "10%",
              alignItems: "center",
              justifyContent: "flex-start",
              fontWeight: "bold",
            }}
          >
            <div
              style={{
                display: "flex",
                width: progressBarWidth,
                height: "50%",
                backgroundColor:
                  progressBarWidth === "0%" ? "white" : "lightblue",
                margin: "0px 10px 0px 10px",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              {progressBarWidth}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
