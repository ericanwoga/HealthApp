import React, { useState } from 'react'
import { Statistic, Grid, Progress, Icon, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import './Health.css'

const ModalContent = ({ setKeyboardVisible, sleep, setSleepAmount, sleepGoal, setSleepGoal }) => {
    const [sleepGoalError, setSleepGoalError] = useState(false)
    const [sleepAmountError, setSleepAmountError] = useState(false)

    const changeSleepGoal = (event) => {
        // lets user change their sleep goal
        const val = event.target.value

        if (val > 24 || val < 0 || isNaN(val)) {
            setSleepGoalError(true)
        } else {
            setSleepGoalError(false)
            setSleepGoal(val)
        }
    }

    const changeSleepAmount = (event) => {
        // lets user change their sleep amount
        const val = event.target.value

        if (val > 24 || val < 0 || isNaN(val)) {
            setSleepAmountError(true)
            // setSleepAmount(0)
        } else {
            setSleepAmountError(false)
            setSleepAmount(val)
        }
    }

    return (
        <>
            <Header>What is your sleep goal for today?</Header>
            <Input fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                value={sleepGoal}
                onChange={changeSleepGoal}
                onClick={() => setKeyboardVisible('onModal')}
                error={sleepGoalError}
                placeholder='Enter sleep goal'/>
            {sleepGoalError ? <Label basic color='red' pointing prompt >Must be a number between 0 and 24 </Label> : null}
            <Header>How many hours did you sleep today?</Header>
            <Input fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                value={sleep}
                onChange={changeSleepAmount}
                onClick={() => setKeyboardVisible('onModal')}
                error={sleepAmountError}
                placeholder='Enter hours slept'/>
            {sleepAmountError ? <Label basic color='red' pointing prompt >Must be a number between 0 and 24 </Label> : null}
        </>
    )
}

const SleepContent = ({ setKeyboardVisible, sleep, setSleepAmount, sleepGoal, setSleepGoal }) => {
    const [showSleepPopup, setShowSleepPopup] = useState(false)

    function submit () {
        setShowSleepPopup(false)
        setKeyboardVisible('off')
    }

    function cancel () {
        setShowSleepPopup(false)
        setKeyboardVisible('off')
    }

    return (
        <Grid>
            <Grid.Column verticalAlign='middle' textalign='center' width={8}>
                <Progress percent={((sleep / sleepGoal) * 100).toFixed(1)} progress size='large' />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={6}>
                <Statistic label size='large'>
                    <Statistic.Value>{sleep}/{sleepGoal}</Statistic.Value>
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
                    content={<ModalContent setKeyboardVisible={setKeyboardVisible} sleep={sleep} sleepGoal={sleepGoal} setSleepAmount={setSleepAmount} setSleepGoal={setSleepGoal}/>}
                    submitText={'Submit'}
                    cancelText={'Cancel'}
                />
            </Grid.Column>
        </Grid>
    )
}

const Sleep = ({ setKeyboardVisible, sleep, setSleepAmount, sleepGoal, setSleepGoal }) => {
    return (
        <PageItem title="Sleep" content={<SleepContent setKeyboardVisible={setKeyboardVisible} sleep={sleep} setSleepAmount={setSleepAmount} sleepGoal={sleepGoal} setSleepGoal={setSleepGoal} />}/>
    )
}

export default Sleep
