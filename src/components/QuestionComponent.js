import React from "react";
import TestData from "../data/TestData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function QuestionComponent(props) {
  return (
    <>
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
            width: "10%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.questionId !== 0 && (
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              style={{
                height: "50px",
                width: "50px",
                cursor: "pointer",
              }}
              onClick={() => props.ChangeQuestion("back")}
            />
          )}
        </div>
        <label
          style={{
            display: "flex",
            width: "80%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          {props.showFinalScreen
            ? "Thank you for participating!"
            : props.question +
              ` (${props.answersForSingleQuestion.length}/${
                TestData[props.questionId]["numberOfRequiredAnswers"]
              })`}
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "10%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!props.showFinalScreen &&
            TestData[props.questionId]["numberOfRequiredAnswers"] ===
              props.answersForSingleQuestion.length && (
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                style={{
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
                onClick={() => props.ChangeQuestion("next")}
              />
            )}
        </div>
      </div>
    </>
  );
}

export default QuestionComponent;
