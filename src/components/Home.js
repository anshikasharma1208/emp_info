import React from 'react';
import './Home.css';
import Layout from './Layout';
import EmployeeStatistics from './EmployeeStatistics';
import NewsTicker from './NewsTicker';

function Home() {

    const newsItems = [
        { title: "New Policy Announced", link: "https://example.com/news1" },
        { title: "Company Reaches New Milestone", link: "https://example.com/news2" },
        { title: "Employee of the Month Announced", link: "https://example.com/news3" },
    ];

    const upcomingEvents = [
        "Annual Meeting - Oct 20, 2024",
        "Team Building Workshop - Nov 5, 2024",
        "Holiday Party - Dec 15, 2024",
        "Training Session - Jan 10, 2025"
    ];

    return (
        <Layout>
            <div className="main-content">
                <h2>Welcome to the Admin Dashboard</h2>
                <div className="dashboard-sections">
                    <NewsTicker news={newsItems} />
                </div>
                <div className="charts-and-events">
                    <EmployeeStatistics />
                    <div className="stats-info">
                        <p><strong>Total SSPL Strength:</strong> 1000</p>
                        <p><strong>Male Employees:</strong> 700</p>
                        <p><strong>Female Employees:</strong> 300</p>
                    </div>
                    <div className="upcoming-events">
                        <h3>Upcoming Events</h3>
                        <div className="events-list">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="event-item">
                                    {event}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
