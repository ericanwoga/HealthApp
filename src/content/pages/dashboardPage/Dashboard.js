import React from 'react'
import { Header } from 'semantic-ui-react'
import StepCount from './StepCount'
import QuickActions from './QuickActions'
import LifeScore from './LifeScore'
import RecentActivies from './RecentActivities'

const Dashboard = ({ userData, setUserData }) => {
    return (
        <div>
            <Header size='large' >Dashboard</Header>
            <StepCount steps={userData.activityData.steps ? userData.activityData.steps : {}}/>
            <QuickActions userData={userData} setUserData={setUserData}/>
            <LifeScore score={userData.lifeScore}/>
            <RecentActivies/>
        </div>
    )
}

export default Dashboard
