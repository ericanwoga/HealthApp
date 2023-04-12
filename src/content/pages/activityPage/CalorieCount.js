import React, { useState } from 'react'
import moment from 'moment'
import { Button } from 'semantic-ui-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import PageItem from '../../PageItem'

const CalorieCountContent = ({ calories }) => {
    // Removed "1 Month"
    const timeFrames = ['1 Week', '3 Months', '6 Months', '1 Year']
    const [timeFrame, setTimeFrame] = useState(timeFrames[0])
    const chartButtons = []

    timeFrames.forEach((time) => {
        chartButtons.push(
            <Button size='large' key={time} active={timeFrame === time} onClick={() => setTimeFrame(time)}>
                {time}
            </Button>
        )
    })

    function getCalories () {
        const retVal = []
        let i, j
        let currDate, currMonth, weekCalories, monthCalories, daysInMonth
        switch (timeFrame) {
        case '1 Week':
            for (i = 6; i >= 0; i--) {
                currDate = moment().subtract(i, 'days')
                retVal.push({
                    name: currDate.format('dddd').slice(0, 3),
                    calories: calories[currDate.format('YYYY-MM-DD')] || 0
                })
            }
            break
        case '1 Month':
            for (i = 31; i >= 0; i--) {
                currDate = moment().subtract(i, 'days')
                retVal.push({
                    name: currDate.format('MM-DD'),
                    calories: calories[currDate.format('YYYY-MM-DD')] || 0
                })
            }
            break
        case '3 Months':
            for (i = 12; i >= 0; i--) {
                weekCalories = 0
                for (j = 6; j >= 0; j--) {
                    currDate = moment().subtract(7 * i + j, 'days')
                    weekCalories += parseInt(calories[currDate.format('YYYY-MM-DD')]) || 0
                }
                weekCalories /= 7
                retVal.push({
                    name: currDate.subtract(7, 'days').format('MM-DD'),
                    calories: weekCalories || 0
                })
            }
            break
        case '6 Months':
            currDate = moment().subtract(6, 'months')
            for (i = 6; i >= 0; i--) {
                currMonth = currDate.format('MMM')
                monthCalories = 0
                daysInMonth = 0
                while (currDate.format('MMM') === currMonth) {
                    monthCalories += parseInt(calories[currDate.format('YYYY-MM-DD')]) || 0
                    daysInMonth += 1
                    currDate.add(1, 'days')
                }
                retVal.push({
                    name: currMonth,
                    calories: monthCalories / daysInMonth || 0
                })
            }
            break
        case '1 Year':
            currDate = moment().subtract(1, 'year')
            for (i = 12; i >= 0; i--) {
                currMonth = currDate.format('MMM')
                monthCalories = 0
                daysInMonth = 0
                while (currDate.format('MMM') === currMonth) {
                    monthCalories += parseInt(calories[currDate.format('YYYY-MM-DD')]) || 0
                    daysInMonth += 1
                    currDate.add(1, 'days')
                }
                retVal.push({
                    name: currMonth,
                    calories: monthCalories / daysInMonth || 0
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
                <BarChart data={getCalories()} margin={0}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis fontSize={15} dataKey="name"/>
                    <YAxis fontSize={15}/>
                    <Bar dataKey="calories" fill="#2C698D" />
                </BarChart>
            </ResponsiveContainer>
            <Button.Group fluid buttons={chartButtons}/>
        </div>
    )
}

const CalorieCount = ({ calories }) => {
    return (
        <PageItem title="Calories Burned" content={<CalorieCountContent calories={calories}/>}/>
    )
}

export default CalorieCount
