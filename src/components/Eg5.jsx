import React from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Eg5() {
  const handleDrop = (item, monitor, state) => {
    alert(`You drop ${item.name}!`);
  };
  return (
    <>
      <Draggable type='drag-5' text='Cat' item={{ name: 'Cat' }}>
        <Draggable type='drag-5' text='British' item={{ name: 'British' }}>
          <Draggable
            type='drag-5'
            text='Shorthair'
            item={{ name: 'Shorthair' }}
          />
          <Draggable
            type='drag-5'
            text='Longhair'
            item={{ name: 'Longhair' }}
          />
        </Draggable>
      </Draggable>
      <Droppable accept='drag-5' handleDrop={handleDrop} text='Drop Here' />
    </>
  );
}

export default Eg5;
