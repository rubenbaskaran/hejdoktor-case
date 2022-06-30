import React from "react";
import checkmark from "../assets/checkmark.png";

function AnswerComponent(props) {
  const [disableAnswer, setDisableAnswer] = React.useState(false);

  React.useEffect(() => {
    SetCheckmarkOverlay();
  }, []);

  function SetCheckmarkOverlay() {
    if (
      props.allAnswers[props.questionNumber] !== undefined &&
      props.allAnswers[props.questionNumber].length !== 0
    ) {
      props.allAnswers[props.questionNumber].map((item) => {
        if (item.answer === props.name) {
          setDisableAnswer(true);
        }
      });
    }
  }

  function SaveOrRemoveAnswer() {
    if (
      disableAnswer === false &&
      props.answersForSingleQuestion.length !== props.numberOfRequiredAnswers
    ) {
      props.setAnswersForSingleQuestion((oldArray) => [
        ...oldArray,
        { question: props.question, answer: props.name },
      ]);
      setDisableAnswer(!disableAnswer);
    } else if (disableAnswer === true) {
      props.setAnswersForSingleQuestion(
        props.answersForSingleQuestion.filter(
          (item) => item.answer !== props.name
        )
      );
      setDisableAnswer(!disableAnswer);
    }
  }

  return (
    <div
      disabled={disableAnswer}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "20%",
        height: "45%",
        border: "1px solid black",
        margin: "10px",
        boxSizing: "border-box",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "white",
        boxShadow: "3px 3px #C1C1C1",
        cursor: "pointer",
      }}
      onClick={() => SaveOrRemoveAnswer()}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          alt={props.name}
          style={{
            height: "80%",
            width: "100%",
            objectFit: "contain",
            opacity: disableAnswer === true ? 0.5 : 1,
          }}
          src={disableAnswer === true ? checkmark : props.image}
        ></img>
        <label
          style={{
            display: "flex",
            height: "20%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {props.name}
        </label>
      </div>
    </div>
  );
}

export default AnswerComponent;
