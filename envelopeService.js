const DB = require('./data.json');
const {saveToDatabase } = require('./utils')

const getAllenvelopes = () => {
    return DB.budget;
};

const getOneEnvelope = (envelopeId) => {
    const index = DB.budget.findIndex((item) => item.id == envelopeId);
    return DB.budget[index];
};

const createNewEnvelope = (newEnvelope) => {
    const alreadyExists = DB.budget.find((item) => item.id == newEnvelope.id);
    if (alreadyExists) {
        return;
    }

    DB.budget.push(newEnvelope);
    saveToDatabase(DB);
    return newEnvelope;
};

const updateOneEnvelope = (envelopeId, changes) => {
    const index = DB.budget.findIndex((item) => item.id === envelopeId);
    DB.budget[index].name = changes.name;
    DB.budget[index].amount = changes.amount;
    saveToDatabase(DB);
    return DB.budget[index];
};

const deleteOneEnvelope = (envelopeId) => {
    const indexForDeletion = DB.budget.findIndex((item) => item.id == envelopeId)
    if (indexForDeletion == -1){
        return;
    }
    DB.budget.splice(indexForDeletion, 1)
    saveToDatabase(DB);
};

module.exports = {
    getAllenvelopes,
    getOneEnvelope,
    createNewEnvelope,
    updateOneEnvelope,
    deleteOneEnvelope,
};