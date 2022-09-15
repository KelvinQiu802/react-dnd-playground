import React from 'react';
import { useDrop } from 'react-dnd';
import styles from '../styles/Droppable.module.css';

function Droppable({ accept, handleDrop, text }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={`${styles.droppable} ${isOver && styles.over}`} ref={drop}>
      {text}
    </div>
  );
}

export default Droppable;
