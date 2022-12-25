require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;

const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('DB 연결 완료');
  })
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`listening on ${port} port..`);
});

app.get('/', (req, res) => {
  res.send('서버 연결 테스트');
});
