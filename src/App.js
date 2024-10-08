import React, { useState, useEffect } from "react";
import QuizSelection from "./components/QuizSelection";
import Question from "./components/Question";
import Summary from "./components/Summary";
import ThemeToggle from "./components/ThemeToggle";
import WelcomeScreen from "./components/WelcomeScreen";
import HighScores from "./components/HighScores";
import Login from "./components/Login";
import { fetchQuestions } from "./data/quizzes";
import useLocalStorage from "./hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/App.module.css";
import Logout from "./components/Logout";
function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [difficulty, setDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [showWelcome, setShowWelcome] = useState(true);
  const [highScores, setHighScores, removeHighScores] = useLocalStorage(
    "highScores",
    {}
  );
  const [error, setError] = useState(null);
  const [showHighScores, setShowHighScores] = useState(false);
  const [userName, setUserName] = useLocalStorage("userName", "");
  const [fullScreenViolations, setFullScreenViolations] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [timePerQuestion, setTimePerQuestion] = useState(15);

  useEffect(() => {
    if (difficulty) {
      fetchQuestions(difficulty, numQuestions)
        .then(setQuestions)
        .catch((err) =>
          setError("Failed to fetch questions. Please try again.")
        );
    }
  }, [difficulty, numQuestions]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement && !quizEnded) {
        setFullScreenViolations((prev) => prev + 1);
        setShowWarning(true);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [quizEnded]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleQuizStart = (
    selectedDifficulty,
    selectedNumQuestions,
    selectedTimePerQuestion
  ) => {
    setDifficulty(selectedDifficulty);
    setNumQuestions(selectedNumQuestions);
    setTimePerQuestion(selectedTimePerQuestion);
    setShowWelcome(false);
    setError(null);
    setFullScreenViolations(0);
    setQuizEnded(false);
    setShowWarning(false);
  };

  const handleAnswer = (answers) => {
    setUserAnswers([...userAnswers, answers]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowSummary(true);
      setQuizEnded(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((total, answers, index) => {
      const correctAnswer = questions[index].correct_answer;
      const isCorrect = Array.isArray(correctAnswer)
        ? correctAnswer.every((answer) => answers.includes(answer)) &&
          answers.length === correctAnswer.length
        : answers.includes(correctAnswer);
      return total + (isCorrect ? 1 : 0);
    }, 0);
  };

  const saveHighScore = (score) => {
    const newHighScores = { ...highScores };

    if (!Array.isArray(newHighScores[difficulty])) {
      newHighScores[difficulty] = [];
    }

    newHighScores[difficulty].push(score);
    setHighScores(newHighScores);
  };

  const restartQuiz = () => {
    const score = calculateScore();
    saveHighScore(score);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowSummary(false);
    setShowWelcome(true);
    setError(null);
    setFullScreenViolations(0);
    setQuizEnded(true);
    setShowWarning(false);

    // Attempt to exit fullscreen, but don't throw an error if it fails
    try {
      exitFullScreen();
    } catch (error) {
      console.error("Error exiting fullscreen:", error);
    }
  };

  const [showLogout, setShowLogout] = useState(false);

  const resetHighScores = () => {
    setHighScores({});
    removeHighScores();
  };

  const handleLogout = () => {
    setUserName("");
    localStorage.removeItem("userName");
    resetHighScores();
    setShowWelcome(false);
    setShowLogout(false);
  };

  const handleLogin = (name) => {
    setUserName(name);
    setShowWelcome(true);
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .catch((err) =>
            console.error("Error attempting to exit fullscreen:", err)
          );
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  const handleWarningClose = () => {
    setShowWarning(false);
    if (fullScreenViolations >= 3) {
      setShowSummary(true);
      setQuizEnded(true);
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  if (!userName) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <div className={styles.topRightButtons}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <h1 className={styles.title}>🧠 Super Quiz Challenge 🚀</h1>
      <p>Welcome, {userName}!</p>
      {error && <div className={styles.error}>{error}</div>}

      {showWelcome && (
        <WelcomeScreen
          onStart={handleQuizStart}
          onLogout={handleLogout}
          highScores={highScores}
        />
      )}

      {!showWelcome && !showSummary && questions.length > 0 && (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          showWarning={showWarning}
          onWarningClose={handleWarningClose}
          fullScreenViolations={fullScreenViolations}
          timePerQuestion={timePerQuestion}
        />
      )}

      {showSummary && (
        <Summary
          questions={questions}
          userAnswers={userAnswers}
          onRestart={restartQuiz}
          fullScreenViolations={fullScreenViolations}
        />
      )}
    </div>
  );
}

export default App;
