import React from 'react'
import { Grid, Progress, Statistic } from 'semantic-ui-react'
import PageItem from '../../PageItem'

const MoodContent = ({ mood }) => {
    return (
        <Grid>
            <Grid.Column verticalAlign='middle' width={8}>
                <Progress percent={mood} progress size='big'/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={8}>
                <Statistic>
                    <Statistic.Value>{mood / 10}/10</Statistic.Value>
                </Statistic>
            </Grid.Column>
        </Grid>
    )
}

const Mood = ({ mood }) => {
    return (
        <PageItem title="Mood" content={<MoodContent mood={mood}/>}/>
    )
}

export default Mood
