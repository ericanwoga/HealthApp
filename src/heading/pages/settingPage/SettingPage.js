import React from 'react'
import { Header } from 'semantic-ui-react'
import PageItem from '../../PageItem'

// Achievements heading page
const SettingPageContents = ({ userData }) => {
    return (
        <>
            <Header textAlign='left'>No settings to configure.</Header>
        </>
    )
}

const SettingPage = ({ userData }) => {
    return (
        <>
            <PageItem title={'General'} content={<SettingPageContents userData={userData}/>}/>
        </>
    )
}

export default SettingPage
