const DB = require('./data.json');
const {saveToDatabase } = require('./utils')

const getAllenvelopes = () => {
    return DB.budget;
};

const getOneEnvelope = (envelopeId) => {
    const index = DB.budget.findIndex((item) => item.name == envelopeId);
    return DB.budget[index];
};

const createNewEnvelope = (newEnvelope) => {
    const alreadyExists = DB.budget.find((item) => item.name == newEnvelope.name);
    if (alreadyExists) {
        return;
    }

    DB.budget.push(newEnvelope);
    saveToDatabase(DB);
    return newEnvelope;
};

const updateOneEnvelope = (req, res) => {

};

const deleteOneEnvelope = (req, res) => {

};

module.exports = {
    getAllenvelopes,
    getOneEnvelope,
    createNewEnvelope,
    updateOneEnvelope,
    deleteOneEnvelope,
};