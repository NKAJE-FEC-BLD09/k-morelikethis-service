const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const getMovie = require('../db/queries/getMovie.js');

const app = express();
const port = 8153;

app.listen(port, () => console.log('Listening on port ', port));
app.use(cors());
app.use(bp.json());

app.get('/movies/:ID', (req, res) => {
  getMovie(req);
  res.send('hi');
})

