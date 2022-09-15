import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Eg5() {
  const handleDrop = () => {};
  return (
    <>
      <Draggable type='drag-5' text='Cat'>
        <Draggable type='drag-5' text='British'>
          <Draggable type='drag-5' text='Shorthair' />
          <Draggable type='drag-5' text='Longhair' />
        </Draggable>
      </Draggable>
      <Droppable accept='drag-5' handleDrop={handleDrop}></Droppable>
    </>
  );
}

export default Eg5;
