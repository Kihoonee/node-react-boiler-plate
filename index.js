const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect('mongodb://kihoonee:sigbn132@laon-shard-00-00.gwb1v.mongodb.net:27017,laon-shard-00-01.gwb1v.mongodb.net:27017,laon-shard-00-02.gwb1v.mongodb.net:27017/laon?ssl=true&replicaSet=atlas-11impp-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))







app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})