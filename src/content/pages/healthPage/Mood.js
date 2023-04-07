import React from 'react'
import { Grid, Progress, Statistic } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import PageItem from '../../PageItem'

const MoodContent = ({ mood }) => {
    return (
        <Grid>
            <Grid.Column verticalAlign='middle' width={8}>
                <Progress percent={mood} progress/>
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

MoodContent.propTypes = {
    mood: PropTypes.number
}

Mood.propTypes = {
    mood: PropTypes.number
}

export default Mood
