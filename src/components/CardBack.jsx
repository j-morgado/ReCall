export default function CardBack(props) {
  return (
    <div className="card cardBack">
      <div className="cardRowTop">
        <h1>{props.deckName} Deck</h1>
        <h4>{`${props.cardIndex}/${props.deck.length}`}</h4>
      </div>
      <div className="cardRowBottom">
        <h3>Answer</h3>
        <h2>{props.content.answer}</h2>
      </div>
    </div>
  );
}
