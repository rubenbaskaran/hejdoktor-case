import React from "react";

function ProgressBarComponent(props) {
  return (
    <>
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
            width: props.progressBarWidth,
            height: "50%",
            backgroundColor:
              props.progressBarWidth === "0%" ? "white" : "lightblue",
            margin: "0px 10px 0px 10px",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          {props.progressBarWidth}
        </div>
      </div>
    </>
  );
}

export default ProgressBarComponent;
