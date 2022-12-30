require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.json({ loginSuccess: false, message: '존재하지 않는 이메일입니다.' });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: '비밀번호가 일치하지 않습니다.' });
      }

      //TODO: 비밀번호도 일치하면 토큰 발급하기
    });
  });
});
