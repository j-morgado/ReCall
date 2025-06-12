// Imports
import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';

// Setup
const app = express();
const PORT = 3000;

const SECRET = process.env.secret;
const uri = `mongodb+srv://jmrmorgado:${SECRET}@cluster0.zzjqfx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

// Handlers

app.use('/', express.static('./dist'));

app.get('/deckList', (rq, res) => {
  (async () => {
    const db = client.db('ReCall');
    const collection = db.collection('javascript');
    await client.connect();

    const Search = await db.listCollections().toArray();

    const response = [];
    Search.forEach((el, index) => {
      response.push({ name: el.name, index: index });
    });

    res.status(200).send(response);
    console.log(response);
  })();
});

app.get('/deck/:id', (req, res) => {
  let id = parseInt(req.params.id);

  const decks = {
    deck1: [
      {
        title: 'Deck 1',
        question: '1st Question of deck 1',
        answer: '1st Answer of deck 1',
      },
      {
        title: 'Deck 1',
        question: '2st Question of deck 1',
        answer: '2st Answer of deck 1',
      },
      {
        title: 'Deck 1',
        question: '3st Question of deck 1',
        answer: '3st Answer of deck 1',
      },
      {
        title: 'Deck 1',
        question: '4st Question of deck 1',
        answer: '4st Answer of deck 1',
      },
      {
        title: 'Deck 1',
        question: '5st Question of deck 1',
        answer: '5st Answer of deck 1',
      },
      {
        title: 'Deck 1',
        question: '6st Question of deck 1',
        answer: '6st Answer of deck 1',
      },
    ],

    deck2: [
      {
        title: 'Deck 2',
        question: '1st Question of deck 2',
        answer: '1st Answer of deck 2',
      },
      {
        title: 'Deck 2',
        question: '2st Question of deck 2',
        answer: '2st Answer of deck 2',
      },
      {
        title: 'Deck 2',
        question: '3st Question of deck 2',
        answer: '3st Answer of deck 2',
      },
      {
        title: 'Deck 2',
        question: '4st Question of deck 2',
        answer: '4st Answer of deck 2',
      },
      {
        title: 'Deck 2',
        question: '5st Question of deck 2',
        answer: '5st Answer of deck 2',
      },
      {
        title: 'Deck 2',
        question: '6st Question of deck 2',
        answer: '6st Answer of deck 2',
      },
    ],

    deck3: [
      {
        title: 'Deck 3',
        question: '1st Question of deck 3',
        answer: '1st Answer of deck 3',
      },
      {
        title: 'Deck 3',
        question: '2st Question of deck 3',
        answer: '2st Answer of deck 3',
      },
      {
        title: 'Deck 3',
        question: '3st Question of deck 3',
        answer: '3st Answer of deck 3',
      },
      {
        title: 'Deck 3',
        question: '4st Question of deck 3',
        answer: '4st Answer of deck 3',
      },
      {
        title: 'Deck 3',
        question: '5st Question of deck 3',
        answer: '5st Answer of deck 3',
      },
      {
        title: 'Deck 3',
        question: '6st Question of deck 3',
        answer: '6st Answer of deck 3',
      },
    ],
  };

  let response;

  (() => {
    if (id === 1) {
      response = decks.deck1;
    }
    if (id === 2) {
      response = decks.deck2;
    }
    if (id === 3) {
      response = decks.deck3;
    }
  })();

  res.status(200).json(response);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🟢 Server listening on port ${PORT}`);
});
