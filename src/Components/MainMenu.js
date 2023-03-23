import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
import { TextField } from "@mui/material";

export default function MainMenu() {
  const { gameState, setGameState, name, setName } = useContext(QuizContext);
  return (
    <div className="Menu">
      <div className="settings">
        <TextField label="Name" variant="outlined" margin="dense" helperText= "Please enter your name" onChange={(e) => setName(e.target.value)}></TextField>
      </div>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
