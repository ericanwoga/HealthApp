import React, { useState } from 'react'
import { Header, Input, Button, Grid, Dropdown } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

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
            Clear
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
const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 }
]
const DropdownExampleSelection = () => (
    <Dropdown
        placeholder='Choose your goal!'
        fluid
        selection
        options={options}
    />
)
const Body = () => {
    const [data, setData] = useState([])

    return (
        <div>
            <Header>Body</Header>
            <PageItem title="Today's Weight" content={<BodyContent data={data} setData={setData} />} />
            <PageItem title="Weights" content={<GraphContent data={data} />} />
            <PageItem title="Calories" content={<DropdownExampleSelection />} />
        </div>
    )
}

export default Body
