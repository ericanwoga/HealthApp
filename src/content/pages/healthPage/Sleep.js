import React, { useState } from 'react'
import { Statistic, Grid, Progress, Button, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import DateSelect from '../../DateSelect'
import DatedItems from '../../DatedItems'
import ViewAllCard from '../../ViewAllCard'
import moment from 'moment'
import './Health.css'

const ModalContent = ({ setKeyboardVisible, sleepAmount, sleepGoal, setSleepAmount, setSleepGoal }) => {
    const [sleepAmountError, setSleepAmountError] = useState(false)
    const [sleepGoalError, setSleepGoalError] = useState(false)

    const changeSleepGoal = (val) => {
        // lets user change their sleep goal
        if (val > 24 || val < 0 || isNaN(val)) {
            setSleepGoalError(true)
        } else {
            setSleepGoalError(false)
            setSleepGoal(val)
        }
    }

    const changeSleepAmount = (val) => {
        // lets user change their sleep amount
        if (val > 24 || val < 0 || isNaN(val)) {
            setSleepAmountError(true)
        } else {
            setSleepAmountError(false)
            setSleepAmount(val)
        }
    }

    return (
        <>
            <Header size='large'>How many hours of sleep would you like to add for today?</Header>
            <Input size='huge' fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                value={sleepAmount}
                onChange={(e, result) => changeSleepAmount(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={sleepAmountError}
                placeholder='Enter hours slept'/>
            {sleepAmountError ? <Label basic color='red' pointing prompt >Must be a number between 0 and 24 </Label> : null}
            <Header size='large'>What is your sleep goal for today?</Header>
            <Input size='huge' fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                value={sleepGoal}
                onChange={(e, result) => changeSleepGoal(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={sleepGoalError}
                placeholder='Enter sleep goal'/>
            {sleepGoalError ? <Label basic color='red' pointing prompt >Must be a number between 0 and 24 </Label> : null}
        </>
    )
}

const SleepContent = ({ setKeyboardVisible, userData, setUserData }) => {
    const today = moment().format('MM-DD-YYYY')

    const [sleepAmount, setSleepAmount] = useState(userData.healthData.sleep.amount[today] || 0)
    const [sleepGoal, setSleepGoal] = useState(userData.healthData.sleep.goal)
    const [showSleepPopup, setShowSleepPopup] = useState(false)

    const updatedUserData = userData

    function submit () {
        if (sleepAmount !== '' && sleepGoal !== '') {
            updatedUserData.healthData.sleep.goal = sleepGoal
            updatedUserData.healthData.sleep.amount[today] = sleepAmount
            setUserData(updatedUserData)
            cancel()
        }
    }

    function cancel () {
        setShowSleepPopup(false)
        setKeyboardVisible('off')
    }

    return (
        <>
            <Grid>
                <Grid.Column verticalAlign='middle' textalign='center' width={8} style={{ marginTop: '0px', paddingBottom: '0px' }}>
                    <Progress percent={((sleepAmount / sleepGoal) * 100).toFixed(1)} progress size='large' style={{ fontSize: '125%' }} />
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={8} style={{ marginTop: '0px', paddingBottom: '30px' }}>
                    <Statistic label size='small'>
                        <Statistic.Value>{sleepAmount}/{sleepGoal}</Statistic.Value>
                        <Statistic.Label>hours</Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid>
            <Button fluid size='huge' onClick={() => setShowSleepPopup(true)}>
                Track Sleep
            </Button>
            <PageModal
                title={'Sleep Tracker'}
                open={showSleepPopup}
                setOpen={() => setShowSleepPopup(true)}
                setClosed={() => cancel()}
                submitAction={() => submit()}
                cancelAction={() => cancel()}
                content={<ModalContent setKeyboardVisible={setKeyboardVisible} setSleepAmount={setSleepAmount} sleepAmount={sleepAmount} sleepGoal={sleepGoal} setSleepGoal={setSleepGoal}/>}
                submitText={'Save'}
                cancelText={'Cancel'}
            />
        </>
    )
}

const Sleep = ({ setKeyboardVisible, userData, setUserData }) => {
    const [date, setDate] = useState(new Date())
    const [openModal, setOpenModal] = useState(false)

    const items = {
        'Wed May 05 2023 14:10:36 GMT-0400 (Eastern Daylight Time)': { name: '7.5 hours' },
        'Wed May 06 2023 17:20:25 GMT-0400 (Eastern Daylight Time)': { name: '7.5 hours' },
        'Wed May 07 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: '12 hours' },
        'Wed May 09 2023 12:48:36 GMT-0400 (Eastern Daylight Time)': { name: '7.5 hours' },
        'Wed May 10 2023 15:20:25 GMT-0400 (Eastern Daylight Time)': { name: '8 hours' }
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
            <PageItem title="Sleep" moreLabel={'View All'} moreAction={() => setOpenModal(true)} content={<SleepContent setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData} />}/>
            <PageModal
                title={'Sleep History'}
                open={openModal}
                setOpen={() => setOpenModal(true)}
                setClosed={() => setOpenModal(false)}
                cancelText={'Done'}
                cancelAction={() => setOpenModal(false)}
                content={<>
                    <DateSelect date={date} setDate={setDate}/>
                    <DatedItems date={date} itemList={itemList}/>
                </>}/>
        </>
    )
}

export default Sleep
