const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordSchema = new Schema({
  polishWord: {
    type: String,
    require: true
  },
  englishWord: {
    type: String,
    require: true
  },
  quantityToUse: {
    type: Number,
    require: true
  },
  level: {
    type: String,
    require: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Word", wordSchema);
