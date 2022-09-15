import React from 'react';
import { useDrop } from 'react-dnd';
import styles from '../styles/Droppable.module.css';

function Droppable({ accept, handleDrop, text }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;

  return (
    <div
      className={`${styles.droppable} ${isActive && styles.over} ${
        !isActive && canDrop && styles.can
      } `}
      ref={drop}
    >
      {text}
    </div>
  );
}

export default Droppable;
