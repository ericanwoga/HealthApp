import React, { useState, useEffect } from 'react'
import { Button, Icon, Grid, Header, Input, Dropdown, Radio } from 'semantic-ui-react'
import activityOptions from '../../../data/activityOptions.json'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import moment from 'moment'

const TrackActivityModal = ({ setName, setCalories }) => {
    return (
        <>
            <Header>What kind of activity would you like to track?</Header>
            <Dropdown
                placeholder='Select Activity'
                fluid
                selection
                options={activityOptions}
                onChange={(e, result) => setName(result.value)}/>
            <Header>How many calories did you burn?</Header>
            <Input
                fluid
                label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                placeholder='Calories'
                onChange={(e, result) => setCalories(result.value)}/>
        </>
    )
}

const TrackMealModal = ({ setName, setCalories }) => {
    return (
        <>
            <Header>What is the name of the meal?</Header>
            <Input
                fluid
                labelPosition='right'
                placeholder='Meal name'
                onChange={(e, result) => setName(result.value)}/>
            <Header>How many calories were in the meal?</Header>
            <Input
                fluid
                label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                placeholder='Calories'
                onChange={(e, result) => setCalories(result.value)}/>
        </>
    )
}

const TrackSleepModal = ({ setHours }) => {
    return (
        <>
            <Header>How many hours did you sleep?</Header>
            <Input
                fluid
                label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                placeholder='Enter hours slept'
                onChange={(e, result) => setHours(result.value)}/>
        </>
    )
}

const TrackWaterModal = ({ setWater }) => {
    return (
        <>
            <Header>How much water would you like to track?</Header>
            <Input
                fluid
                label={{ basic: true, content: 'fluid oz' }}
                labelPosition='right'
                placeholder='Enter water intake'
                onChange={(e, result) => setWater(result.value)}/>
        </>
    )
}

const TrackMoodModal = ({ setMood }) => {
    return (
        <>
            <Header>How are you feeling today?</Header>
            <Input
                fluid
                labelPosition='right'
                placeholder='Describe how you feel!'
                onChange={(e, result) => setMood(result.value)}/>
        </>
    )
}

const ButtonLayout = ({ actionItems, setModalOpen }) => {
    const activityButtons = []
    Object.keys(actionItems).map((key) => (
        actionItems[key] === true && activityButtons.push(
            <Button key={key} fluid size='large' icon labelPosition='left' onClick={() => {
                setModalOpen(key)
            }}>
                {key}
                <Icon
                    name={
                        (key === 'Track Activity' && 'bicycle') ||
                        (key === 'Track Meal' && 'food') ||
                        (key === 'Track Sleep' && 'bed') ||
                        (key === 'Track Water' && 'tint') ||
                        (key === 'Learn Something' && 'lightbulb outline') ||
                        (key === 'Track Mood' && 'smile')
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

const QuickActionsContent = ({ actionItems, userData, setUserData }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [actionModal, setActionModal] = useState('')
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [hours, setHours] = useState('')
    const [water, setWater] = useState('')
    const [mood, setMood] = useState('')

    const updatedUserData = userData
    const now = moment()

    const submitActivity = () => {
        if (name !== '' && calories !== '') {
            updatedUserData.activityData.activity[now.toDate()] = { name, calories }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitMeal = () => {
        if (name !== '' && calories !== '') {
            updatedUserData.healthData.meals[now.toDate()] = { name, calories }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitSleep = () => {
        if (hours !== '') {
            updatedUserData.healthData.sleep[now.toDate()] = { hours }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitWater = () => {
        if (water !== '') {
            updatedUserData.healthData.water[now.toDate()] = { water }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitMood = () => {
        if (mood !== '') {
            updatedUserData.healthData.mood[now.toDate()] = { mood }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const cancel = () => {
        setModalOpen(false)
        setName('')
        setCalories('')
        setHours('')
        setWater('')
        setMood('')
    }

    useEffect(() => {
        setActionModal(
            (modalOpen === 'Track Activity' &&
            <PageModal
                content={<TrackActivityModal setName={setName} setCalories={setCalories}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitActivity()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Meal' &&
            <PageModal
                content={<TrackMealModal setName={setName} setCalories={setCalories}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitMeal()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Sleep' &&
            <PageModal
                content={<TrackSleepModal setHours={setHours}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitSleep()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Water' &&
            <PageModal
                content={<TrackWaterModal setWater={setWater}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitWater()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modalOpen === 'Track Mood' &&
            <PageModal
                content={<TrackMoodModal setMood={setMood}/>}
                title={modalOpen}
                open={true}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitMood()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            ''
        )
    }, [modalOpen, name, calories, hours, water, mood])

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
                <Radio label={key} toggle checked={actionItems[key]} onClick={() => handleClick(key)}/>
            </Header>
        )
    ))

    return (
        <Header>
            {activityRadios}
        </Header>
    )
}

const QuickActions = ({ setUserData, userData }) => {
    const [actionModal, setActionModal] = useState(false)
    const [actionItems, setActionItems] = useState({ 'Track Activity': true, 'Track Meal': true, 'Track Sleep': true, 'Track Water': true, 'Track Mood': false })
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
                content={<QuickActionsContent actionItems={actionItems} userData={userData} setUserData={setUserData}/>}/>
        </>
    )
}

export default QuickActions
