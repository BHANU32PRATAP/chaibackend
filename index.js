const express = require("express")
require('dotenv').config()


const app = express();

const PORT = 4000

app.get('/', (req, res) => {
    res.send("hello this is my first backend application!")
})

app.get('/twitter', (req, res) => {
    res.send("Hello this is sharad Pratap singh and i am working in the this ")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login as  chai or code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>chai or code</h2>')
})


app.listen((process.env.PORT), () => {
    console.log(`Example app lesting of PORT : http://localhost:${PORT}`)
})