import React from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'

// Defines the top and bottom bars for the iphone layout.
const IPhoneBar = ({ position }) => {
    if (position === 'top') {
        return (
            <Grid centered>
                <Grid.Column width={4} textAlign='center' verticalAlign='middle'>
                    <Header size='tiny'>{new Date().getHours() % 12 + ':' + String(new Date().getMinutes()).padStart(2, '0')}</Header>
                </Grid.Column>
                <Grid.Column width={5}>
                    <div style={{ backgroundColor: 'black', borderRadius: '30em', width: '100%', height: '100%' }}/>
                </Grid.Column>
                <Grid.Column width={4} textAlign='left' verticalAlign='middle'>
                    <Icon size='small' name='signal'/>
                    <Icon size='small' name='wifi' style={{ paddingLeft: '5%' }}/>
                    <Icon size='small' name='battery half' style={{ paddingLeft: '10%' }}/>
                </Grid.Column>
            </Grid>
        )
    } else if (position === 'bottom') {
        return (
            <Grid centered style={{ height: '70%' }}>
                <div style={{ backgroundColor: 'grey', borderRadius: '20em', width: '35%' }}/>
            </Grid>
        )
    }
}

export default IPhoneBar
