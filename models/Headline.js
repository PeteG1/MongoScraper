var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false,
    required: true
  },
  note: {
    type: Array
  }
});

var Headline = mongoose.model("Headline", HeadlineSchema);
module.exports = Headline;
