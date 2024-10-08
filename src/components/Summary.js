import React from "react";
import styles from "../styles/Summary.module.css";

function Summary({ questions, userAnswers, onRestart, fullScreenViolations }) {
  const score = userAnswers.reduce((total, answers, index) => {
    if (index >= questions.length) return total;
    const correctAnswers = questions[index].correct_answer;
    const isCorrect = Array.isArray(correctAnswers)
      ? correctAnswers.every((answer) => answers.includes(answer)) &&
        answers.length === correctAnswers.length
      : answers.includes(correctAnswers);
    return total + (isCorrect ? 1 : 0);
  }, 0);

  const percentage = (score / questions.length) * 100;

  let message = "";
  let emoji = "";
  if (percentage >= 80) {
    message = "Excellent job! You're a quiz master!";
    emoji = "🎉";
  } else if (percentage >= 60) {
    message = "Good work! Keep practicing to improve.";
    emoji = "👍";
  } else {
    message = "Nice try! There's room for improvement.";
    emoji = "😊";
  }

  let violationMessage = "";
  if (fullScreenViolations > 0) {
    violationMessage = `You exited fullscreen ${fullScreenViolations} time${
      fullScreenViolations > 1 ? "s" : ""
    }.`;
    if (fullScreenViolations >= 3) {
      violationMessage +=
        " The quiz was ended early due to multiple violations.";
    }
  }

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryHeader}>
        <h2>Quiz Summary</h2>
        <p>
          Your Score: {score} / {questions.length} {emoji}
        </p>
        <p className={styles.message}>{message}</p>
        {violationMessage && (
          <p className={styles.violationMessage}>{violationMessage}</p>
        )}
      </div>
      <div className={styles.questionReview}>
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index] || [];
          const correctAnswer = Array.isArray(question.correct_answer)
            ? question.correct_answer
            : [question.correct_answer];
          const isCorrect = Array.isArray(question.correct_answer)
            ? question.correct_answer.every((answer) =>
                userAnswer.includes(answer)
              ) && userAnswer.length === question.correct_answer.length
            : userAnswer.includes(question.correct_answer);

          return (
            <div key={index} className={styles.questionItem}>
              <p className={styles.questionText}>{question.question}</p>
              <p className={styles.userAnswer}>
                Your answer:{" "}
                <span>{userAnswer.join(", ") || "Not answered"}</span>
              </p>
              <p className={styles.correctAnswer}>
                Correct answer: {correctAnswer.join(", ")}
              </p>
              <p className={styles.explanation}>
                Explanation: {question.explanation}
              </p>
            </div>
          );
        })}
      </div>
      <button className={styles.restartButton} onClick={onRestart}>
        Start New Quiz
      </button>
    </div>
  );
}

export default Summary;
