import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

function Card({ item }) {
  return (
    <div className={styles.card}>
      <img src='https://cdn-icons-png.flaticon.com/512/711/711769.png' style={{ width: '4rem' }} />
      <Link to={`/client/${item._id}`}>
        <p>{item.name}</p>
      </Link>
    </div>
  );
}

export default Card;