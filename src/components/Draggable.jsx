import React from 'react';
import { useDrag } from 'react-dnd';
import styles from '../styles/Draggable.module.css';

function Draggable({ type, item, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      className={`${styles.draggable} ${isDragging && styles.dragging}`}
      ref={drag}
    >
      {text}
    </span>
  );
}

export default Draggable;
