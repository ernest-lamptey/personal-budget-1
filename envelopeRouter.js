const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET ALL: working fine');
});

router.get('/:envelopeId', (req, res) => {
    res.send('GET ONE: working fine');
});

router.post('/', (req, res) => {
    res.send('CREATE ONE: working fine');
});

router.put('/:envelopeId', (req, res) => {
    res.send('UPDATE ONE: working fine');
});

router.delete('/:envelopeId', (req, res) => {
    res.send('DELETE ONE: working fine');
});

module.exports = router;

