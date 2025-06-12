// Imports
import { useEffect, useState } from 'react';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import NavBar from './components/NavBar';

export default () => {
  // Use State Hooks
  const [card, setCard] = useState(true);
  const [deck, setDeck] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [content, setContent] = useState(null);
  const [decks, setDecks] = useState([1, 2, 3]);

  // Use Effect Hooks
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDecks();
  }, []);

  // Fetch Functions
  const fetchData = async () => {
    const response = await fetch('/deck/3');
    const result = await response.json();
    setDeck(result);
    setContent(result[0]);
  };

  const fetchDecks = async () => {
    const response = await fetch('/deckList');
    const result = await response.json();
    setDecks(result);
  };

  // Button handlers
  const flipCard = () => {
    setCard(!card);
  };
  const prevCard = () => {
    if (cardIndex > 0) {
      const newIndex = cardIndex - 1;
      setCardIndex(newIndex);
      setContent(deck[newIndex]);
      setCard(true);
    }
  };

  const nextCard = () => {
    if (cardIndex < deck.length - 1) {
      const newIndex = cardIndex + 1;
      setCardIndex(newIndex);
      setContent(deck[newIndex]);
      setCard(true);
    }
  };

  // Return
  return (
    <div id='app'>
      <NavBar decks={decks}></NavBar>
      <div className='cardArea'>
        <button onClick={prevCard}>ᐊ</button>
        {content &&
          (card ? (
            <CardFront content={content} />
          ) : (
            <CardBack content={content} />
          ))}
        <button onClick={nextCard}>ᐅ</button>
      </div>
      <button onClick={flipCard}>⇄</button>
    </div>
  );
};
