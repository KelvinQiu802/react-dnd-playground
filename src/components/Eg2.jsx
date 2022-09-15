import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function Eg2() {
  const handleShort = (item) => {
    alert(`${item.name} is Shorthair!`);
  };

  const handleLong = (item) => {
    alert(`${item.name} is Longhair!`);
  };

  return (
    <>
      <DragGroup>
        <Draggable
          type='drag2-bs'
          text='British Shorthair'
          item={{ name: 'British Shorthair' }}
        />
        <Draggable
          type='drag2-bl'
          text='British Longhair'
          item={{ name: 'British Longhair' }}
        />
      </DragGroup>
      <DragGroup>
        <Draggable
          type='drag2-as'
          text='American Shorthair'
          item={{ name: 'American Shorthair' }}
        />
        <Draggable
          type='drag2-al'
          text='American Longhair'
          item={{ name: 'American Longhair' }}
        />
      </DragGroup>
      <Droppable
        accept={['drag2-bs', 'drag2-as']}
        handleDrop={handleShort}
        text='Shorthair'
      />
      <Droppable
        accept={['drag2-bl', 'drag2-al']}
        handleDrop={handleLong}
        text='Longhair'
      />
    </>
  );
}

export default Eg2;
