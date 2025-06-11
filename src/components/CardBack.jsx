export default function CardBack(props) {
  return (
    <div className="card">
      <h1>{props.content.title}</h1>
      {/* <img src='https://picsum.photos/id/20/400/300' alt='test image' /> */}
      <h3>{props.content.answer}</h3>
    </div>
  );
}
