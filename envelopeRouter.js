const express = require('express');
const router = express.Router();
const service = require('./envelopeService');

router.get('/', (req, res) => {
    const allEnvelopes = service.getAllenvelopes();
    res.send({status: 'OK', data: allEnvelopes});
});

router.get('/:envelopeId', (req, res) => {
    const envelopeId = req.params.envelopeId
    const oneEnvelope = service.getOneEnvelope(envelopeId);
    res.send({status: 'OK', data: oneEnvelope})
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

