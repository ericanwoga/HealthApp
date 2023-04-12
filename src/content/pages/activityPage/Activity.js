import React from 'react'
import { Header } from 'semantic-ui-react'
import RecentActivity from './RecentActivity'
import CalorieCount from './CalorieCount'

const Activity = ({ userData, setUserData, setKeyboardVisible }) => {
    return (
        <div>
            <Header size='large'>Activity</Header>
            <CalorieCount calories={userData.activityData.calories ? userData.activityData.calories : {}}/>
            <RecentActivity setUserData={setUserData} setKeyboardVisible={setKeyboardVisible} userData={userData}/>
        </div>
    )
}

export default Activity
