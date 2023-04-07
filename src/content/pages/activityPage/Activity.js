import React from 'react'
import { Header } from 'semantic-ui-react'

const Activity = ({ userData }) => {
    return (
        <div>
            <Header size='large'>Activity</Header>
            {JSON.stringify(userData.activityData.activity)}
        </div>
    )
}

export default Activity
