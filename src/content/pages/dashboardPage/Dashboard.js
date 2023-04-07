import React from 'react'
import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import StepCount from './StepCount'
import QuickActions from './QuickActions'
import LifeScore from './LifeScore'
import RecentActivies from './RecentActivities'

const Dashboard = ({ user }) => {
    return (
        <div>
            <Header size='large' >Dashboard</Header>
            <StepCount steps={user.activityData.steps ? user.activityData.steps : {}}/>
            <QuickActions/>
            <LifeScore score={user.lifeScore}/>
            <RecentActivies/>
        </div>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object
}

export default Dashboard
