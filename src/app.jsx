import { useEffect, useState } from 'react';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import NavBar from './components/NavBar';

export default () => {
  const [card, setCard] = useState(true);

  const clickHandler = () => {
    setCard(!card);
  };

  const deck = [
    { title: '1st Card', question: '1st Question', answer: '1st Answer' },
    { title: '2st Card', question: '2st Question', answer: '2st Answer' },
    { title: '3st Card', question: '3st Question', answer: '3st Answer' },
    { title: '4st Card', question: '4st Question', answer: '4st Answer' },
    { title: '5st Card', question: '5st Question', answer: '5st Answer' },
    { title: '6st Card', question: '6st Question', answer: '6st Answer' },
  ];
  const [cardIndex, setCardIndex] = useState(0);
  const [content, setContent] = useState(deck[cardIndex]);

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

  return (
    <div id='app'>
      <NavBar></NavBar>
      <div className='cardArea'>
        <button onClick={prevCard}>Prev</button>
        {card ? (
          <CardFront content={content} />
        ) : (
          <CardBack content={content} />
        )}
        <button onClick={nextCard}>Next</button>
      </div>
      <button onClick={clickHandler}>Flip</button>
    </div>
  );
};
