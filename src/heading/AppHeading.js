import React from 'react'
import { Header, Grid, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

// Renders the app heading with the 4 buttons and app title.
const AppHeading = ({ page, setPage }) => {
    function setHeadingPage (page) {
        setPage(page)
    }

    return (
        <Grid centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
                <Icon link circular inverted={page === 'Settings'} name='setting' onClick={() => setHeadingPage('Settings')}/>
                <Icon link circular inverted={page === 'Help'} name='help' onClick={() => setHeadingPage('Help')}/>
            </Grid.Column>
            <Grid.Column width={8} textAlign='center'>
                <Header size='huge' textAlign='center'>Health App</Header>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
                <Icon link circular inverted={page === 'Achievements'} name='trophy' onClick={() => setHeadingPage('Achievements')}/>
                <Icon link circular inverted={page === 'Profile'} name='user' onClick={() => setHeadingPage('Profile')}/>
            </Grid.Column>
        </Grid>
    )
}

AppHeading.propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func
}

export default AppHeading
