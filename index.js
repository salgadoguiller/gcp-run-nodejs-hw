const express = require('express');
const app = express();
app.use(express.json());

app.get('/hw', (req, res) => {
  const name = process.env.NAME || 'World';
  res.status(200).send(`Hello ${name}!`);
});

app.post('/hw', (req, res) => {
  const data = req.body;
  console.log(JSON.stringify(data));

  const name = data.name;

  if (!name) {
    res.status(400).send('Bad request');
    return;
  }

  res.status(200).send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});