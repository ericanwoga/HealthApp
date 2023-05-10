import React from 'react'
import moment from 'moment'
import { Card } from 'semantic-ui-react'

const ViewAllCard = ({ date, name, subLabel, subContent }) => {
    return (
        <Card as="h4" fluid>
            <Card.Content>
                <Card.Header textAlign='left'>{name}</Card.Header>
                <Card.Meta textAlign='left'>{moment(date).format('MM/DD/YYYY h:mm a')}</Card.Meta>
                <Card.Description textAlign='left'>{subLabel} {': '} {subContent}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ViewAllCard
