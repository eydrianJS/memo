const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdWords: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Word'
        }
    ],
    scores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Score'
        }
    ]
})

module.exports = mongoose.model('User', userSchema);

