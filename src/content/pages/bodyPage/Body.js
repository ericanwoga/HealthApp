import React, { useState } from 'react'
import { Header, Input, Button, Divider } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import BodyMeasurements from './BodyMeasurements'
import PageModal from '../../PageModal'
import DateSelect from '../../DateSelect'
import DatedItems from '../../DatedItems'
import ViewAllCard from '../../ViewAllCard'
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

    return (
        <>
            <Header textAlign='left'>
                {weightDataCopy[moment().format('YYYY-MM-DD')]
                    ? moment().format('LT') + ' you weighed in at ' + weightDataCopy[moment().format('YYYY-MM-DD')]
                    : 'You have not yet tracked your weight!'}
            </Header>
            <Header textAlign='left'>Track a change in weight:</Header>
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
            <Divider/>
            <Button style={{ backgroundColor: '#BAE8E8' }} size='huge' fluid onClick={() => handleSubmitWeight()}>
                Save
            </Button>
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
    const [weightData, setWeightData] = useState(userData.bodyData.measurements.neck)
    const [reload, setReload] = useState(false)
    const unit = userData.preferences.unit
    const [date, setDate] = useState(new Date())
    const [openModal, setOpenModal] = useState(false)
    const [openBodyModal, setOpenBodyModal] = useState(false)

    const items = {
        'Wed May 05 2023 14:10:36 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 06 2023 17:20:25 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 07 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 09 2023 12:48:36 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 10 2023 15:20:25 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 10 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 10 2023 7:52:14 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 11 2023 15:20:25 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 11 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' },
        'Wed May 11 2023 7:52:14 GMT-0400 (Eastern Daylight Time)': { name: '150 lbs' }
    }
    const itemList = []
    Object.keys(items).map((key) => (
        itemList.push(
            <ViewAllCard key={key} date={key} name={items[key].name}/>
        )
    ))
    itemList.sort().reverse()

    const bodyItems = {
        'Wed May 05 2023 14:10:36 GMT-0400 (Eastern Daylight Time)': { name: '14" biceps' },
        'Wed May 06 2023 17:20:25 GMT-0400 (Eastern Daylight Time)': { name: 'anxious' },
        'Wed May 07 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: 'okay' },
        'Wed May 09 2023 12:48:36 GMT-0400 (Eastern Daylight Time)': { name: 'okay' },
        'Wed May 10 2023 15:20:25 GMT-0400 (Eastern Daylight Time)': { name: 'angry' },
        'Wed May 10 2023 11:48:14 GMT-0400 (Eastern Daylight Time)': { name: 'anxious' },
        'Wed May 10 2023 7:52:14 GMT-0400 (Eastern Daylight Time)': { name: 'happy' },
        'Wed May 11 2023 7:52:15 GMT-0400 (Eastern Daylight Time)': { name: '40" chest' },
        'Wed May 11 2023 7:52:14 GMT-0400 (Eastern Daylight Time)': { name: '32" waist' },
        'Wed May 11 2023 7:52:13 GMT-0400 (Eastern Daylight Time)': { name: '14" biceps' }
    }
    const bodyItemList = []
    Object.keys(bodyItems).map((key) => (
        bodyItemList.push(
            <ViewAllCard key={key} date={key} name={bodyItems[key].name}/>
        )
    ))
    bodyItemList.sort().reverse()

    return (
        <div>
            <Header size='large'>Body</Header>
            <PageItem title="Weight"
                moreLabel={'View All'}
                moreAction={() => setOpenBodyModal(true)}
                content={<>
                    <BodyContent setKeyboardVisible={setKeyboardVisible} unit={unit} setReload={setReload} reload={reload} weightData={userData.bodyData.weight} />
                    <Divider/>
                    <GraphContent weightData={userData.bodyData.weight} />
                </>} />
            <PageModal
                title={'Weight History'}
                open={openBodyModal}
                setOpen={() => setOpenBodyModal(true)}
                setClosed={() => setOpenBodyModal(false)}
                submitText={'Done'}
                submitAction={() => setOpenBodyModal(false)}
                content={<>
                    <DateSelect date={date} setDate={setDate}/>
                    <DatedItems date={date} itemList={itemList}/>
                </>}/>
            {/* <PageItem title="Choose your Goal!" content={<DropdownExampleSelection />} /> */}
            <PageItem title="Measurements"
                moreLabel={'View All'}
                moreAction={() => setOpenModal(true)}
                content={<>
                    <BodyMeasurements setKeyboardVisible={setKeyboardVisible} unit={unit} userData={userData} setUserData={setUserData}/>
                    <Divider/>
                    <GraphContent weightData={weightData}/>
                    <Button.Group size='huge' fluid>
                        <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' active={weightData === userData.bodyData.measurements.neck} onClick={() => setWeightData(userData.bodyData.measurements.neck)}>
                        Neck
                        </Button>
                        <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' active={weightData === userData.bodyData.measurements.waist} onClick={() => setWeightData(userData.bodyData.measurements.waist)}>
                        Waist
                        </Button>
                        <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' active={weightData === userData.bodyData.measurements.biceps} onClick={() => setWeightData(userData.bodyData.measurements.biceps)}>
                        Biceps
                        </Button>
                        <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' active={weightData === userData.bodyData.measurements.thighs} onClick={() => setWeightData(userData.bodyData.measurements.thighs)}>
                        Thighs
                        </Button>
                        <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' active={weightData === userData.bodyData.measurements.calves} onClick={() => setWeightData(userData.bodyData.measurements.calves)}>
                        Calves
                        </Button>
                        <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' active={weightData === userData.bodyData.measurements.chest} onClick={() => setWeightData(userData.bodyData.measurements.chest)}>
                        Chest
                        </Button>
                    </Button.Group>
                </>} />
            <PageModal
                title={'Body Measurement History'}
                open={openModal}
                setOpen={() => setOpenModal(true)}
                setClosed={() => setOpenModal(false)}
                submitText={'Done'}
                submitAction={() => setOpenModal(false)}
                content={<>
                    <DateSelect date={date} setDate={setDate}/>
                    <DatedItems date={date} itemList={bodyItemList}/>
                </>}/>

        </div>
    )
}

export default Body
