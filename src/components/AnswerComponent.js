import React from "react";

function AnswerComponent(props) {
  const [disableAnswer, setDisableAnswer] = React.useState(false);

  React.useEffect(() => {
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
  }, []);

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
      onClick={() => {
        if (
          disableAnswer === false &&
          props.chosenAnswers.length !== props.numberOfRequiredAnswers
        ) {
          props.setChosenAnswers((oldArray) => [
            ...oldArray,
            { question: props.question, answer: props.name },
          ]);
          setDisableAnswer(!disableAnswer);
        } else if (disableAnswer === true) {
          props.setChosenAnswers(
            props.chosenAnswers.filter((item) => item.answer !== props.name)
          );
          setDisableAnswer(!disableAnswer);
        }
      }}
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
            opacity: disableAnswer === true ? 0.1 : 1,
          }}
          src={props.image}
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
          }}
        >
          {props.name}
        </label>
      </div>
    </div>
  );
}

export default AnswerComponent;
