import React from "react";

function FinalScreenComponent(props) {
  function ShowResultsOnFinalScreen() {
    let nestedAnswersArray = [];

    // For getting each unique question
    props.answersForAllQuestions.forEach((multipleAnswerItem, index) => {
      const question = multipleAnswerItem[0]["question"];
      nestedAnswersArray.push({ key: index, question: question, answers: [] });
    });

    // For nesting the multiple answers for a question in a single array
    props.answersForAllQuestions.forEach((multipleAnswerItem) => {
      multipleAnswerItem.forEach((singleAnswerItem) => {
        nestedAnswersArray.forEach((item) => {
          if (item["question"] === singleAnswerItem["question"]) {
            nestedAnswersArray[item.key]["answers"].push(
              singleAnswerItem["answer"]
            );
          }
        });
      });
    });

    let output = [];
    nestedAnswersArray.forEach((element) => {
      output.push(
        <div key={element["key"]}>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            {element["question"]}
          </div>
          <div style={{ fontSize: "25px" }}>
            {"- " + String(element["answers"]).replaceAll(",", ", ")}
          </div>
        </div>
      );
    });

    return <div>{output}</div>;
  }

  return (
    <>
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
    </>
  );
}

export default FinalScreenComponent;
