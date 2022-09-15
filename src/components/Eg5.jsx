import React from 'react';
import Draggable from './Draggable';

function Eg5() {
  return (
    <div>
      <Draggable type='drag-5-1' text='Outer'>
        <Draggable type='drag-5-2' text='Inner' />
      </Draggable>
    </div>
  );
}

export default Eg5;
