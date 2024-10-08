import React from 'react';
import styles from '../styles/QuizSelection.module.css';

function QuizSelection({ quizzes, onSelect }) {
  return (
    <div className={styles.quizSelection}>
      <h2>Select a Quiz</h2>
      <div className={styles.quizList}>
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            className={styles.quizButton}
            onClick={() => onSelect(quiz)}
          >
            {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizSelection;