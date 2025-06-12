import { useEffect, useState } from "react";

export default function NewDeck(props) {
  const [newDeck, setnewDeck] = useState({ name: "", deckContents: [] });
  const [deckName, setDeckName] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleDeckName = (event) => {
    setDeckName(event.target.value);
  };

  const handleQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const saveCardHandler = () => {
    const tempDeck = [...newDeck.deckContents, { question, answer }];
    setnewDeck({ ...newDeck, deckContents: tempDeck });

    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
  };
  const saveDeckHandler = () => {
    const tempDeck = [...newDeck.deckContents, { question, answer }];
    const tempNewDeck = { ...newDeck, name: deckName, deckContents: tempDeck };
    setnewDeck(tempNewDeck);
    (async () => {
      console.log(tempNewDeck);
      await fetch(`/newDeck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newDeck: tempNewDeck }),
      });
    })();

    document.getElementById("deckName").value = "";
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
  };

  return (
    <div className="popup" style={props.style}>
      <label>Deck Name</label>
      <input type="text" id="deckName" onChange={handleDeckName}></input>
      <br />
      <br />
      <label>Question</label>
      <textarea type="text" id="question" onChange={handleQuestion}></textarea>
      <label>Answer</label>
      <textarea type="text" id="answer" onChange={handleAnswer}></textarea>
      <br />
      <br />
      <button onClick={saveCardHandler}>Save Card</button>
      <button onClick={saveDeckHandler}>Save Deck</button>
    </div>
  );
}
