const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// POST request to add an employee
router.post('/', async (req, res) => {
  const { name,Department, age, mobile, email } = req.body;
  try {
    const newEmployee = new Employee({ name,Department, age, mobile, email });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET request to fetch all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE request to delete an employee by ID
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Employee deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
