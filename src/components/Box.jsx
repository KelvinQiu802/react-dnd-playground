import React from 'react';
import styles from '../styles/Box.module.css';

function Box({ title, children }) {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Box;
