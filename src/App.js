import React from "react";
import QuestionComponent from "./components/QuestionComponent";
import AnswerComponent from "./components/AnswerComponent";
import ProgressBarComponent from "./components/ProgressBarComponent";
import TestData from "./data/TestData.js";
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

  React.useEffect(() => {
    // console.log(allAnswers); // TODO: Show on result page
  }, [answersForAllQuestions]);

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

  function ShowResultsOnFinalScreen() {
    console.log(answersForAllQuestions);
    let output = [];

    answersForAllQuestions.forEach((element) => {
      element.forEach((childElement) => {
        output.push(
          <div
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
          >
            {childElement["question"]}
          </div>
        );
        output.push(
          <div style={{ fontSize: "20px" }}>
            {"- " + childElement["answer"]}
          </div>
        );
      });
    });

    return <div>{output}</div>;
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <label style={{ fontSize: "40px" }}>Overview of answers</label>
                {ShowResultsOnFinalScreen()}
              </div>
            )}
          </div>

          <ProgressBarComponent progressBarWidth={progressBarWidth} />
        </div>
      </div>
    </>
  );
}

export default App;
