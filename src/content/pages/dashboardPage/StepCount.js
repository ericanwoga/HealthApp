import React, { useState } from 'react'
import moment from 'moment'
import { Button, Divider } from 'semantic-ui-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import PageItem from '../../PageItem'

const StepCountContent = ({ steps }) => {
    // Removed "1 Month"
    const timeFrames = ['1 Week', '3 Months', '6 Months', '1 Year']
    const [timeFrame, setTimeFrame] = useState(timeFrames[0])
    const chartButtons = []

    timeFrames.forEach((time) => {
        chartButtons.push(
            <Button style={{ paddingLeft: '0px', paddingRight: '0px' }} size='huge' key={time} active={timeFrame === time} onClick={() => setTimeFrame(time)}>
                {time}
            </Button>
        )
    })

    function getSteps () {
        const retVal = []
        let i, j
        let currDate, currMonth, weekSteps, monthSteps, daysInMonth
        switch (timeFrame) {
        case '1 Week':
            for (i = 6; i >= 0; i--) {
                currDate = moment().subtract(i, 'days')
                retVal.push({
                    name: currDate.format('dddd').slice(0, 3),
                    steps: steps[currDate.format('YYYY-MM-DD')] || 0
                })
            }
            break
        case '1 Month':
            for (i = 31; i >= 0; i--) {
                currDate = moment().subtract(i, 'days')
                retVal.push({
                    name: currDate.format('MM-DD'),
                    steps: steps[currDate.format('YYYY-MM-DD')] || 0
                })
            }
            break
        case '3 Months':
            for (i = 12; i >= 0; i--) {
                weekSteps = 0
                for (j = 6; j >= 0; j--) {
                    currDate = moment().subtract(7 * i + j, 'days')
                    weekSteps += parseInt(steps[currDate.format('YYYY-MM-DD')]) || 0
                }
                weekSteps /= 7
                retVal.push({
                    name: currDate.subtract(7, 'days').format('MM-DD'),
                    steps: weekSteps || 0
                })
            }
            break
        case '6 Months':
            currDate = moment().subtract(6, 'months')
            for (i = 6; i >= 0; i--) {
                currMonth = currDate.format('MMM')
                monthSteps = 0
                daysInMonth = 0
                while (currDate.format('MMM') === currMonth) {
                    monthSteps += parseInt(steps[currDate.format('YYYY-MM-DD')]) || 0
                    daysInMonth += 1
                    currDate.add(1, 'days')
                }
                retVal.push({
                    name: currMonth,
                    steps: monthSteps / daysInMonth || 0
                })
            }
            break
        case '1 Year':
            currDate = moment().subtract(1, 'year')
            for (i = 12; i >= 0; i--) {
                currMonth = currDate.format('MMM')
                monthSteps = 0
                daysInMonth = 0
                while (currDate.format('MMM') === currMonth) {
                    monthSteps += parseInt(steps[currDate.format('YYYY-MM-DD')]) || 0
                    daysInMonth += 1
                    currDate.add(1, 'days')
                }
                retVal.push({
                    name: currMonth,
                    steps: monthSteps / daysInMonth || 0
                })
            }
            break
        default:
            break
        }
        return retVal
    }

    return (
        <div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={getSteps()} margin={0}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis fontSize={18} dataKey="name"/>
                    <YAxis fontSize={18}/>
                    <Bar dataKey="steps" fill="#2C698D" />
                </BarChart>
            </ResponsiveContainer>
            <Divider/>
            <Button.Group fluid buttons={chartButtons}/>
        </div>
    )
}

const StepCount = ({ steps }) => {
    return (
        <PageItem title="Step Count" content={<StepCountContent steps={steps}/>}/>
    )
}

export default StepCount
