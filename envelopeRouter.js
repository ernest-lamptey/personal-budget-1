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
    const { body } = req;
    if (
        !body.id ||
        !body.name ||
        !body.amount
    ) {
        res.status(400).send({ status: "FAILED", data: { error: "One of the following keys is missing in request body: 'id', 'name', 'amount' "}})
    }
    const newEnvelope = {
        id: body.id,
        name: body.name,
        amount: body.amount,
    };
    try {
        const createdEnvelope = service.createNewEnvelope(newEnvelope);
        res.status(201).send({status: 'OK', data: createdEnvelope});
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data: {error: error?.message || error}})
    }
});

router.put('/:envelopeId', (req, res) => {
    const envelopeId = req.params.envelopeId;
    const { body } = req;
    if (
        !envelopeId ||
        !body.amount
    ) {
        res.status(400).send({ status: "FAILED", data: {error: "One of the following keys is missing in the request body: 'name', 'amount' or missing parameter"}})
    }
    try {
        const updatedEnvelope = service.updateOneEnvelope(envelopeId, body)
        res.send({status: 'OK', data: updatedEnvelope });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: {error: error?.message || error}
        });
    }
});

router.delete('/:envelopeId', (req, res) => {
    try {
        const envelopeId = req.params.envelopeId;
        if (!envelopeId) {
            res.status(404).send({ status: "FAILED", data: {error: "Paramerter ':envelopeId' must be present"}})
        }
        service.deleteOneEnvelope(envelopeId);
        res.send({status: 'OK'});
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            message: error?.message || error
        });
    }
});

module.exports = router;

