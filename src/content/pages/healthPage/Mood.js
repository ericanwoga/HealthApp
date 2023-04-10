import React, { useState } from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import './Health.css'

const MoodContent = ({ mood }) => {
    const [currentMood, setMood] = useState('')

    const changeUnit = (e) => {
        const val = e.target.value
        if (currentMood === val) {
            setMood(val)
        }
        setMood(val)
    }

    return (
        <Grid>
            <Grid.Column textAlign='left'>
                <Grid.Row>
                    <Header>How are you feeling today?</Header>
                </Grid.Row>
                <br />
                <Button.Group textAlign='center' width={8}>
                    <Button onClick={changeUnit} value="happy">Happy</Button>
                    <Button onClick={changeUnit} value="okay">Okay</Button>
                    <Button onClick={changeUnit} value="sad">Sad</Button>
                    <Button onClick={changeUnit} value="anxious">Anxious</Button>
                    <Button onClick={changeUnit} value="angry">Angry</Button>
                </Button.Group>
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
