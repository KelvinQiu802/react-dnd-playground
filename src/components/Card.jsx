import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import styles from '../styles/Card.module.css';

function Card({ index, id, text, handleDrag, state }) {
  const ref = React.useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ handlerId }, drop] = useDrop(
    () => ({
      accept: 'card',
      collect: (monitor) => ({
        handlerId: monitor.getHandlerId(),
      }),
      hover: (item, monitor) => {
        if (!ref.current) return;
        const dragIndex = item.index;
        const hoverIndex = index;
        // Do nothing if target and source are same
        if (dragIndex === hoverIndex) return;

        const hoverRect = ref.current.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverRect.top;

        // Only move when the mouse has crossed half of the items height
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        handleDrag(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }),
    [state]
  );

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));
  return (
    <div
      className={styles.draggable}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      {text}
    </div>
  );
}

export default Card;
