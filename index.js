const express = require('express') // express 모듈 가져오기
const app = express() // express 앱 만들기
const port = 5000

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!')) // /에 hello world 출력
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) //5000번에서 실행

