import React from 'react';
import styles from '../styles/ProgressBar.module.css';

function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      <span className={styles.progressText}>{`${current} / ${total}`}</span>
    </div>
  );
}

export default ProgressBar;
