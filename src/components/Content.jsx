import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';
import Draggable from './Draggable';

function Content() {
  return (
    <div className={styles.content}>
      <Box title='Basic Usage'>
        <Draggable type='drag1' text='Drag Me' />
      </Box>
    </div>
  );
}

export default Content;
