import React, { useState } from 'react'
import { Header, Input, Button, Grid } from 'semantic-ui-react'

const BodyMeasurements = () => {
    const [neck, setNeck] = useState('')
    const [waist, setWaist] = useState('')
    const [biceps, setBiceps] = useState('')
    const [thighs, setThighs] = useState('')
    const [calves, setCalves] = useState('')

    const NeckChange = (e) => {
        setNeck(e.target.value)
    }
    const WaistChange = (e) => {
        setWaist(e.target.value)
    }
    const BicepsChange = (e) => {
        setBiceps(e.target.value)
    }
    const ThighsChange = (e) => {
        setThighs(e.target.value)
    }
    const CalvesChange = (e) => {
        setCalves(e.target.value)
    }

    const SubmitMeasurements = () => {
        const newMeasurement = {
            neck: parseFloat(neck),
            waist: parseFloat(waist),
            biceps: parseFloat(biceps),
            thighs: parseFloat(thighs),
            calves: parseFloat(calves)
        }
        console.log(newMeasurement)
        setNeck('')
        setWaist('')
        setBiceps('')
        setThighs('')
        setCalves('')
    }

    return (
        <>
            <Grid>
                <Grid.Column width={5}>
                    <Header>Neck</Header>
                    <Input
                        fluid
                        label={{ basic: true, content: 'in.' }}
                        labelPosition="right"
                        placeholder="Enter neck measurement..."
                        onChange={NeckChange}
                        value={neck}
                    />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Header>Waist</Header>
                    <Input
                        fluid
                        label={{ basic: true, content: 'in.' }}
                        labelPosition="right"
                        placeholder="Enter waist measurement..."
                        onChange={WaistChange}
                        value={waist}
                    />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Header>Biceps</Header>
                    <Input
                        fluid
                        label={{ basic: true, content: 'in.' }}
                        labelPosition="right"
                        placeholder="Enter bicep measurement..."
                        onChange={BicepsChange}
                        value={biceps}
                    />
                </Grid.Column>
            </Grid>
            <Grid>
                <Grid.Column width={5}>
                    <Header>Thighs</Header>
                    <Input
                        fluid
                        label={{ basic: true, content: 'in.' }}
                        labelPosition="right"
                        placeholder="Enter bicep measurement..."
                        onChange={ThighsChange}
                        value={thighs}
                    />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Header>Calves</Header>
                    <Input
                        fluid
                        label={{ basic: true, content: 'in.' }}
                        labelPosition="right"
                        placeholder="Enter bicep measurement..."
                        onChange={CalvesChange}
                        value={calves}
                    />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid onClick={SubmitMeasurements}>
            Submit Measures
                    </Button>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default BodyMeasurements
