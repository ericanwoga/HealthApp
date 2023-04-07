import React, { useState } from 'react'
import { Header, Input, Button, Grid } from 'semantic-ui-react'
import PageItem from '../../PageItem'

const BodyContent = () => {
    const [weight, setWeight] = useState('')
    const [submittedWeight, setSubmittedWeight] = useState('')

    return (
        <>
            <Header size='small'>
                {submittedWeight
                    ? (
                        'You weighed in at ' + submittedWeight + ' lbs. today!'
                    )
                    : "Please enter today's weight"}
            </Header>
            <Grid>
                <Grid.Column width={10}>
                    <Input
                        fluid
                        label={{ basic: true, content: 'lbs' }}
                        labelPosition='right'
                        placeholder='Enter weight...'
                        onChange={(e) => { setWeight(e.target.value) }}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button fluid onClick={() => { setSubmittedWeight(weight) }}>Submit</Button>
                </Grid.Column>
            </Grid>
        </>
    )
}

const Body = () => {
    return (
        <div>
            <Header size='large'>Body</Header>
            <PageItem title="Today's Weight" content={<BodyContent/>}/>
        </div>
    )
}

export default Body
