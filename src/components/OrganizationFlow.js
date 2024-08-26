
import React from 'react';
import './OrganizationFlow.css'; 
import Layout from './Layout';
import flowchartImage from '../assets/org-chart.webp'; 

const OrganizationFlow = () => {
    return (
        <Layout>
            <div className="organization-flow-container">
                <h3>Organization Flow</h3>
                
                <div className="flowchart-container">
                    <img src={flowchartImage} alt="Organization Flowchart" className="flowchart-image" />
                </div>
            </div>
        </Layout>
    );
};

export default OrganizationFlow;
