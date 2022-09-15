import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Eg1() {
  const handleDrop = () => {
    alert('You drop it!');
  };
  return (
    <>
      <Draggable type='drag1' text='Drag Me' />
      <Droppable accept='drag1' handleDrop={handleDrop} text='Drop it Here!' />
    </>
  );
}

export default Eg1;
