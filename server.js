const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log("Hello world")
    res.status(200).send("Hello world")
})

app.post('/envelopes', (req, res) => {
    res.status(201).send("Active post request");
})

app.listen(3000, console.log("Server is listening at port 3000"))