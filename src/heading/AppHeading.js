import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'

// Renders the app heading with the 4 buttons and app title.
const AppHeading = ({ page, setPage }) => {
    function setHeadingPage (page) {
        setPage(page)
    }

    return (
        <Grid centered verticalAlign='middle'>
            <Grid.Column width={3} textAlign='center' style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Icon link circular size='small' inverted={page === 'Settings'} name='setting' onClick={() => setHeadingPage('Settings')}/>
                <Icon link circular size='small' inverted={page === 'Help'} name='help' onClick={() => setHeadingPage('Help')}/>
            </Grid.Column>
            <Grid.Column width={9} textAlign='center' style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Header size='large' textAlign='center'>Health App</Header>
            </Grid.Column>
            <Grid.Column width={3} textAlign='center' style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Icon link circular size='small' inverted={page === 'Achievements'} name='trophy' onClick={() => setHeadingPage('Achievements')}/>
                <Icon link circular size='small' inverted={page === 'Profile'} name='user' onClick={() => setHeadingPage('Profile')}/>
            </Grid.Column>
        </Grid>
    )
}

export default AppHeading
