// Imports
import { useEffect, useState } from "react";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";
import NewDeck from "./components/NewDeck";

export default () => {
  // Use State Hooks
  const [card, setCard] = useState(true);
  const [deck, setDeck] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [content, setContent] = useState(null);
  const [decks, setDecks] = useState([]);
  const [deckName, setDeckName] = useState("");
  const [newDeck, setnewDeck] = useState({ visibility: "collapse" });

  const handleDeckChange = (deckId) => {
    fetchData(deckId);
  };

  // Use Effect Hooks
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDecks();
  }, []);

  // Fetch Functions
  const fetchData = async (deckId = "Cities") => {
    const response = await fetch(`/deck/${deckId}`);
    const result = await response.json();
    setDeck(result);
    setDeckName(deckId);
    setCardIndex(0);
    setContent(result[0]);
  };

  const fetchDecks = async () => {
    const response = await fetch("/deckList");
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

  const createNewDeck = () => {
    if (newDeck.visibility === "visible") {
      setnewDeck({ visibility: "collapse" });
    } else {
      setnewDeck({ visibility: "visible" });
    }
  };

  // Return
  return (
    <div id="app">
      <NewDeck id="newDeckPanel" className="popup" style={newDeck}></NewDeck>
      <NavBar decks={decks} onDeckChange={handleDeckChange}></NavBar>
      <div className="cardArea">
        {cardIndex > 0 ? <button onClick={prevCard}>Previous</button> : <button disabled>Previous</button>}
        {content &&
          (card ? (
            <CardFront content={content} deck={deck} cardIndex={cardIndex} deckName={deckName} />
          ) : (
            <CardBack content={content} deck={deck} cardIndex={cardIndex} deckName={deckName} />
          ))}

        {cardIndex < deck.length - 1 ? <button onClick={nextCard}>Next</button> : <button disabled>Next</button>}
      </div>
      <button onClick={flipCard}>Flip Flashcard</button>
      <button id="newDeckBtn" onClick={createNewDeck}>
        New Deck
      </button>
    </div>
  );
};
