import React, { useState } from 'react'
import { Header, Input, Button, Grid } from 'semantic-ui-react'
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
    }

    const handleClearData = () => {
        setData([])
    }

    return (
        <>
            <Header size="small">
                {data.length
                    ? `You weighed in at ${data[data.length - 1].weight} lbs. today!`
                    : "Please enter today's weight"}
            </Header>
            <Grid>
                <Grid.Column width={10} columns={3} divided>
                    <Input
                        fluid
                        label={{ basic: true, content: 'lbs' }}
                        labelPosition="right"
                        placeholder="Enter weight..."
                        onChange={handleWeightChange}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button fluid onClick={handleSubmitWeight}>
            Submit
                    </Button>
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

const Body = () => {
    const [data, setData] = useState([])

    return (
        <div>
            <Header>Body</Header>
            <PageItem title="Today's Weight" content={<BodyContent data={data} setData={setData} />} />
            <PageItem title="Weights" content={<GraphContent data={data} />} />
        </div>
    )
}

export default Body
