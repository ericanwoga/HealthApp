import React, { useState, useEffect } from 'react'
import { Button, Icon, Grid, Header, Input, Radio } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import moment from 'moment'

const TrackActivityModal = ({ setKeyboardVisible, setName, setCalories }) => {
    return (
        <>
            <Header size='large'>What kind of activity would you like to track?</Header>
            <Input
                size='large'
                fluid
                labelPosition='right'
                placeholder='Activity Name'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setName(result.value)}/>
            <Header size='large'>How many calories did you burn?</Header>
            <Input
                size='large'
                fluid
                label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                placeholder='Calories'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setCalories(result.value)}/>
        </>
    )
}

const TrackMealModal = ({ setKeyboardVisible, setName, setCalories }) => {
    return (
        <>
            <Header size='large'>What is the name of the meal?</Header>
            <Input
                size='large'
                fluid
                labelPosition='right'
                placeholder='Meal name'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setName(result.value)}/>
            <Header size='large'>How many calories were in the meal?</Header>
            <Input
                size='large'
                fluid
                label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                placeholder='Calories'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setCalories(result.value)}/>
        </>
    )
}

const TrackSleepModal = ({ setKeyboardVisible, setHours }) => {
    return (
        <>
            <Header size='large'>How many hours of sleep would you like to add for today?</Header>
            <Input
                size='large'
                fluid
                label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                placeholder='Enter hours slept'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setHours(result.value)}/>
        </>
    )
}

const TrackWaterModal = ({ unit, setKeyboardVisible, setWater }) => {
    return (
        <>
            <Header size='large'>How much water would you like to add?</Header>
            <Input
                size='large'
                fluid
                label={{ basic: true, content: unit === 'standard' ? 'ounces' : 'liters' }}
                labelPosition='right'
                placeholder='Enter water amount'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setWater(result.value)}/>
        </>
    )
}

const TrackMoodModal = ({ mood, setFeeling, feeling }) => {
    const [forceReload, setForceReload] = useState(false)
    const changeMood = (e) => {
        const val = e.target.value
        setFeeling(val)
        setForceReload(!forceReload)
    }

    return (
        <>
            <Header textAlign='left'>
                {'At ' + moment().format('LT') + ' you were feeling ' + mood}
            </Header>
            <Header textAlign='left'>How are you feeling now?</Header>
            <Button.Group fluid textalign='center' size="huge">
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeMood} active={feeling === 'happy'} value="happy">Happy</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeMood} active={feeling === 'okay'} value="okay">Okay</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeMood} active={feeling === 'sad'} value="sad">Sad</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeMood} active={feeling === 'anxious'} value="anxious">Anxious</Button>
                <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} onClick={changeMood} active={feeling === 'angry'} value="angry">Angry</Button>
            </Button.Group>
        </>
    )
}

const TrackStepsModal = ({ userData, setKeyboardVisible, setSteps }) => {
    return (
        <>
            <Header size='large'>Current steps today: {userData.activityData.steps[moment().format('YYYY-MM-DD')] > 0 ? userData.activityData.steps[moment().format('YYYY-MM-DD')] : 0}</Header>
            <Header size='large'>How many more steps would you like to track for today?</Header>
            <Input
                size='large'
                fluid
                placeholder='Steps to add to your total today'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setSteps(result.value)}/>
        </>
    )
}

