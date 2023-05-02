const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const chefs = require('./datas/data.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello wordl')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})