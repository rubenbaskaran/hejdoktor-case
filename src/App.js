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
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [listOfQuestions, setListOfQuestions] = React.useState(TestData);
  const [showResultScreen, setShowResultScreen] = React.useState(false);
  const [progressBarWidth, setProgressBarWidth] = React.useState("0%");
  const [chosenAnswers, setChosenAnswers] = React.useState([]);
  const [allAnswers, setAllAnswers] = React.useState([]);

  function ChangeQuestion(direction) {
    if (direction === "back") {
      if (
        questionNumber === listOfQuestions.length - 1 &&
        showResultScreen === true
      ) {
        setShowResultScreen(() => false);
      } else if (questionNumber !== 0) {
        setQuestionNumber(() => questionNumber - 1);
      }
    } else if (direction === "next") {
      if (
        allAnswers[questionNumber] === undefined ||
        allAnswers[questionNumber].length === 0
      ) {
        setAllAnswers((oldArray) => [...oldArray, chosenAnswers]);
      } else {
        const _allAnswers = [...allAnswers];
        _allAnswers[questionNumber] = chosenAnswers;
        setAllAnswers(_allAnswers);
      }

      if (questionNumber !== listOfQuestions.length - 1) {
        setQuestionNumber(() => questionNumber + 1);
      } else if (questionNumber === listOfQuestions.length - 1) {
        setShowResultScreen(() => true);
      }
    }
  }

  React.useEffect(() => {
    setChosenAnswers(() => []);

    if (showResultScreen) {
      setProgressBarWidth("100%");
    } else {
      setProgressBarWidth(
        () => (100 / listOfQuestions.length) * questionNumber + "%"
      );
    }
  }, [questionNumber, showResultScreen]);

  React.useEffect(() => {
    console.log(allAnswers);
  }, [allAnswers]);

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
              {questionNumber !== 0 && (
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
            {!showResultScreen && (
              <QuestionComponent
                question={listOfQuestions[questionNumber]["question"]}
              />
            )}
            {showResultScreen && (
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
              {!showResultScreen && (
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
              height: "90%",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              overflow: "auto",
              backgroundColor: "#F1F1F1",
              padding: "20px 0px 20px 0px",
            }}
          >
            {!showResultScreen &&
              listOfQuestions[questionNumber]["answers"].map((item) => (
                <AnswerComponent
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  numberOfAllowedAnswers={
                    listOfQuestions[questionNumber]["numberOfAllowedAnswers"]
                  }
                  chosenAnswers={chosenAnswers}
                  setChosenAnswers={setChosenAnswers}
                  question={listOfQuestions[questionNumber]["question"]}
                />
              ))}
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "5%",
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
