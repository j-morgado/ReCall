// Imports
import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";
import express from "express";

// Setup
const app = express();
const PORT = 3000;

const SECRET = process.env.secret;
const uri = `mongodb+srv://jmrmorgado:${SECRET}@cluster0.zzjqfx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

// Handlers

app.use(express.json());

app.use("/", express.static("./dist"));

app.get("/deckList", (rq, res) => {
  (async () => {
    const db = client.db("ReCall");
    const collection = db.collection("javascript");
    await client.connect();

    const Search = await db.listCollections().toArray();

    const response = [];
    Search.forEach((el, index) => {
      response.push({ name: el.name, index: index });
    });

    res.status(200).send(response);
  })();
});

app.get("/deck/:id", (req, res) => {
  let id = req.params.id;

  (async () => {
    const db = client.db("ReCall");
    const collection = db.collection(id);
    await client.connect();

    const Search = await collection.find().toArray();
    res.status(200).json(Search);
  })();

  
});

app.post("/newDeck", (req, res) => {
  (async () => {
    const db = client.db("ReCall");
    const collection = db.collection(req.body.newDeck.name);
    await client.connect();

    const Search = await collection.insertMany(req.body.newDeck.deckContents);
    res.status(202).json("Post request received");
  })();
});

// Start Server
app.listen(PORT, () => {
  console.log(`🟢 Server listening on port ${PORT}`);
});
