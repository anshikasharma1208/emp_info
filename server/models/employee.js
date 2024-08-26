const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Department: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
