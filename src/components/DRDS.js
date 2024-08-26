// src/components/DRTC.js
import React, { useState } from 'react';
import './DRDS.css';
import Layout from './Layout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DRDS = () => {
  const categories = ['Category A', 'Category B', 'Category C']; // Example categories
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const officersData = {
    'Category A': [{ id: 1, name: 'Officer A1' }, { id: 2, name: 'Officer A2' }],
    'Category B': [{ id: 3, name: 'Officer B1' }, { id: 4, name: 'Officer B2' }],
    'Category C': [{ id: 5, name: 'Officer C1' }, { id: 6, name: 'Officer C2' }],
  };

  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'], // Your categories
    datasets: [
      {
        label: 'Number of Personnel',
        data: [10, 20, 30], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Number of Personnel',
        },
      },
    },
  };

  return (
    <Layout>
    <div className="drds-container">
      <div className="menu-strip">
        {categories.map((category) => (
          <button
            key={category}
            className={`menu-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content">
      <div className="officers-list">
            <h3>{selectedCategory} Officers</h3>
            <table>
              <thead>
                <tr> 
                  <th>ID</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {officersData[selectedCategory].map((officer) => (
                  <tr key={officer.id}>
                    <td>{officer.id}</td>
                    <td>{officer.name}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       
        <div className="statistics-graph">
          <h3>Statistics</h3>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default DRDS;
