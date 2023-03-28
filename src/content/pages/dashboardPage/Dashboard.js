import React from 'react';
import { Header } from 'semantic-ui-react'
import StepCount from './StepCount'
import QuickActions from './QuickActions'
import LifeScore from './LifeScore'
import RecentActivies from './RecentActivities';

const Dashboard = () => {
  return (
    <div>
        <Header>Dashboard</Header>
        <StepCount/>
        <QuickActions/>
        <LifeScore/>
        <RecentActivies/>
    </div>
  );
};
  
export default Dashboard;