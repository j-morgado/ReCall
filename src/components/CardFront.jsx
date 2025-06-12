export default function CardFront(props) {
  return (
    <div className='card'>
      <h2>Question</h2>
      <h3>{props.content.question}</h3>
    </div>
  );
}
