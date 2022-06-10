const express = require('express');
const router = express.Router();
const service = require('./envelopeService');

router.get('/', (req, res) => {
    try {
        const allEnvelopes = service.getAllenvelopes();
        res.send({status: 'OK', data: allEnvelopes});
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", message: error?.message || error });
    }
});

router.get('/:envelopeId', (req, res) => {
    const envelopeId = req.params.envelopeId
    try {
        const oneEnvelope = service.getOneEnvelope(envelopeId);
        res.send({status: 'OK', data: oneEnvelope});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error : error?.message || error }});
    }
});

router.post('/', (req, res) => {
    //Object destructuring
    const { body } = req;
    
    const newEnvelope = {
        id: body.id,
        name: body.name,
        amount: body.amount,
    };

    const createdEnvelope = service.createNewEnvelope(newEnvelope);
    res.send({status: 'OK', data: createdEnvelope});
});

router.put('/:envelopeId', (req, res) => {
    const envelopeId = req.params.envelopeId;
    const { body } = req;
    const updatedEnvelope = service.updateOneEnvelope(envelopeId, body)
    res.send({status: 'OK', data: updatedEnvelope });
});

router.delete('/:envelopeId', (req, res) => {
    const envelopeId = req.params.envelopeId;
    service.deleteOneEnvelope(envelopeId);
    res.send({status: 'OK'});
});

module.exports = router;

