import React, { useState } from 'react';
import './DRTC.css';
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

const DRTC = () => {
  const categories = ['TO-D', 'TO-C', 'TO-B', 'TO-A', 'TO', 'STA-B', 'TA-B', 'TECH-C', 'TECH-B', 'TECH-A']; // Example categories
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Update officersData to include categories used in the component
  const officersData = {
    'TO-D': [{ id: 1, name: 'Officer TO-D1' }, { id: 2, name: 'Officer TO-D2' }],
    'TO-C': [{ id: 3, name: 'Officer TO-C1' }, { id: 4, name: 'Officer TO-C2' }],
    'TO-B': [{ id: 5, name: 'Officer TO-B1' }, { id: 6, name: 'Officer TO-B2' }],
    'TO-A': [{ id: 7, name: 'Officer TO-A1' }, { id: 8, name: 'Officer TO-A2' }],
    'TO': [{ id: 9, name: 'Officer TO1' }, { id: 10, name: 'Officer TO2' }],
    // Add other categories as needed
  };

  // Ensure that the data is available for the selected category
  const currentCategoryData = officersData[selectedCategory] || [];

  const data = {
    labels: ['TO-D', 'TO-C', 'TO-B', 'TO-A', 'TO', 'STA-B', 'TA-B', 'TECH-C', 'TECH-B', 'TECH-A'], // Your categories
    datasets: [
      {
        label: 'Number of Personnel',
        data: [10, 20, 30,40,20,60,35,90,35,55], // Example data
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
        ticks: {
          autoSkip: false, // Avoid skipping labels
          maxRotation: 90, // Rotate labels if they are too long
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
      <div className="drtc-container">
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
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {currentCategoryData.map((officer) => (
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

export default DRTC;
