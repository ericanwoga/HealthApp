import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PageCard = ({ title, imageSrc, button }) => {
    return (
        <Card style={{ height: '100%' }}>
            <Image src={imageSrc} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                {button}
            </Card.Content>
        </Card>
    )
}

export default PageCard
