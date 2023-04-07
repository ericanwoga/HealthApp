import React, { useState, useEffect } from 'react'
import SettingPage from './pages/settingPage/SettingPage'
import HelpPage from './pages/helpPage/HelpPage'
import TrophyPage from './pages/trophyPage/TrophyPage'
import UserPage from './pages/userPage/UserPage'
import { Header, Icon, Grid, Segment, Button } from 'semantic-ui-react'

// Renders the specific Header page if one is selected from the App Heading
const HeadingPage = ({ setLoggedIn, userData, page, setIsVisible }) => {
    const [content, setContent] = useState(page)

    useEffect(() => {
        setContent(
            (page === 'Achievements' && <TrophyPage userData={userData}/>) ||
            (page === 'Help' && <HelpPage userData={userData}/>) ||
            (page === 'Settings' && <SettingPage userData={userData}/>) ||
            (page === 'Profile' && <UserPage setIsVisible={setIsVisible} setLoggedIn={setLoggedIn} userData={userData}/>)
        )
    }, [page, setIsVisible, setLoggedIn, userData])

    return (
        <Segment textAlign='center' style={{ fontSize: 'x-large', height: '100%', overflow: 'auto' }}>
            <Grid>
                <Grid.Column width={4}>
                    <Button basic floated='left' size='small' onClick={() => setIsVisible(false)}>
                        <Icon name='left arrow' />
                    Back
                    </Button>
                </Grid.Column>
                <Grid.Column width={8} style={{ paddingLeft: '0%', paddingRight: '0%' }}>
                    <Header size='large'>{page}</Header>
                </Grid.Column>
                <Grid.Column width={4}/>
            </Grid>
            {content}
        </Segment>
    )
}

export default HeadingPage
