import { useEffect, useState } from "react";

export default function NavBar(props) {
  const handleChange = (event) => {
    props.onDeckChange(event.target.value);
  };

  return (
    <nav>
      {/* <span id="title">ReCall</span> */}
      <img src="src/assets/logo.png" width="200px"></img>
      <div id="deckSelect">
        <h3>Select Deck</h3>
        <div className="custom-select">
          <select id="selectedDeck" onChange={handleChange}>
            {props.decks.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
