import React from "react";

function AnswerComponent(props) {
  return (
    <div
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
