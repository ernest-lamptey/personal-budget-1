const express = require('express');
const bodyParser = require('body-parser');
const envelopeRouter = require('./envelopeRouter');

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use('/envelopes', envelopeRouter);

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
});