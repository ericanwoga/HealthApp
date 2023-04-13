import React, { useState } from 'react'
import { Statistic, Grid, Progress, Icon, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
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
            <Header>How many hours did you sleep today?</Header>
            <Input fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                value={sleepAmount}
                onChange={(e, result) => changeSleepAmount(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={sleepAmountError}
                placeholder='Enter hours slept'/>
            {sleepAmountError ? <Label basic color='red' pointing prompt >Must be a number between 0 and 24 </Label> : null}
            <Header>What is your sleep goal for today?</Header>
            <Input fluid label={{ basic: true, content: 'hours' }}
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
        <Grid>
            <Grid.Column verticalAlign='middle' textalign='center' width={8}>
                <Progress percent={((sleepAmount / sleepGoal) * 100).toFixed(1)} progress size='large' />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={6}>
                <Statistic label size='large'>
                    <Statistic.Value>{sleepAmount}/{sleepGoal}</Statistic.Value>
                    <Statistic.Label>hours</Statistic.Label>
                </Statistic>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={1}>
                <Icon onClick={() => setShowSleepPopup(true)} link circular name='plus' className='box-plus-sign' />
                <PageModal
                    title={'Sleep Tracker'}
                    open={showSleepPopup}
                    setOpen={() => setShowSleepPopup(true)}
                    setClosed={() => cancel()}
                    submitAction={() => submit()}
                    cancelAction={() => cancel()}
                    content={<ModalContent setKeyboardVisible={setKeyboardVisible} setSleepAmount={setSleepAmount} sleepAmount={sleepAmount} sleepGoal={sleepGoal} setSleepGoal={setSleepGoal}/>}
                    submitText={'Submit'}
                    cancelText={'Cancel'}
                />
            </Grid.Column>
        </Grid>
    )
}

const Sleep = ({ setKeyboardVisible, userData, setUserData }) => {
    return (
        <PageItem title="Sleep" content={<SleepContent setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData} />}/>
    )
}

export default Sleep
