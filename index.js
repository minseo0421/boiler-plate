const express = require('express') // express 모듈 가져오기
const app = express() // express 앱 만들기
const port = 5000
const { User } = require("./models/User")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/key');
const { mongoURI } = require('./config/dev')

//application/x-www-form-urlencoded 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입을 분석해서 가져옴
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hesssllo Worlddddd!')); // /에 hello world 출력

app.post('/register', (req, res) => {
    //회원가입 시 필요한 정보를 client에서 가져오면 db에 넣어줌

    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //5000번에서 실행

