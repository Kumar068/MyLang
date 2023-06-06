import React, { useState } from 'react';

const Cards = ({ amount }) => {
  const [cards, setCards] = useState(Array(amount).fill('down'));

  const handleClick = (index) => {
    const newCards = cards.map((card, i) => (i === index ? 'up' : 'down'));
    setCards(newCards);
  };

  const styles = {
    margin: '16px',
          padding: '16px',
          borderRadius: '1px solid #ccc',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          boxShadow: '0 2px 5px #ccc',
          cursor: 'pointer',
  }

  return (
    <div style={styles}>
    <table>
      <tbody>
        <tr>
          {cards.map((card, index) => (
            <td key={index} onClick={() => handleClick(index)}>
              {card}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Cards;
