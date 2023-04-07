import React from 'react'
import { Grid, Statistic, Progress } from 'semantic-ui-react'
import PageItem from '../../PageItem'

function WaterContent ({ water }) {
    return (
        <Grid>
            <Grid.Column verticalAlign='middle' width={8}>
                <Progress percent={water} progress/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={8}>
                <Statistic>
                    <Statistic.Value>{water}/100</Statistic.Value>
                </Statistic>
            </Grid.Column>
        </Grid>
    )
}

const Water = ({ water }) => {
    return (
        <PageItem title="Water Intake" content={<WaterContent water={water}/>}/>
    )
}

export default Water
