import React from 'react';
import { Header } from 'semantic-ui-react'
import StepCount from './StepCount'
import QuickActions from './QuickActions'
import LifeScore from './LifeScore'
import RecentActivies from './RecentActivities';

const Dashboard = ({user}) => {
  return (
    <div>
        <Header>Dashboard</Header>
        <StepCount/>
        <QuickActions/>
        <LifeScore score={user.lifeScore}/>
        <RecentActivies/>
    </div>
  );
};
  
export default Dashboard;