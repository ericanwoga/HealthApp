import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PageCard = ({ title, imageSrc, description }) => {
    return (
        <Card>
            <Image src={imageSrc} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default PageCard
