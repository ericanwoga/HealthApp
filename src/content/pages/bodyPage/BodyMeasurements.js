import React, { useState } from 'react'
import { Header, Input, Button, Grid, Divider } from 'semantic-ui-react'
import moment from 'moment'

const BodyMeasurements = ({ setKeyboardVisible, unit, userData, setUserData }) => {
    const [neck, setNeck] = useState('')
    const [waist, setWaist] = useState('')
    const [biceps, setBiceps] = useState('')
    const [thighs, setThighs] = useState('')
    const [calves, setCalves] = useState('')
    const [chest, setChest] = useState('')

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
    const ChestChange = (e) => {
        setChest(e.target.value)
    }

    const SubmitMeasurements = () => {
        const newMeasurement = {
            neck: parseFloat(neck),
            waist: parseFloat(waist),
            biceps: parseFloat(biceps),
            thighs: parseFloat(thighs),
            calves: parseFloat(calves),
            chest: parseFloat(chest)
        }
        userData.bodyData.measurements[moment()] = newMeasurement
        setUserData(userData)
        setNeck('')
        setWaist('')
        setBiceps('')
        setThighs('')
        setCalves('')
        setChest('')
        setKeyboardVisible('off')
    }

    return (
        <>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header>Neck</Header>
                        <Input
                            fluid
                            label={{ basic: true, content: unit === 'metric' ? 'cm.' : 'in.' }}
                            labelPosition="right"
                            placeholder="Neck"
                            onChange={NeckChange}
                            onClick={() => setKeyboardVisible('onNoModal')}
                            value={neck}
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header>Waist</Header>
                        <Input
                            fluid
                            label={{ basic: true, content: unit === 'metric' ? 'cm.' : 'in.' }}
                            labelPosition="right"
                            placeholder="Waist"
                            onChange={WaistChange}
                            onClick={() => setKeyboardVisible('onNoModal')}
                            value={waist}
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header>Biceps</Header>
                        <Input
                            fluid
                            label={{ basic: true, content: unit === 'metric' ? 'cm.' : 'in.' }}
                            labelPosition="right"
                            placeholder="Biceps"
                            onChange={BicepsChange}
                            onClick={() => setKeyboardVisible('onNoModal')}
                            value={biceps}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header>Thighs</Header>
                        <Input
                            fluid
                            label={{ basic: true, content: unit === 'metric' ? 'cm.' : 'in.' }}
                            labelPosition="right"
                            placeholder="Thighs"
                            onChange={ThighsChange}
                            onClick={() => setKeyboardVisible('onNoModal')}
                            value={thighs}
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header>Calves</Header>
                        <Input
                            fluid
                            label={{ basic: true, content: unit === 'metric' ? 'cm.' : 'in.' }}
                            labelPosition="right"
                            placeholder="Calves"
                            onChange={CalvesChange}
                            onClick={() => setKeyboardVisible('onNoModal')}
                            value={calves}
                        />
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header>Chest</Header>
                        <Input
                            fluid
                            label={{ basic: true, content: unit === 'metric' ? 'cm.' : 'in.' }}
                            labelPosition="right"
                            placeholder="Chest"
                            onChange={ChestChange}
                            onClick={() => setKeyboardVisible('onNoModal')}
                            value={chest}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider/>
            <Button fluid onClick={SubmitMeasurements}>
                Submit Measurements
            </Button>
        </>
    )
}

export default BodyMeasurements
