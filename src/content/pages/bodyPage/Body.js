import React, { useState, useEffect } from 'react'
import { Header, Input, Button, Grid } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import BodyMeasurements from './BodyMeasurements'
import moment from 'moment'

const BodyContent = ({ setKeyboardVisible, unit, setReload, reload, weightData, setWeightData }) => {
    const [weight, setWeight] = useState('')
    const weightDataCopy = weightData

    const handleSubmitWeight = () => {
        const parsedWeight = parseInt(weight)
        setKeyboardVisible('off')
        weightDataCopy[moment().format('YYYY-MM-DD')] = parsedWeight
        setWeightData(weightDataCopy)
        setWeight('')
        setReload(!reload)
    }

    const handleClearData = () => {
        delete weightDataCopy[moment().format('YYYY-MM-DD')]
        setKeyboardVisible('off')
        setWeightData(weightDataCopy)
        setReload(!reload)
    }

    return (
        <>
            <Header size="medium">
                {weightDataCopy[moment().format('YYYY-MM-DD')]
                    ? `You weighed in at ${weightDataCopy[moment().format('YYYY-MM-DD')]} ${unit === 'metric' ? 'kg' : 'lbs.'} today!`
                    : "Please enter today's weight"}
            </Header>
            <Grid>
                <Grid.Column width={16} columns={2} divided>
                    <Input
                        size='large'
                        fluid
                        label={{ basic: true, content: unit === 'metric' ? 'kg' : 'lbs' }}
                        labelPosition="right"
                        placeholder="Enter weight..."
                        onChange={(e, result) => setWeight(result.value)}
                        onClick={() => setKeyboardVisible('onNoModal')}
                        value={weight}
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button size='huge' fluid onClick={() => handleSubmitWeight()}>
                        Submit
                    </Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button size='huge' fluid onClick={() => handleClearData()}>
                        {'Undo Last'}
                    </Button>
                </Grid.Column>
            </Grid>
        </>
    )
}

const GraphContent = ({ weightData }) => {
    const timeFrames = ['1 Week', '3 Months', '6 Months', '1 Year']
    const [timeFrame] = useState(timeFrames[0])

    function getWeights () {
        const retVal = []
        let i, j
        let currDate, currMonth, weekCalories, monthCalories, daysInMonth
        switch (timeFrame) {
        case '1 Week':
            for (i = 6; i >= 0; i--) {
                currDate = moment().subtract(i, 'days')
                if (weightData[currDate.format('YYYY-MM-DD')] !== 0) {
                    retVal.push({
                        name: currDate.format('dddd').slice(0, 3),
                        weight: weightData[currDate.format('YYYY-MM-DD')]
                    })
                }
            }
            break
        case '1 Month':
            for (i = 31; i >= 0; i--) {
                currDate = moment().subtract(i, 'days')
                if (weightData[currDate.format('YYYY-MM-DD')] !== 0) {
                    retVal.push({
                        name: currDate.format('MM-DD'),
                        weight: weightData[currDate.format('YYYY-MM-DD')]
                    })
                }
            }
            break
        case '3 Months':
            for (i = 12; i >= 0; i--) {
                weekCalories = 0
                for (j = 6; j >= 0; j--) {
                    currDate = moment().subtract(7 * i + j, 'days')
                    weekCalories += parseInt(weightData[currDate.format('YYYY-MM-DD')]) || 0
                }
                weekCalories /= 7
                if (weekCalories !== 0) {
                    retVal.push({
                        name: currDate.subtract(7, 'days').format('MM-DD'),
                        weight: weekCalories
                    })
                }
            }
            break
        case '6 Months':
            currDate = moment().subtract(6, 'months')
            for (i = 6; i >= 0; i--) {
                currMonth = currDate.format('MMM')
                monthCalories = 0
                daysInMonth = 0
                while (currDate.format('MMM') === currMonth) {
                    monthCalories += parseInt(weightData[currDate.format('YYYY-MM-DD')]) || 0
                    daysInMonth += 1
                    currDate.add(1, 'days')
                }
                if (monthCalories / daysInMonth !== 0) {
                    retVal.push({
                        name: currMonth,
                        weight: monthCalories / daysInMonth || 0
                    })
                }
            }
            break
        case '1 Year':
            currDate = moment().subtract(1, 'year')
            for (i = 12; i >= 0; i--) {
                currMonth = currDate.format('MMM')
                monthCalories = 0
                daysInMonth = 0
                while (currDate.format('MMM') === currMonth) {
                    monthCalories += parseInt(weightData[currDate.format('YYYY-MM-DD')]) || 0
                    daysInMonth += 1
                    currDate.add(1, 'days')
                }
                if (monthCalories / daysInMonth !== 0) {
                    retVal.push({
                        name: currMonth,
                        weight: monthCalories / daysInMonth || 0
                    })
                }
            }
            break
        default:
            break
        }
        return retVal
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={getWeights()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis fontSize={18} dataKey="name" />
                <YAxis fontSize={18}/>
                <Line dataKey="weight" fill="#2C698D" />
            </LineChart>
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

const Body = ({ setKeyboardVisible, userData, setUserData }) => {
    const [weightData, setWeightData] = useState(userData.bodyData.weight)
    const [reload, setReload] = useState(false)
    const unit = userData.preferences.unit

    useEffect(() => {
        userData.bodyData.weight = weightData
        setUserData(userData)
    }, [weightData, reload])

    return (
        <div>
            <Header size='large'>Body</Header>
            <PageItem title="Today's Weight" content={<BodyContent setKeyboardVisible={setKeyboardVisible} unit={unit} setReload={setReload} reload={reload} weightData={weightData} setWeightData={setWeightData} />} />
            <PageItem title="Weights" content={<GraphContent setReload={setReload} reload={reload} weightData={weightData} />} />
            {/* <PageItem title="Choose your Goal!" content={<DropdownExampleSelection />} /> */}
            <PageItem title="Measurements" content={<BodyMeasurements setKeyboardVisible={setKeyboardVisible} unit={unit} userData={userData} setUserData={setUserData}/>} />

        </div>
    )
}

export default Body
