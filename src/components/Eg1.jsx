import React from 'react';
import Draggable from './Draggable';
import DragGroup from './DragGroup';
import Droppable from './Droppable';

function Eg1() {
  const handleDrop = (item) => {
    alert(`You drop ${item.name}!`);
  };

  return (
    <>
      <DragGroup>
        <Draggable type='drag1' text='React' item={{ name: 'React' }} />
        <Draggable type='drag1' text='Vue' item={{ name: 'Vue' }} />
        <Draggable type='drag1' text='Angular' item={{ name: 'Angular' }} />
      </DragGroup>
      <Droppable accept='drag1' handleDrop={handleDrop} text='Drop it Here!' />
    </>
  );
}

export default Eg1;
