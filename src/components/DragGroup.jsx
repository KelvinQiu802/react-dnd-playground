import React from 'react';
import styles from '../styles/DragGroup.module.css';

function DragGroup({ children }) {
  return <div className={styles.group}>{children}</div>;
}

export default DragGroup;
