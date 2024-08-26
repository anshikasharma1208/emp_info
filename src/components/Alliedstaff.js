import React, { useState } from 'react';
import './ExEmployees.css';
import Layout from './Layout';

const Alliedstaff = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const Alliedstaffdata = [
        { id: 1, name: 'Mahesh Kumar', department: 'HR', mobile: '9856743291', age: 45, email: 'mahesh@gmail.com' },
        { id: 2, name: 'Sunita', department: 'Finance', mobile: '9152638291', age: 50, email: 'sunita@gmail.com' },
        { id: 3, name: 'Mukesh Rawat', department: 'Engineering', mobile: '9856493029', age: 32, email: 'mukesh@gmail.com'},
        
    ];

    const filteredEmployees = Alliedstaffdata.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="ex-employees-container">
                <h3>Allied Admin and officers List</h3>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Alliedstaff;
