export default function CardBack(props) {
  return (
    <div className='card'>
      <h1>{props.content.title}</h1>
      <h3>{props.content.answer}</h3>
    </div>
  );
}
