import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeData.css';
import Layout from './Layout';

const EmployeeData = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        Department:'',
        age: '',
        mobile: '',
        email: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:5000/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
            setError('Failed to fetch employees.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const addEmployee = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!newEmployee.name || !newEmployee.Department || !newEmployee.age || !newEmployee.mobile || !newEmployee.email) {
            setError('Please fill out all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/employees', newEmployee);
            setEmployees([...employees, response.data]);
            setNewEmployee({ name: '',Department:'', age: '', mobile: '', email: '' });
            setSuccessMessage('Employee added successfully!');
        } catch (error) {
            console.error('Error adding employee:', error);
            setError('Failed to add employee.');
        }
    };

    const deleteEmployee = async (id) => {
        setError('');
        setSuccessMessage('');

        try {
            await axios.delete(`http://localhost:5000/employees/${id}`);
            setEmployees(employees.filter((employee) => employee._id !== id));
            setSuccessMessage('Employee deleted successfully!');
        } catch (error) {
            console.error('Error deleting employee:', error);
            setError('Failed to delete employee.');
        }
    };

    return (
        <Layout>
        <div className="employee-data-container">
            <h2>Employee Data</h2>

            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <form onSubmit={addEmployee} className="employee-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    required
                />
                  <input
                    type="text"
                    name="Department"
                    placeholder="Department"
                    value={newEmployee.Department}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={newEmployee.age}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile No."
                    value={newEmployee.mobile}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Employee</button>
            </form>

            <div className="employee-list">
                <h3>Employee List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Age</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee._id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.Department}</td>
                                <td>{employee.age}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </Layout>
    );
    
};

export default EmployeeData;
