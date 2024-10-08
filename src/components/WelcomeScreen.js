import React, { useState } from "react";
import styles from "../styles/WelcomeScreen.module.css";
import Logout from "./Logout";
import HighScores from "./HighScores";

function WelcomeScreen({ onStart, onLogout, highScores }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(5);
  const [timePerQuestion, setTimePerQuestion] = useState(15);

  const handleStart = () => {
    requestFullScreen();
    onStart(difficulty, numQuestions, timePerQuestion);
  };

  const requestFullScreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable fullscreen:", err);
        });
      } else if (document.documentElement.mozRequestFullScreen) {
        // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    }
  };

  return (
    <div className={styles.welcomeScreen}>
      <Logout onLogout={onLogout} />
      <h2>🎉 Welcome to the Quiz App! 🎉</h2>
      <p>Get ready to groove with these quizzes! 🌟</p>
      <div className={styles.options}>
        <label>
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label>
          Number of Questions:
          <input
            type="range"
            min="1"
            max="20"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
          />
          <span>{numQuestions}</span>
        </label>
        <label>
          Time per Question (seconds):
          <input
            type="range"
            min="5"
            max="60"
            value={timePerQuestion}
            onChange={(e) => setTimePerQuestion(Number(e.target.value))}
          />
          <span>{timePerQuestion}</span>
        </label>
      </div>
      <button onClick={handleStart} className={styles.startButton}>
        Start Quiz 🚀
      </button>
      <HighScores highScores={highScores} />
    </div>
  );
}

export default WelcomeScreen;
