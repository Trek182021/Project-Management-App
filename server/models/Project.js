const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId: {
        // ObjectId is an id created automatically by mongoose.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
});


module.exports = mongoose.model('Project', ProjectSchema);