const express = require('express');
const app = express();

app.get('/hw', (req, res) => {
  const name = process.env.NAME || 'World';
  console.log('Hello world');
  res.status(200).send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});