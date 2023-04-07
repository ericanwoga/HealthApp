import React from 'react'
import { Header } from 'semantic-ui-react'
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

export default SettingPage