const ButtonLayout = ({ actionItems, setModalOpen }) => {
    const activityButtons = []
    Object.keys(actionItems).map((key) => (
        actionItems[key] === true && activityButtons.push(
            <Button key={key} fluid size='huge' icon labelPosition='left' onClick={() => {
                setModalOpen(key)
            }}>
                <div style={{ paddingLeft: '27px', paddingRight: '0px' }}>{key}</div>
                <Icon
                    name={
                        (key === 'Track Activity' && 'bicycle') ||
                        (key === 'Track Meal' && 'food') ||
                        (key === 'Track Sleep' && 'bed') ||
                        (key === 'Track Water' && 'tint') ||
                        (key === 'Learn Something' && 'lightbulb outline') ||
                        (key === 'Track Mood' && 'smile') ||
                        (key === 'Track Steps' && 'plus')
                    }/>
            </Button>
        )
    ))

    const twoColumnGridItems = []
    const oneColumnGridItems = []

    while (activityButtons.length > 1) {
        twoColumnGridItems.unshift(
            <Grid.Row key={activityButtons.length}>
                <Grid.Column>
                    {activityButtons.pop()}
                </Grid.Column>
                <Grid.Column>
                    {activityButtons.pop()}
                </Grid.Column>
            </Grid.Row>
        )
    }

    if (activityButtons.length === 1) {
        oneColumnGridItems.unshift(
            <Grid.Row key={activityButtons.length}>
                <Grid.Column>
                    {activityButtons.pop()}
                </Grid.Column>
            </Grid.Row>
        )
    }

    return (
        <>
            {twoColumnGridItems.length > 0
                ? <Grid columns={2}>
                    {twoColumnGridItems.map((gridItem) => (
                        gridItem
                    ))}
                </Grid>
                : <></> }
            {oneColumnGridItems.length > 0
                ? <Grid columns={1}>
                    {oneColumnGridItems.map((gridItem) => (
                        gridItem
                    ))}
                </Grid>
                : <></> }
            {twoColumnGridItems.length === 0 && oneColumnGridItems.length === 0
                ? <Header textAlign='left'>
                    {'Select which Quick Actions you would like to see by pressing "Edit Actions" directly above this section!'}
                </Header>
                : ''
            }
        </>
    )
}

