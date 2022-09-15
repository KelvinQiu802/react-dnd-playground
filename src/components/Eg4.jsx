import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Eg4() {
  const [position, setPosition] = React.useState({ top: 10, left: 10 });

  const handleDrop = (item, monitor, state) => {
    const { x, y } = monitor.getDifferenceFromInitialOffset();
    setPosition((prev) => ({ top: state.top + y, left: state.left + x }));
  };

  const dragStyle = {
    position: 'relative',
    justifyContent: 'left',
    left: `${position.left}px`,
    top: `${position.top}px`,
  };

  return (
    <>
      <Droppable
        accept='drag-4'
        handleDrop={handleDrop}
        big={true}
        style={{ textAlign: 'start' }}
        state={position}
      >
        <Draggable
          type='drag-4'
          text='Drag Me!'
          style={dragStyle}
          hideWhenDrag={true}
          item={{ top: position.top, left: position.left }}
        />
      </Droppable>
    </>
  );
}

export default Eg4;
