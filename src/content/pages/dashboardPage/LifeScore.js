import React from 'react'
import { Progress, Button } from 'semantic-ui-react'
import PageItem from '../../PageItem'

const LifeScoreContent = ({ score }) => {
    return (
        <div>
            <Progress value={score} total='100' progress='ratio' size='large' style={{ marginBottom: '2rem' }}/>
            <Button size='large' fluid>See how to improve this score!</Button>
        </div>
    )
}

const LifeScore = ({ score }) => {
    return (
        <PageItem title="Life Score" moreLabel="" content={<LifeScoreContent score={score}/>}/>
    )
}

export default LifeScore