const QuickActionsContent = ({ setKeyboardVisible, actionItems, userData, setUserData }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [actionModal, setActionModal] = useState('')
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [hours, setHours] = useState('')
    const [water, setWater] = useState('')
    const [feeling, setFeeling] = useState('')
    const [mood, setMood] = useState('happy')
    const [steps, setSteps] = useState('')

    const unit = userData.preferences.unit

    const updatedUserData = userData
    const now = moment()

    const submitActivity = () => {
        if (name !== '' && calories !== '') {
            updatedUserData.activityData.activity[now.toDate()] = { name, calories: parseInt(calories) }
            setUserData(updatedUserData)
            setModalOpen('Confirmation')
        }
    }

    const submitMeal = () => {
        if (name !== '' && calories !== '') {
            updatedUserData.healthData.meals[now.toDate()] = { name, calories: parseInt(calories) }
            setUserData(updatedUserData)
            setModalOpen('Confirmation')
        }
    }

    const submitSleep = () => {
        if (hours !== '') {
            updatedUserData.healthData.sleep.amount[now.format('MM-DD-YYYY')] = parseInt(hours)
            setUserData(updatedUserData)
            setModalOpen('Confirmation')
        }
    }

    const submitWater = () => {
        if (water !== '') {
            updatedUserData.healthData.water.amount[now.format('MM-DD-YYYY')] > 0
                ? updatedUserData.healthData.water.amount[now.format('MM-DD-YYYY')] += parseInt(water)
                : updatedUserData.healthData.water.amount[now.format('MM-DD-YYYY')] = parseInt(water)
            setUserData(updatedUserData)
            setModalOpen('Confirmation')
        }
    }

    const submitMood = () => {
        if (feeling !== '') {
            setMood(feeling)
            /*
            updatedUserData.healthData.mood[now.format('MM-DD-YYYY')] = mood
            setUserData(updatedUserData)
            */
            setModalOpen('Confirmation')
        }
    }

    const submitSteps = () => {
        if (steps !== '') {
            parseInt(updatedUserData.activityData.steps[now.format('YYYY-MM-DD')]) > 0
                ? updatedUserData.activityData.steps[now.format('YYYY-MM-DD')] += parseInt(steps)
                : updatedUserData.activityData.steps[now.format('YYYY-MM-DD')] = parseInt(steps)
            setUserData(updatedUserData)
            setModalOpen('Confirmation')
        }
    }

    const cancel = () => {
        setModalOpen(false)
        setKeyboardVisible('off')
        setName('')
        setCalories('')
        setHours('')
        setWater('')
        setFeeling('')
        setMood('happy')
        setSteps('')
    }

    const ConfirmationModal = () => {
        return (
            <>
                <Header size='large'>Informaton Tracked!</Header>
                <Header size='large'>{"Head to the 'Health' Page to see your data."}</Header>
            </>
        )
    }

    useEffect(() => {
        setActionModal(
            (modalOpen === 'Track Activity' &&
            <PageModal
                content={<TrackActivityModal setKeyboardVisible={setKeyboardVisible} setName={setName} setCalories={setCalories}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitActivity()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Meal' &&
            <PageModal
                content={<TrackMealModal setKeyboardVisible={setKeyboardVisible} setName={setName} setCalories={setCalories}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitMeal()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Sleep' &&
            <PageModal
                content={<TrackSleepModal setKeyboardVisible={setKeyboardVisible} setHours={setHours}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitSleep()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Water' &&
            <PageModal
                content={<TrackWaterModal unit={unit} setKeyboardVisible={setKeyboardVisible} setWater={setWater}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitWater()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Mood' &&
            <PageModal
                content={<TrackMoodModal mood={mood} setKeyboardVisible={setKeyboardVisible} feeling={feeling} setFeeling={setFeeling}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitMood()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Steps' &&
            <PageModal
                content={<TrackStepsModal userData={userData} setKeyboardVisible={setKeyboardVisible} setSteps={setSteps}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitSteps()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Confirmation' &&
                <PageModal
                    content={<ConfirmationModal/>}
                    title={modalOpen}
                    open={true}
                    submitText={'Done'}
                    submitAction={() => cancel()}
                    cancelAction={() => cancel()}/>) ||
            ''
        )
    }, [modalOpen, name, calories, hours, water, mood, steps, feeling])

    return (
        <>
            {actionModal}
            <ButtonLayout setModalOpen={setModalOpen} actionItems={actionItems}/>
        </>
    )
}

const GetActionItems = ({ handleClick, actionItems }) => {
    const activityRadios = []
    Object.keys(actionItems).map((key) => (
        activityRadios.push(
            <Header key={key}>
                <Radio label={key} toggle checked={actionItems[key]} style={{ fontSize: '100%' }} onClick={() => handleClick(key)}/>
            </Header>
        )
    ))

    return (
        <Header>
            {activityRadios}
        </Header>
    )
}

const QuickActions = ({ setKeyboardVisible, setUserData, userData }) => {
    const [actionModal, setActionModal] = useState(false)
    const [actionItems, setActionItems] = useState({ 'Track Activity': true, 'Track Meal': true, 'Track Sleep': true, 'Track Water': true, 'Track Mood': true, 'Track Steps': true })
    const [reload, setReload] = useState(false)

    const handleClick = (key) => {
        const updatedActionItems = actionItems
        updatedActionItems[key] = !actionItems[key]
        setActionItems(updatedActionItems)
        setReload(!reload)
    }

    return (
        <>
            <PageModal
                content={<GetActionItems handleClick={handleClick} actionItems={actionItems}/>}
                title={'Edit Quick Actions'}
                open={actionModal}
                setClosed={() => setActionModal(false)}
                submitText={'Done'}
                submitAction={() => setActionModal(false)}/>
            <PageItem
                title="Quick Actions"
                moreLabel="Edit Actions"
                moreAction={() => setActionModal(true)}
                content={<QuickActionsContent setKeyboardVisible={setKeyboardVisible} actionItems={actionItems} userData={userData} setUserData={setUserData}/>}/>
        </>
    )
}

export default QuickActions
