import React, { useState } from 'react'
import { Statistic, Grid, Progress, Button, Header, Input, Label } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import DateSelect from '../../DateSelect'
import DatedItems from '../../DatedItems'
import ViewAllCard from '../../ViewAllCard'
import moment from 'moment'
import './Health.css'

const ModalContent = ({ setKeyboardVisible, water, setWaterAmount, waterGoal, setWaterGoal }) => {
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
            <Header size='large'>How many calories would you like to add for today?</Header>
            <Input size='huge' fluid label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                value={water}
                onChange={(e, result) => changeWaterAmount(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={waterAmountError}
                placeholder='Enter calories consumed'/>
            {waterAmountError ? <Label basic color='red' pointing prompt >Must be a number greater than or equal to 0</Label> : null}
            <Header size='large'>What is your calorie goal for today?</Header>
            <Input size='huge' fluid label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                value={waterGoal}
                onChange={(e, result) => changeWaterGoal(result.value)}
                onClick={() => setKeyboardVisible('onModal')}
                error={waterGoalError}
                placeholder='Enter calorie goal'/>
            {waterGoalError ? <Label basic color='red' pointing prompt >Must be a number greater than or equal to 0</Label> : null}
        </>
    )
}

const WaterContent = ({ setKeyboardVisible, userData, setUserData }) => {
    const today = moment().format('MM-DD-YYYY')

    const [waterAmount, setWaterAmount] = useState(100)
    const [waterGoal, setWaterGoal] = useState(2000)
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
                        <Statistic.Label>{'calories'}</Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid>
            <Button fluid size='huge' onClick={() => setShowWaterPopup(true)}>
                Track Calories
            </Button>
            <PageModal
                title={'Calorie Intake'}
                open={showWaterPopup}
                setOpen={() => setShowWaterPopup(true)}
                setClosed={() => cancel()}
                submitAction={() => submit()}
                cancelAction={() => cancel()}
                content={<ModalContent setKeyboardVisible={setKeyboardVisible} waterAmount={waterAmount} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>}
                submitText={'Save'}
                cancelText={'Cancel'}
            />
        </>
    )
}

const Calories = ({ setKeyboardVisible, userData, setUserData }) => {
    const [date, setDate] = useState(new Date())
    const [openModal, setOpenModal] = useState(false)

    const items = {
        'Wed May 05 2023 14:10:36 GMT-0400 (Eastern Daylight Time)': { name: '100 calories' },
        'Wed May 06 2023 17:20:25 GMT-0400 (Eastern Daylight Time)': { name: '125 calories' },
        'Wed May 07 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: '150 calories' },
        'Wed May 09 2023 12:48:36 GMT-0400 (Eastern Daylight Time)': { name: '200 calories' },
        'Wed May 10 2023 15:20:25 GMT-0400 (Eastern Daylight Time)': { name: '500 calories' },
        'Wed May 10 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: '750 calories' },
        'Wed May 10 2023 09:20:25 GMT-0400 (Eastern Daylight Time)': { name: '250 calories' },
        'Wed May 10 2023 7:52:14 GMT-0400 (Eastern Daylight Time)': { name: '105 calories' }
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
            <PageItem title="Calorie Intake" moreLabel={'View All'} moreAction={() => setOpenModal(true)} content={<WaterContent setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>}/>
            <PageModal
                title={'Calorie Intake History'}
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

export default Calories
