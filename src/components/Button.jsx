import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Button.module.css";

function Button({ children, to, handleClick }) {
  return (
    <Link className={styles.button} to={to}>
      {children}
    </Link>
  )
}

export default Button