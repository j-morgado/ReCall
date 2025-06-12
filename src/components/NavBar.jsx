import { useEffect, useState } from 'react';

export default function NavBar(props) {

  return (
    <nav>
      <h3>Select Deck</h3>

      <div className='custom-select'>
        <select>
          {props.decks.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}
