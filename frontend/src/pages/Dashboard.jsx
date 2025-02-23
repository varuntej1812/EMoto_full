import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import StatsCards from '../components/StatsCards';
import ActivitiesChart from '../components/ActivitiesChart';
import TopProducts from '../components/TopProducts';
import AddProfile from '../components/AddProfile';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 ml-0 md:ml-64 w-full">
        <DashboardHeader />
        <StatsCards />
        <div className="mt-6">
          <ActivitiesChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <TopProducts />
          <AddProfile />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;