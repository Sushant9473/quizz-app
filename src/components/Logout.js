import React from "react";
import styles from "../styles/Logout.module.css";

function Logout({ onLogout }) {
  return (
    <button className={styles.logoutButton} onClick={onLogout}>
      Logout
    </button>
  );
}

export default Logout;
