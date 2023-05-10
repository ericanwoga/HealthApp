import React, { useState } from 'react'
import { Button, Header, Divider } from 'semantic-ui-react'
import moment from 'moment'
import PageItem from '../../PageItem'
import './Health.css'

const MoodContent = ({ userData, setUserData }) => {
    const [mood, setMood] = useState(['happy'])
    const [feeling, setFeeling] = useState('')

    const changeMood = () => {
        if (feeling !== '') {
            const tempMood = mood
            tempMood.push(feeling)
            setMood(tempMood)
            setFeeling('')
        }
    }

    return (
        <>
            <Header textAlign='left'>
                {'At ' + moment().format('LT') + ' you were feeling ' + mood[mood.length - 1]}
            </Header>
            <Header textAlign='left'>How are you feeling now?</Header>
            <Button.Group fluid textalign='center' size="huge">
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={() => setFeeling('happy')} active={feeling === 'happy'} value="happy">Happy</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={() => setFeeling('okay')} active={feeling === 'okay'} value="okay">Okay</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={() => setFeeling('sad')} active={feeling === 'sad'} value="sad">Sad</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={() => setFeeling('anxious')} active={feeling === 'anxious'} value="anxious">Anxious</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={() => setFeeling('angry')} active={feeling === 'angry'} value="angry">Angry</Button>
            </Button.Group>
            <Divider/>
            <Button size='huge' fluid onClick={changeMood}>
                Save
            </Button>
        </>

    )
}

const Mood = ({ userData, setUserData }) => {
    const openMoodModal = () => {
        console.log('test')
    }

    return (
        <PageItem title="Mood" moreLabel={'View All'} moreAction={openMoodModal} content={<MoodContent userData={userData} setUserData={setUserData}/>}/>
    )
}

export default Mood
