import React from 'react';
import Card from './Card';

function Eg7() {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      text: 'JavaScript',
    },
    {
      id: 2,
      text: 'Python',
    },
    {
      id: 3,
      text: 'Go',
    },
    {
      id: 4,
      text: 'Java',
    },
    {
      id: 5,
      text: 'Ruby',
    },
    {
      id: 6,
      text: 'C++',
    },
  ]);

  return (
    <div>
      {cards.map((item, index) => (
        <Card key={item.id} index={index} text={item.text} />
      ))}
    </div>
  );
}

export default Eg7;
