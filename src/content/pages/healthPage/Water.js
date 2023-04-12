import React, { useState } from 'react'
import { Statistic, Grid, Progress, Icon, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import './Health.css'

const ModalContent = ({ unit, water, setWaterAmount, waterGoal, setWaterGoal }) => {
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

    return (
        <>
            <Header>What is your water goal for today?</Header>
            <Input fluid label={{ basic: true, content: unit === 'standard' ? 'Ounces' : 'Liters' }}
                labelPosition='right'
                value={waterGoal}
                onChange={changeWaterGoal}
                error={waterGoalError}
                placeholder='Enter water intake goal'/>
            {waterGoalError ? <Label basic color='red' pointing prompt >Must be a number greater than 0</Label> : null}
            <Header>How much water did you drink today?</Header>
            <Input fluid label={{ basic: true, content: unit === 'standard' ? 'Ounces' : 'Liters' }}
                labelPosition='right'
                value={water}
                onChange={changeWaterAmount}
                error={waterAmountError}
                placeholder='Enter water intake'/>
            {waterAmountError ? <Label basic color='red' pointing prompt >Must be a number greater than 0</Label> : null}
        </>
    )
}

const WaterContent = ({ unit, water, setWaterAmount, waterGoal, setWaterGoal }) => {
    const [showWaterPopup, setShowWaterPopup] = useState(false)

    return (
        <Grid>
            <Grid.Column verticalAlign='middle' textalign='center' width={8}>
                <Progress percent={((water / waterGoal) * 100).toFixed(1)} progress size='large' />
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={6}>
                <Statistic label size='large'>
                    <Statistic.Value>{water}/{waterGoal}</Statistic.Value>
                    <Statistic.Label>{unit === 'standard' ? 'Ounces' : 'Liters'}</Statistic.Label>
                </Statistic>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={1}>
                <Icon onClick={() => setShowWaterPopup(true)} link circular name='plus' className='box-plus-sign' />
                <PageModal
                    title={'Water Tracker'}
                    open={showWaterPopup}
                    setOpen={() => setShowWaterPopup(true)}
                    setClosed={() => setShowWaterPopup(false)}
                    submitAction={() => setShowWaterPopup(false)}
                    cancelAction={() => setShowWaterPopup(false)}
                    content={<ModalContent unit={unit} water={water} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}
                    submitText={'Submit'}
                    cancelText={'Cancel'}
                />
            </Grid.Column>
        </Grid>
    )
}

const Water = ({ unit, water, setWaterAmount, waterGoal, setWaterGoal }) => {
    return (
        <PageItem title="Water Intake" content={<WaterContent unit={unit} water={water} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}/>
    )
}

export default Water
