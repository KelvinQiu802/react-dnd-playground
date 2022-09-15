import React from 'react';
import styles from '../styles/Content.module.css';
import Box from './Box';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Content() {
  return (
    <div className={styles.content}>
      <Box title='Basic Usage'>
        <Draggable type='drag1' text='Drag Me' item={{ id: 1 }} />
        <Droppable
          accept='drag1'
          handleDrop={(item) => {
            console.log(item.id);
          }}
          text='Drop at Here'
        />
      </Box>
    </div>
  );
}

export default Content;
