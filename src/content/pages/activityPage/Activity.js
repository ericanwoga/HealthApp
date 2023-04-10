import React from 'react'
import { Header } from 'semantic-ui-react'
import RecentActivity from './RecentActivity'
import CalorieCount from './CalorieCount'

const Activity = ({ userData }) => {
    return (
        <div>
            <Header size='large'>Activity</Header>
            <CalorieCount calories={userData.activityData.calories ? userData.activityData.calories : {}}/>
            <RecentActivity userData={userData}/>
        </div>
    )
}

export default Activity
