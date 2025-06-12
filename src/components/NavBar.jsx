import { useEffect, useState } from 'react';

export default function NavBar(props) {
  const handleChange = (event) => {
    props.onDeckChange(event.target.value);
  };
  return (
    <nav>
      <h3>Select Deck</h3>

      <div className='custom-select'>
        <select id='selectedDeck' onChange={handleChange}>
          {props.decks.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}
