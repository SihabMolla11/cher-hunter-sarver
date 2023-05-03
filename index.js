const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const chefs = require('./datas/data.json')
const recipes1 = require("./datas/recipes/1.json")
const recipes2 = require("./datas/recipes/2.json")
const recipes3 = require("./datas/recipes/3.json")
const recipes4 = require("./datas/recipes/4.json")
const recipes5 = require("./datas/recipes/5.json")
const recipes6 = require("./datas/recipes/6.json")

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello wordl')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get(`/recipes/:id`, (req, res) => {
    const id = req.params.id
    if (id == 1) {
        res.send(recipes1)
    }
    else if (id == 2) {
        res.send(recipes2)
    }
    else if (id == 3) {
        res.send(recipes3)
    }
    else if (id == 4) {
        res.send(recipes4)
    }
    else if (id == 5) {
        res.send(recipes5)
    }
    else if (id == 6) {
        res.send(recipes6)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})