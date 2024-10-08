import React from 'react';
import styles from '../styles/ThemeToggle.module.css';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
