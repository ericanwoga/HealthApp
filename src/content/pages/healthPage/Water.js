import React from 'react'
import  CircleBar from './CircleBar'
import { Grid, Statistic, Icon } from 'semantic-ui-react'
import './Health.css'
import PageItem from '../../PageItem'

function WaterContent({water}) {
    return (
        <Grid>
            <Grid.Column width={8}>
                <CircleBar amount={water}/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={8}>
                <Statistic>
                <Statistic.Value>40/100</Statistic.Value>
                </Statistic>
            </Grid.Column>
        </Grid>
    )
}

const Water = ({water}) => {
    return (
        <PageItem title="Water Intake" content={<WaterContent water={water}/>}/>
    )
}

export default Water;