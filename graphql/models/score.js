const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new Schema( {
    gameSize: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    championer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Score', scoreSchema);

