import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

function Login({ onLogin }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      onLogin(name);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Welcome to the Quiz App 🚀</h1>  
      <h2>Login to Start 🧠</h2>  
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default Login;
