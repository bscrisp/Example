// const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gradeSchema = new Schema({
    courseNumber: {
      type: String
    },
    grade: {
      type: Number
    },
    letterGrade: {
      type: String
    },
    studentID: {
      type: Number,
      required: true
    }
  }, {
    collection: 'grades'
});

module.exports = mongoose.model('grade', gradeSchema)

//versionKey: false 

