import React from 'react';
import styles from '../styles/HighScores.module.css';

function HighScores({ highScores }) {
  if (!highScores || Object.keys(highScores).length === 0) {
    return (
      <div className={styles.highScores}>
        <h2>High Scores</h2>
        <p>No high scores available yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.highScores}>
      <h2>High Scores</h2>
      <ul className={styles.scoreList}>
        {Object.entries(highScores).map(([difficulty, scores]) => (
          <li key={difficulty} className={styles.scoreItem}>
            <span className={styles.difficultyName}>Difficulty {difficulty}:</span>
            <span className={styles.score}>Highest Score: {Math.max(...scores)}</span>
            <ul className={styles.previousScoresList}>
              {scores.map((score, index) => (
                <li key={index} className={styles.previousScore}>
                  Attempt {index + 1}: {score}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighScores;
