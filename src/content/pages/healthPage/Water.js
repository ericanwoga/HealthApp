import React, { useState } from 'react'
import { Statistic, Grid, Progress, Icon, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import moment from 'moment'
import './Health.css'

const ModalContent = ({ setKeyboardVisible, unit, water, setWaterAmount, waterGoal, setWaterGoal }) => {
    const [waterAmountError, setWaterAmountError] = useState(false)
    const [waterGoalError, setWaterGoalError] = useState(false)

    const changeWaterGoal = (val) => {
        // lets user change their water goal
        if (val < 0 || isNaN(val)) {
            setWaterGoalError(true)
        } else {
            setWaterGoalError(false)
            setWaterGoal(val)
        }
    }

    const changeWaterAmount = (val) => {
        // lets user change their water amount
        if (val < 0 || isNaN(val)) {
            setWaterAmountError(true)
        } else {
            setWaterAmountError(false)
            setWaterAmount(val)
        }
    }

    return (
        <>
            <Header>How much water did you drink today?</Header>
            <Input fluid label={{ basic: true, content: unit === 'standard' ? ' ounces' : 'liters' }}
                labelPosition='right'
                value={water}
                onChange={(e, result) => changeWaterAmount(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={waterAmountError}
                placeholder='Enter water intake'/>
            {waterAmountError ? <Label basic color='red' pointing prompt >Must be a number greater than or equal to 0</Label> : null}
            <Header>What is your water goal for today?</Header>
            <Input fluid label={{ basic: true, content: unit === 'standard' ? ' ounces' : 'liters' }}
                labelPosition='right'
                value={waterGoal}
                onChange={(e, result) => changeWaterGoal(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={waterGoalError}
                placeholder='Enter water intake goal'/>
            {waterGoalError ? <Label basic color='red' pointing prompt >Must be a number greater than or equal to 0</Label> : null}
        </>
    )
}

const WaterContent = ({ setKeyboardVisible, unit, userData, setUserData }) => {
    const today = moment().format('MM-DD-YYYY')

    const [waterAmount, setWaterAmount] = useState(userData.healthData.water.amount[today] || 0)
    const [waterGoal, setWaterGoal] = useState(userData.healthData.water.goal)
    const [showWaterPopup, setShowWaterPopup] = useState(false)

    const updatedUserData = userData

    function submit () {
        if (waterAmount !== '' && waterGoal !== '') {
            updatedUserData.healthData.water.goal = parseInt(waterGoal)
            updatedUserData.healthData.water.amount[today] = parseInt(waterAmount)
            setUserData(updatedUserData)
            cancel()
        }
    }

    function cancel () {
        setShowWaterPopup(false)
        setKeyboardVisible('off')
    }

    return (
        <Grid>
            <Grid.Column verticalAlign='middle' textalign='center' width={8}>
                <Progress percent={((waterAmount / waterGoal) * 100).toFixed(1)} progress size='large' />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={6}>
                <Statistic label size='large'>
                    <Statistic.Value>{waterAmount}/{waterGoal}</Statistic.Value>
                    <Statistic.Label>{unit === 'standard' ? ' ounces' : 'liters'}</Statistic.Label>
                </Statistic>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={1}>
                <Icon onClick={() => setShowWaterPopup(true)} link circular name='plus' className='box-plus-sign' />
                <PageModal
                    title={'Water Tracker'}
                    open={showWaterPopup}
                    setOpen={() => setShowWaterPopup(true)}
                    setClosed={() => cancel()}
                    submitAction={() => submit()}
                    cancelAction={() => cancel()}
                    content={<ModalContent setKeyboardVisible={setKeyboardVisible} unit={unit} waterAmount={waterAmount} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}
                    submitText={'Submit'}
                    cancelText={'Cancel'}
                />
            </Grid.Column>
        </Grid>
    )
}

const Water = ({ setKeyboardVisible, unit, userData, setUserData }) => {
    return (
        <PageItem title="Water Intake" content={<WaterContent setKeyboardVisible={setKeyboardVisible} unit={unit} userData={userData} setUserData={setUserData}/>}/>
    )
}

export default Water
