import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Eg4() {
  const [position, setPosition] = React.useState({ top: 10, left: 10 });

  const handleDrop = (item, monitor) => {
    console.log(monitor.getDifferenceFromInitialOffset());
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
      >
        <Draggable
          type='drag-4'
          text='Drag Me!'
          style={dragStyle}
          hideWhenDrag={true}
        />
      </Droppable>
    </>
  );
}

export default Eg4;
