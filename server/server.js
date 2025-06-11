// Imports
import express from 'express';

// Setup
const app = express();
const PORT = 3000;

// Handlers

app.use('/', express.static('./dist'));

// Start Server
app.listen(PORT, () => {
  console.log(`🟢 Server listening on port ${PORT}`);
});
