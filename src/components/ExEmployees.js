import React, { useState } from 'react';
import './ExEmployees.css';
import Layout from './Layout';

const ExEmployees = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const exEmployeesData = [
        { id: 1, name: 'John Doe', department: 'HR', mobile: '123-456-7890', age: 65, retired: true },
        { id: 2, name: 'Jane Smith', department: 'Finance', mobile: '234-567-8901', age: 60, retired: true },
        { id: 3, name: 'Emily Johnson', department: 'Engineering', mobile: '345-678-9012', age: 55, retired: false },
        // Add more ex-employees as needed
    ];

    const filteredEmployees = exEmployeesData.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="ex-employees-container">
                <h3>Ex-Employees List</h3>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <table className="ex-employees-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Mobile No.</th>
                            <th>Age</th>
                            <th>Retired</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.age}</td>
                                <td>{employee.retired ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default ExEmployees;
