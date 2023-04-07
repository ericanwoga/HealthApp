import React from 'react'
import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import PageItem from '../../PageItem'

// Achievements heading page
const TrophyPageContent = ({ userData }) => {
    return (
        <>
            <Header textAlign='left'>Points: {userData.points}</Header>
            <Header textAlign='left'>Lifetime Points: {userData.lifePoints}</Header>
        </>
    )
}

const TrophyPage = ({ userData }) => {
    return (
        <>
            <PageItem title={'Redeem Points'} content={<TrophyPageContent userData={userData}/>}/>
        </>
    )
}

TrophyPageContent.propTypes = {
    userData: PropTypes.object
}

TrophyPage.propTypes = {
    userData: PropTypes.object
}

export default TrophyPage
