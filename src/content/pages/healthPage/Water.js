import React, { useState } from 'react'
import { Statistic, Grid, Progress, Button, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import DateSelect from '../../DateSelect'
import DatedItems from '../../DatedItems'
import ViewAllCard from '../../ViewAllCard'
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
            <Header>How much water would you like to add for today?</Header>
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
        <>
            <Grid>
                <Grid.Column verticalAlign='middle' textalign='center' width={8} style={{ marginTop: '0px', paddingBottom: '0px' }}>
                    <Progress percent={((waterAmount / waterGoal) * 100).toFixed(1)} progress size='large' style={{ fontSize: '125%' }}/>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={8} style={{ marginTop: '0px', paddingBottom: '30px' }}>
                    <Statistic label size='small'>
                        <Statistic.Value>{waterAmount}/{waterGoal}</Statistic.Value>
                        <Statistic.Label>{unit === 'standard' ? ' ounces' : 'liters'}</Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid>
            <Button fluid size='huge' onClick={() => setShowWaterPopup(true)}>
                Track Water
            </Button>
            <PageModal
                title={'Water Tracker'}
                open={showWaterPopup}
                setOpen={() => setShowWaterPopup(true)}
                setClosed={() => cancel()}
                submitAction={() => submit()}
                cancelAction={() => cancel()}
                content={<ModalContent setKeyboardVisible={setKeyboardVisible} unit={unit} waterAmount={waterAmount} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}
                submitText={'Save'}
                cancelText={'Cancel'}
            />
        </>
    )
}

const Water = ({ setKeyboardVisible, unit, userData, setUserData }) => {
    const [date, setDate] = useState(new Date())
    const [openModal, setOpenModal] = useState(false)

    const items = {}
    const itemList = []
    Object.keys(items).map((key) => (
        itemList.push(
            <ViewAllCard key={key} date={key} name={items[key].name}/>
        )
    ))

    return (
        <>
            <PageItem title="Water Intake" moreLabel={'View All'} moreAction={() => setOpenModal(true)} content={<WaterContent setKeyboardVisible={setKeyboardVisible} unit={unit} userData={userData} setUserData={setUserData}/>}/>
            <PageModal
                title={'Water Intake History'}
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

export default Water
