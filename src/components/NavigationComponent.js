import React from "react";

function AnswerComponent(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100%",
        }}
      >
        <button
          style={{
            width: "80%",
            height: "80%",
          }}
          onClick={() => props.ChangeQuestion("back")}
        >
          Back
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100%",
        }}
      >
        <button
          style={{
            width: "80%",
            height: "80%",
          }}
          onClick={() => props.ChangeQuestion("next")}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default AnswerComponent;
