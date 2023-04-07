import React, { useState, useEffect } from 'react'
import { Button, Icon, Grid, Header, Input, Dropdown } from 'semantic-ui-react'
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

const QuickActionsContent = ({ userData, setUserData }) => {
    const [modal, setModal] = useState(false)
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [hours, setHours] = useState('')
    const [water, setWater] = useState('')

    const submitActivity = () => {
        if (name !== '' && calories !== '') {
            const updatedUserData = userData
            const now = moment()
            updatedUserData.activityData.activity[now] = { name, calories }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitMeal = () => {
        if (name !== '' && calories !== '') {
            const updatedUserData = userData
            const now = moment()
            updatedUserData.healthData.meals[now] = { name, calories }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitSleep = () => {
        if (hours !== '') {
            const updatedUserData = userData
            const now = moment().toDate()
            updatedUserData.healthData.sleep[now] = { hours }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const submitWater = () => {
        if (water !== '') {
            const updatedUserData = userData
            const now = moment().toDate()
            updatedUserData.healthData.water[now] = { water }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const cancel = () => {
        setModal(false)
        setName('')
        setCalories('')
        setHours('')
        setWater('')
    }

    useEffect(() => {
        setContent(
            (modal === 'Track Activity' &&
            <PageModal
                content={<TrackActivityModal setName={setName} setCalories={setCalories}/>}
                title={modal}
                open={modal}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitActivity()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modal === 'Track Meal' &&
            <PageModal
                content={<TrackMealModal setName={setName} setCalories={setCalories}/>}
                title={modal}
                open={modal}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitMeal()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modal === 'Track Sleep' &&
            <PageModal
                content={<TrackSleepModal setHours={setHours}/>}
                title={modal}
                open={modal}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitSleep()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            (modal === 'Track Water' &&
            <PageModal
                content={<TrackWaterModal setWater={setWater}/>}
                title={modal}
                open={modal}
                setClosed={() => cancel()}
                submitText={'Submit'}
                submitAction={() => submitWater()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>) ||
            ''
        )
    }, [modal, name, calories, hours, water])

    return (
        <>
            {content}
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Button fluid size='large' icon labelPosition='left' onClick={() => setModal('Track Activity')}>
                        Track Activity
                            <Icon name='bicycle' />
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid size='large' icon labelPosition='left' onClick={() => setModal('Track Meal')}>
                        Track Meal
                            <Icon name='food' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Button fluid size='large' icon labelPosition='left' onClick={() => setModal('Track Sleep')}>
                        Track Sleep
                            <Icon name='bed' />
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button fluid size='large' icon labelPosition='left' onClick={() => setModal('Track Water')}>
                        Track Water
                            <Icon name='tint' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>

                {/*
            <Grid.Row>
                <Grid.Column>
                <Button fluid size='large' icon labelPosition='left'>
                    Learn Something
                    <Icon name='lightbulb outline' />
                </Button>
                </Grid.Column>
                <Grid.Column>
                <Button fluid size='large' icon labelPosition='left'>
                    Track Mood
                    <Icon name='smile' />
                </Button>
                </Grid.Column>
            </Grid.Row>
            */}
            </Grid>
        </>
    )
}

const QuickActions = ({ setUserData, userData }) => {
    return (
        <PageItem title="Quick Actions" moreLabel="Edit Actions" content={<QuickActionsContent userData={userData} setUserData={setUserData}/>}/>
    )
}

export default QuickActions
