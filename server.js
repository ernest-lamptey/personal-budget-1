const express = require('express');
const app = express()

app.get('/', (req, res) => {
    console.log("Hello world")
    res.status(200).send("Hello world")
})

app.listen(3000, console.log("Server is listening at port 4000"))