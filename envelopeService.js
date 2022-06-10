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
    try {
        const alreadyExists = DB.budget.find((item) => item.id == newEnvelope.id);
        if (alreadyExists) {
            throw {
                status: 400,
                message: `Envelope with id '${newEnvelope.id}' already exists`
            };
        }
        DB.budget.push(newEnvelope);
        saveToDatabase(DB);
        return newEnvelope;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
};

const updateOneEnvelope = (envelopeId, changes) => {
    try {
        const index = DB.budget.findIndex((item) => item.id === envelopeId);
        if (index === -1){
            throw {
                status: 404,
                message: `Envelope with id '${envelopeId}' doesn't exist`
            }
        }
        DB.budget[index].name = changes.name;
        DB.budget[index].amount = changes.amount;
        saveToDatabase(DB);
        return DB.budget[index];
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
};

const deleteOneEnvelope = (envelopeId) => {
    try {
        const indexForDeletion = DB.budget.findIndex((item) => item.id == envelopeId)
        if (indexForDeletion == -1){
            throw {
                status: 404,
                message: `Envelope with id '${envelopeId}' doesn't exist`
            }
        }
        DB.budget.splice(indexForDeletion, 1)
        saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
};

module.exports = {
    getAllenvelopes,
    getOneEnvelope,
    createNewEnvelope,
    updateOneEnvelope,
    deleteOneEnvelope,
};