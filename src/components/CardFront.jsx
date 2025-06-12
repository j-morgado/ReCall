export default function CardFront(props) {
  return (
    <div className="card">
      <div class="cardRowTop">
        <h1>{props.deckName} Deck</h1>
        <h4>{`${props.cardIndex}/${props.deck.length}`}</h4>
      </div>
      <div class="cardRowBottom">
        <h3>Question</h3>
        <h2>{props.content.question}</h2>
      </div>
    </div>
  );
}
