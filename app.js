const express = require('express');
const path = require('path');
const cors = require('cors')

const patasenteRouter = require('./routes/patasente')

var app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/', patasenteRouter)


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});