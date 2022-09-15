import React from 'react';
import { useDrag } from 'react-dnd';
import styles from '../styles/Draggable.module.css';

function Draggable({ type, item, text, style }) {
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
      style={style}
      ref={drag}
    >
      {text}
    </span>
  );
}

export default Draggable;
