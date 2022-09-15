import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';

function Content() {
  return (
    <div className={styles.content}>
      <Box title='Basic Usage'>
        <div>Something</div>
      </Box>
    </div>
  );
}

export default Content;
