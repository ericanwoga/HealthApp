import React, { useState } from 'react'
import { Header, Card, Button, Input } from 'semantic-ui-react'
import moment from 'moment'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'
import DatedItems from '../../DatedItems'
import PaginatedItems from '../../PaginatedItems'
import DateSelect from '../../DateSelect'

const WorkoutCard = ({ date, workout }) => {
    return (
        <Card as="h4" fluid>
            <Card.Content>
                <Card.Header textAlign='left'>{workout.name}</Card.Header>
                <Card.Meta textAlign='left'>{moment(date).format('MM/DD/YYYY h:mm a')}</Card.Meta>
                <Card.Description textAlign='left'>Calories Burned: {workout.calories}</Card.Description>
            </Card.Content>
        </Card>
    )
}

const WorkoutList = ({ workouts, setTrackActivityModal }) => {
    return (
        <>
            <Button fluid size='huge' onClick={() => {
                setTrackActivityModal(true)
            }}>
                Track Activity
            </Button>
            {workouts.length > 0
                ? <PaginatedItems itemList={workouts} limit={3}/>
                : <Header size='huge'>{'Track your first workout and you\'ll see it here!'}</Header>
            }
        </>
    )
}

const TrackActivityModal = ({ setKeyboardVisible, setName, setCalories }) => {
    return (
        <>
            <Header size='large'>What kind of activity would you like to track?</Header>
            <Input
                size='huge'
                fluid
                placeholder='Activity Name'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setName(result.value)}/>
            <Header size='large'>How many calories did you burn?</Header>
            <Input
                size='huge'
                fluid
                label={{ basic: true, content: 'calories' }}
                labelPosition='right'
                placeholder='Calories'
                onClick={() => setKeyboardVisible('onModal')}
                onChange={(e, result) => setCalories(result.value)}/>
        </>
    )
}

const RecentActivityContent = ({ workouts }) => {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <DateSelect date={date} setDate={setDate}/>
            <DatedItems date={date} itemList={workouts}/>
        </>

    )
}

const RecentActivity = ({ setKeyboardVisible, userData, setUserData }) => {
    const [activityModal, setActivityModal] = useState(false)
    const [trackActivityModal, setTrackActivityModal] = useState(false)
    const [calories, setCalories] = useState(false)
    const [name, setName] = useState(false)

    const updatedUserData = userData
    const now = moment()

    const workouts = userData.activityData.activity
    const workoutsArray = []
    Object.keys(workouts).map((key) => (
        workoutsArray.push(
            <WorkoutCard key={key} date={key} workout={workouts[key]}></WorkoutCard>
        )
    ))
    const unsortedWorkouts = workoutsArray
    const sortedWorkouts = unsortedWorkouts.reverse()

    const submitActivity = () => {
        if (name !== '' && calories !== '') {
            updatedUserData.activityData.activity[now.toDate()] = { name, calories }
            setUserData(updatedUserData)
            cancel()
        }
    }

    const cancel = () => {
        setActivityModal(false)
        setTrackActivityModal(false)
        setKeyboardVisible('off')
    }

    return (
        <>
            <PageModal
                content={<TrackActivityModal setKeyboardVisible={setKeyboardVisible} setName={setName} setCalories={setCalories}/>}
                title={'Track Activity'}
                open={trackActivityModal}
                setClosed={() => cancel()}
                submitText={'Save'}
                submitAction={() => submitActivity()}
                cancelText={'Cancel'}
                cancelAction={() => cancel()}/>
            {sortedWorkouts.length > 0
                ? (<PageModal
                    title={'All Activity'}
                    open={activityModal}
                    setOpen={() => setActivityModal(true)}
                    setClosed={() => setActivityModal(false)}
                    submitText={'Done'}
                    submitAction={() => setActivityModal(false)}
                    content={<RecentActivityContent workouts={sortedWorkouts}/>}/>)
                : ''}
            <PageItem
                title="Recent Activity"
                moreAction={sortedWorkouts.length > 0 ? () => setActivityModal(true) : {}}
                moreLabel={sortedWorkouts.length > 0 ? 'View All' : ''}
                content={
                    <WorkoutList setTrackActivityModal={setTrackActivityModal} workouts={sortedWorkouts} limit={3}/>
                }
            />
        </>
    )
}

export default RecentActivity
