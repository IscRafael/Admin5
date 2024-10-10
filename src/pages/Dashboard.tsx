import React from 'react';
import { FiBarChart2, FiBox, FiDollarSign, FiUsers } from 'react-icons/fi';
import StatCard from '../components/StatCard';
import Table from '../components/Table';

const Dashboard: React.FC = () => {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Dashboard</h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total clients" value="6389" icon={<FiUsers className="w-5 h-5" />} />
        <StatCard title="Account balance" value="$ 46,760.89" icon={<FiDollarSign className="w-5 h-5" />} />
        <StatCard title="New sales" value="376" icon={<FiBarChart2 className="w-5 h-5" />} />
        <StatCard title="Pending contacts" value="35" icon={<FiBox className="w-5 h-5" />} />
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <Table />
      </div>
    </>
  );
};

export default Dashboard;