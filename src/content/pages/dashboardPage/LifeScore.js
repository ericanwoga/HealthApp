import React, { useState } from 'react'
import { Progress, Button, Header } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'

const ModalContent = () => {
    return (
        <>
            <Header>Sorry!</Header>
            <Header>We are still working on our proprietary way of calculating your Life Score.</Header>
            <Header>For now, your life score will always be 100!</Header>
            <Header>Keep up the great work!</Header>
        </>
    )
}

const LifeScoreContent = ({ score }) => {
    const [lifeScoreModal, setLifeScoreModal] = useState(false)

    return (
        <div>
            <PageModal
                title="How to improve your life score"
                content={<ModalContent/>}
                open={lifeScoreModal}
                setOpen={() => setLifeScoreModal(true)}
                setClosed={() => setLifeScoreModal(false)}
                submitAction={() => setLifeScoreModal(false)}
                submitText={'Done'}/>
            <Progress value={score} total='100' progress='ratio' size='large' style={{ marginBottom: '2rem' }}/>
            <Button size='large' fluid onClick={() => setLifeScoreModal(!lifeScoreModal)}>See how to improve this score!</Button>
        </div>
    )
}

const LifeScore = ({ score }) => {
    return (
        <PageItem title="Life Score" moreLabel="" content={<LifeScoreContent score={score}/>}/>
    )
}

export default LifeScore
