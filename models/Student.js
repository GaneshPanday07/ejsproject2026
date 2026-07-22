const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  rollno: { type: String, require: true },
  studentName: { type: String, require: true },
  fatherName: { type: String, require: true },
  adharCardNo: { type: String, require: true },
  mobileNo: { type: String, require: true },
});

module.exports = mongoose.model('Student', StudentSchema)