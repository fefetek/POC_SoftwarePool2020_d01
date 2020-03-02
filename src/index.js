const express = require('express');
const bodyparser = require('body-parser');

function startServer() {
  const app = express();
  const port = 8080;

  app.use(bodyparser.urlencoded({ extended: true }));
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.send('For better and for the worst');
    res.status(200).end();
  });
  app.get('/repeat-my-query', (req, res) => {
    const { message } = req.query;
    if (!message) res.status(400).send('Bad Request');
    else res.send(message);
  });
  app.post('/repeat-my-body', (req, res) => {
    const { body } = req.body;
    if (!body) res.status(400).send('Bad Request');
    else res.send(body);
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

startServer();
