import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Eg6() {
  const handleOuter = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Outer!');
  };
  const handleMiddle = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Middle!');
  };
  const handleInner = (item, monitor, state) => {
    if (!!monitor.didDrop() && !!monitor.getDropResult()) return;
    alert('Inner!');
  };
  return (
    <>
      <Draggable type='drag-6' text='Drag Me' />
      <Droppable accept='drag-6' text='Outer' handleDrop={handleOuter}>
        <Droppable accept='drag-6' text='Middle' handleDrop={handleMiddle}>
          <Droppable accept='drag-6' text='Inner' handleDrop={handleInner} />
        </Droppable>
      </Droppable>
    </>
  );
}

export default Eg6;
