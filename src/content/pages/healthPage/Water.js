import React, { useState } from 'react'
import { Statistic, Grid, Progress, Button, Icon, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import './Health.css'

const ModalContent = ({ unit, setUnit, water, setWaterAmount, waterGoal, setWaterGoal }) => {
    const [waterGoalError, setWaterGoalError] = useState(false)
    const [waterAmountError, setWaterAmountError] = useState(false)

    const changeWaterGoal = (event) => {
        // lets user change their sleep goal
        const val = event.target.value

        if (val < 0 || isNaN(val)) {
            setWaterGoalError(true)
        } else {
            setWaterGoalError(false)
            setWaterGoal(val)
        }
    }

    const changeWaterAmount = (event) => {
        // lets user change their sleep amount
        const val = event.target.value

        if (val < 0 || isNaN(val)) {
            setWaterAmountError(true)
        } else {
            setWaterAmountError(false)
            setWaterAmount(val)
        }
    }

    const changeUnit = (e) => {
        const val = e.target.value

        if (val === 'liters') {
            setUnit('liters')
        } else {
            setUnit('ounces')
        }
    }

    return (
        <>
            <Header>Choose a unit of measure</Header>
            <Button.Group>
                <Button onClick={changeUnit} value="ounces">Ounces</Button>
                <Button onClick={changeUnit} value="liters">Liters</Button>
            </Button.Group>
            <Header>What is your water goal for today?</Header>
            <Input fluid label={{ basic: true, content: unit }}
                labelPosition='right'
                value={waterGoal}
                onChange={changeWaterGoal}
                error={waterGoalError}
                placeholder='Enter water intake goal'/>
            {waterGoalError ? <Label basic color='red' pointing prompt >Must be a number greater than 0</Label> : null}
            <Header>How much water did you drink today?</Header>
            <Input fluid label={{ basic: true, content: unit }}
                labelPosition='right'
                value={water}
                onChange={changeWaterAmount}
                error={waterAmountError}
                placeholder='Enter water intake'/>
            {waterAmountError ? <Label basic color='red' pointing prompt >Must be a number greater than 0</Label> : null}
        </>
    )
}

const WaterContent = ({ water, setWaterAmount, waterGoal, setWaterGoal }) => {
    const [showSleepPopup, setShowSleepPopup] = useState(false)
    const [unit, setUnit] = useState('ounces')

    return (
        <Grid>
            <Grid.Column verticalAlign='middle' textAlign='middle' width={8}>
                <Progress percent={((water / waterGoal) * 100).toFixed(1)} progress size='big' />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={6}>
                <Statistic horizontal label size='large'>
                    <Statistic.Value>{water}/{waterGoal}</Statistic.Value>
                    <Statistic.Label>{unit}</Statistic.Label>
                </Statistic>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={1}>
                <Icon onClick={() => setShowSleepPopup(true)} link circular name='plus' className='box-plus-sign' />
                <PageModal
                    title={'Sleep Tracker'}
                    open={showSleepPopup}
                    setOpen={() => setShowSleepPopup(true)}
                    setClosed={() => setShowSleepPopup(false)}
                    submitAction={() => setShowSleepPopup(false)}
                    cancelAction={() => setShowSleepPopup(false)}
                    content={<ModalContent unit={unit} setUnit={setUnit} water={water} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}
                    submitText={'Submit'}
                    cancelText={'Cancel'}
                />
            </Grid.Column>
        </Grid>
    )
}

const Water = ({ water, setWaterAmount, waterGoal, setWaterGoal }) => {
    return (
        <PageItem title="Water Intake" content={<WaterContent water={water} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}/>
    )
}

export default Water
