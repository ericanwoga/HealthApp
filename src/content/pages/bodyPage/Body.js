import React, { useState } from 'react'
import { Header, Input, Button, Grid } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import BodyMeasurements from './BodyMeasurements'

const BodyContent = ({ data, setData }) => {
    const [weight, setWeight] = useState('')

    const handleWeightChange = (e) => {
        setWeight(e.target.value)
    }

    const handleSubmitWeight = () => {
        const parsedWeight = parseInt(weight)
        setData([...data, { weight: parsedWeight }])
        setWeight('')
    }

    const handleClearData = () => {
        setData(data.slice(0, -1))
    }

    return (
        <>
            <Header size="small">
                {data.length
                    ? `You weighed in at ${data[data.length - 1].weight} lbs. today!`
                    : "Please enter today's weight"}
            </Header>
            <Grid>
                <Grid.Column width={16} columns={2} divided>
                    <Input
                        fluid
                        label={{ basic: true, content: 'lbs' }}
                        labelPosition="right"
                        placeholder="Enter weight..."
                        onChange={handleWeightChange}
                        value={weight}
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button fluid onClick={handleSubmitWeight}>
            Submit
                    </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button fluid onClick={handleClearData}>
            Undo Last Weight
                    </Button>
                </Grid.Column>
            </Grid>
        </>
    )
}
const GraphContent = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Bar dataKey="weight" fill="#2C698D" />
            </BarChart>
        </ResponsiveContainer>
    )
}
// const options = [
//     { key: 1, text: 'Lose 2 Pounds A Week', value: 1 },
//     { key: 2, text: 'Lose 1 Pounds A Week', value: 2 },
//     { key: 3, text: 'Maintain Weight', value: 3 },
//     { key: 4, text: 'Gain 1 Pound A Week', value: 4 },
//     { key: 5, text: 'Gain 2 Pounds A Week', value: 5 }
// ]
// const DropdownExampleSelection = () => (
//     <Dropdown
//         fluid
//         selection
//         options={options}
//         defaultValue = {3}
//     />
// )

const Body = () => {
    const [data, setData] = useState([])
    return (
        <div>
            <Header>Body</Header>
            <PageItem title="Today's Weight" content={<BodyContent data={data} setData={setData} />} />
            <PageItem title="Weights" content={<GraphContent data={data} />} />
            {/* <PageItem title="Choose your Goal!" content={<DropdownExampleSelection />} /> */}
            <PageItem title="Body Measurements" content={<BodyMeasurements />} />

        </div>
    )
}

export default Body
