import React from 'react';
import { useDrag } from 'react-dnd';
import styles from '../styles/Draggable.module.css';

function Draggable({ type, item, text, style, hideWhenDrag, state }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [state]
  );

  if (isDragging && hideWhenDrag) {
    return <div ref={drag}></div>;
  }

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
