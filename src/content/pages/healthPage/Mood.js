import React, { useState } from 'react'
import { Button, Header, Divider } from 'semantic-ui-react'
import moment from 'moment'
import PageItem from '../../PageItem'
import './Health.css'
import PageModal from '../../PageModal'
import DateSelect from '../../DateSelect'
import DatedItems from '../../DatedItems'
import ViewAllCard from '../../ViewAllCard'

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
            <Button style={{ backgroundColor: '#BAE8E8' }} size='huge' fluid onClick={changeMood}>
                Save
            </Button>
        </>

    )
}

const Mood = ({ userData, setUserData }) => {
    const [date, setDate] = useState(new Date())
    const [openModal, setOpenModal] = useState(false)

    const items = {
        'Wed May 05 2023 14:10:36 GMT-0400 (Eastern Daylight Time)': { name: 'angry' },
        'Wed May 06 2023 17:20:25 GMT-0400 (Eastern Daylight Time)': { name: 'anxious' },
        'Wed May 07 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: 'okay' },
        'Wed May 09 2023 12:48:36 GMT-0400 (Eastern Daylight Time)': { name: 'okay' },
        'Wed May 10 2023 15:20:25 GMT-0400 (Eastern Daylight Time)': { name: 'angry' },
        'Wed May 10 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: 'anxious' },
        'Wed May 10 2023 7:52:14 GMT-0400 (Eastern Daylight Time)': { name: 'happy' }
    }
    const itemList = []
    Object.keys(items).map((key) => (
        itemList.push(
            <ViewAllCard key={key} date={key} name={items[key].name}/>
        )
    ))
    itemList.sort().reverse()

    return (
        <>
            <PageItem title="Mood" moreLabel={'View All'} moreAction={() => setOpenModal(true)} content={<MoodContent userData={userData} setUserData={setUserData}/>}/>
            <PageModal
                title={'Mood History'}
                open={openModal}
                setOpen={() => setOpenModal(true)}
                setClosed={() => setOpenModal(false)}
                submitText={'Done'}
                submitAction={() => setOpenModal(false)}
                content={<>
                    <DateSelect date={date} setDate={setDate}/>
                    <DatedItems date={date} itemList={itemList}/>
                </>}/>
        </>
    )
}

export default Mood
