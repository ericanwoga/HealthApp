import React, { useState } from 'react'
import PageItem from '../../PageItem'
import { Header, Card, Pagination } from 'semantic-ui-react'
import moment from 'moment'

const Paginate = ({ itemList, limit, itemsPerPage }) => {
    const [activePage, setActivePage] = useState(1)
    itemsPerPage = itemsPerPage > 0 ? itemsPerPage : 10

    return (
        <>
            {limit
                ? itemList.slice((activePage - 1) * itemsPerPage, limit)
                : (<>
                    {itemList.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage)}
                    {(itemList.length >= itemsPerPage)
                        ? <Pagination
                            onPageChange={(e, { activePage }) => setActivePage(activePage)}
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={Math.ceil(itemList.length / itemsPerPage)}
                        />
                        : ''} </>
                )
            }
        </>
    )
}

const WorkoutCard = ({ date, workout }) => {
    return (
        <Card as="h5" fluid>
            <Card.Content>
                <Card.Header textAlign='left'>{workout.name}</Card.Header>
                <Card.Meta textAlign='left'>{moment(date).calendar()}</Card.Meta>
                <Card.Description textAlign='left'>Calories Burned: {workout.calories}</Card.Description>
            </Card.Content>
        </Card>
    )
}

const WorkoutList = ({ workouts }) => {
    const workoutsArray = []
    Object.keys(workouts).map((key) => (
        workoutsArray.push(
            <WorkoutCard key={key} date={key} workout={workouts[key]}></WorkoutCard>
        )
    ))

    return (
        <>
            {workoutsArray.length > 0
                ? <Paginate itemList={workoutsArray} limit={3}/>
                : <Header>{'Track your first workout and you\'ll see it here!'}</Header>
            }
        </>
    )
}

const RecentActivity = ({ userData }) => {
    return (
        <PageItem title="Recent Activity" moreLabel="View More" content={<WorkoutList workouts={userData.activityData.activity} limit={3}/>}/>
    )
}

export default RecentActivity
