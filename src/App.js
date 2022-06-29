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
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                style={{
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
                onClick={() => ChangeQuestion("back")}
              />
            </div>
            <QuestionComponent
              question={listOfQuestions[questionNumber]["question"]}
            />
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
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
                onClick={() => ChangeQuestion("next")}
              />
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
              width: "100%",
              height: "5%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
