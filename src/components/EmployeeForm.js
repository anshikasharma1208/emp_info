import React, { useState } from 'react';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: '',
        department: '',
        mobile: '',
        age: '',
        retired: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEmployee({
            ...employee,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            });

            const data = await response.json();
            console.log('Employee added:', data);
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Department:</label>
                <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mobile:</label>
                <input
                    type="text"
                    name="mobile"
                    value={employee.mobile}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={employee.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Retired:</label>
                <input
                    type="checkbox"
                    name="retired"
                    checked={employee.retired}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
