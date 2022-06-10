const DB = require('./data.json');
const {saveToDatabase } = require('./utils')

const getAllenvelopes = () => {
    try {
        return DB.budget;
    } catch (error) {
        throw { status: 500, message: error };
    } 
};

const getOneEnvelope = (envelopeId) => {
    try {
        const index = DB.budget.findIndex((item) => item.id == envelopeId);
        if (index === -1){
            throw {
                status: 400,
                message: `Can't find envelope with id '${envelopeId}'`
            };
        }
        return DB.budget[index];
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
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