var mongoose = require('mongoose');

// console.log("Here in schema model");

var rept = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

var feed = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  feedback:{
    type: String,
    required: true
  }
});

mongoose.model('feedback', feed);
mongoose.model('report', rept);

var Schema = mongoose.Schema;
// console.log(feed);
mongoose.model('product', new Schema({}), "products");
