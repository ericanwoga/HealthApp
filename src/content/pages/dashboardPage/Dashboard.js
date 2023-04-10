import React from 'react'
import { Header } from 'semantic-ui-react'
import StepCount from './StepCount'
import QuickActions from './QuickActions'
import LifeScore from './LifeScore'

const Dashboard = ({ setKeyboardVisible, userData, setUserData }) => {
    return (
        <div>
            <Header size='large' >Dashboard</Header>
            <StepCount steps={userData.activityData.steps ? userData.activityData.steps : {}}/>
            <QuickActions setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>
            <LifeScore score={userData.lifeScore}/>
        </div>
    )
}

export default Dashboard
