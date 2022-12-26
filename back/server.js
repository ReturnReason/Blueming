require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

const mongoose = require('mongoose');
const { User } = require('./models/User');

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

app.post('/signup', (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, message: '회원가입 완료!' });
  });
});
