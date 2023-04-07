import React from 'react'
import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import PageItem from '../../PageItem'

// Achievements heading page
const SettingPageContent = ({ userData }) => {
    return (
        <>
            <Header textAlign='left'>No settings to configure.</Header>
        </>
    )
}

const SettingPage = ({ userData }) => {
    return (
        <>
            <PageItem title={'General'} content={<SettingPageContent userData={userData}/>}/>
        </>
    )
}

SettingPageContent.propTypes = {
    userData: PropTypes.object
}

SettingPage.propTypes = {
    userData: PropTypes.object
}

export default SettingPage
