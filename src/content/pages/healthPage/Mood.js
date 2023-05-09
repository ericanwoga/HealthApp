import React, { useState } from 'react'
import { Button, Header } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import './Health.css'

const MoodContent = ({ userData, setUserData }) => {
    const [currentMood, setMood] = useState('')

    const changeUnit = (e) => {
        const val = e.target.value
        if (currentMood === val) {
            setMood(val)
        }
        setMood(val)
    }

    return (
        <>
            <Header textAlign='left'>How are you feeling today?</Header>
            <Button.Group fluid textalign='center' size="huge">
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeUnit} active={currentMood === 'happy'} value="happy">Happy</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeUnit} active={currentMood === 'okay'} value="okay">Okay</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeUnit} active={currentMood === 'sad'} value="sad">Sad</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeUnit} active={currentMood === 'anxious'} value="anxious">Anxious</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeUnit} active={currentMood === 'angry'} value="angry">Angry</Button>
            </Button.Group>
        </>

    )
}

const Mood = ({ userData, setUserData }) => {
    return (
        <PageItem title="Mood" content={<MoodContent userData={userData} setUserData={setUserData} />}/>
    )
}

export default Mood
