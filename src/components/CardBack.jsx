export default function CardBack(props) {
  return (
    <div className='card'>
      <h2>Answer</h2>
      <h3>{props.content.answer}</h3>
    </div>
  );
}
