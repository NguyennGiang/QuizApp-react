import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/Question";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  const { score, setScore, setGameState, name } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1> Welcome, {name}</h1>
      <h1>Question {currQuestion + 1}: {Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button className="btn" onClick={() => setOptionChosen("A")}>
          {" "}
          {Questions[currQuestion].optionA}{" "}
        </button>
        <button className="btn" onClick={() => setOptionChosen("B")}>
          {" "}
          {Questions[currQuestion].optionB}{" "}
        </button>
        <button className="btn" onClick={() => setOptionChosen("C")}>
          {" "}
          {Questions[currQuestion].optionC}{" "}
        </button>
        <button className="btn" onClick={() => setOptionChosen("D")}>
          {" "}
          {Questions[currQuestion].optionD}{" "}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}> Finish Quiz </button>
      ) : (
        <button onClick={nextQuestion}> Next Question </button>
      )}
    </div>
  );
}
export default Quiz;
