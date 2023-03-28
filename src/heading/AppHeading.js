import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Header, Grid, Icon } from 'semantic-ui-react'

const AppHeading = ({setPage, setIsVisible}) => {

    function setHeadingPage (page) {
        setPage(page)
        setIsVisible(true)
    }

    return (
        <Grid centered verticalAlign='middle'>
            <Grid.Column width={4} textAlign='center'>
                <Icon link circular name='setting' onClick={() => setHeadingPage('Settings')}/>
                <Icon link circular name='help' onClick={() => setHeadingPage('Help')}/>
            </Grid.Column>
            <Grid.Column width={8} textAlign='center'>
                <Header size='huge' textAlign='center'>Health App</Header>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
                <Icon link circular name='trophy' onClick={() => setHeadingPage('Achievements')}/>
                <Icon link circular name='user' onClick={() => setHeadingPage('Profile')}/>
            </Grid.Column>
        </Grid>
    )
}

export default AppHeading;