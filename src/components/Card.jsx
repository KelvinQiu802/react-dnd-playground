import React from 'react';
import styles from '../styles/Card.module.css';

function Card({ index, id, text, handleDrag }) {
  return <div className={styles.draggable}>{text}</div>;
}

export default Card;
