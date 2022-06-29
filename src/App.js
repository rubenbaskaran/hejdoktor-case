import QuestionComponent from "./components/QuestionComponent";

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50%",
          height: "50%",
          backgroundColor: "lightblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuestionComponent />
      </div>
    </div>
  );
}

export default App;
