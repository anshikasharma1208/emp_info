import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import './EmployeeStatistics.css';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const EmployeeStatistics = () => {
    const pieData = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                data: [70, 30], 
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    const barData = {
        labels: ['DRDS', 'DRTC', 'Admin and Allied officers', 'Admin and Allied staff', 'Others'],
        datasets: [
            {
                label: 'Number of Officers',
                data: [50, 100, 150, 120, 145], 
                backgroundColor: '#36A2EB',
                borderColor: 'rgb(35, 60, 134)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Categories',
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 45, // Rotate labels 45 degrees
                    minRotation: 45, // Minimum rotation of 45 degrees
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Number of Officers',
                },
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <div className="employee-statistics">
            <h3>Employee Strength and Cadre Statistics</h3>
            <div className="charts-container">
                <div className="chart-wrapper pie-chart">
                    <Pie data={pieData} />
                </div>
                <div className="chart-wrapper bar-chart">
                    <Bar data={barData} options={barOptions} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeStatistics;
