import React from 'react';
import './Dashboard.css';
import useData from './../../hooks/useData';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, PieChart, Pie } from 'recharts';

const Dashboard = () => {

    // useData hook : chart data state
    const [data] = useData();

    return (
        <div className=" container mx-auto my-5">
            <h3 className="mb-5 fw-bold text-center title">Investment vs Revenue</h3>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <BarChart width={500} height={300} data={data}>
                        <Bar dataKey="investment" stackId="a" fill="#4907b3" />
                        <Bar dataKey="revenue" stackId="a" fill="#fb17d0" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div >
                <div>
                    <PieChart width={500} height={300}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#4907b3" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#fb17d0" label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
            </div >
        </div >
    );
};

export default Dashboard;