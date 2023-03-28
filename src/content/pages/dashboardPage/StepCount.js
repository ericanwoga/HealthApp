import React, { useState } from 'react';
import moment from 'moment'
import { Button } from 'semantic-ui-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import PageItem from '../../PageItem';

const StepCountContent = ({steps}) => {

    var timeFrames = ["1 Week", "1 Month", "3 Month", "6 Month", "1 Year"]
    const [timeFrame, setTimeFrame] = useState(timeFrames[0])
    var chartButtons = []

    timeFrames.forEach( (time) => {
        chartButtons.push(
            <Button key={time} active={timeFrame == time} onClick={() => setTimeFrame(time)}>
                {time}
            </Button>
        )
    })
    
    function getSteps() {
        var retVal = []
        switch (timeFrame) {
            case "1 Week": 
                for (var i = 6; i >= 0; i--) {
                    var currDate = moment().subtract(i, 'days')
                    retVal.push({ 
                        "name": currDate.format('dddd').slice(0, 3), 
                        "steps": steps[currDate.format('YYYY-MM-DD')] || 0
                    })
                }
                break;
            case "1 Month":
                for (var i = 31; i >= 0; i--) {
                    var currDate = moment().subtract(i, 'days')
                    retVal.push({
                        "name": currDate.format('MM-DD'),
                        "steps": steps[currDate.format('YYYY-MM-DD')] || 0
                    })
                }
                break;
            case "3 Month":
                for (var i = 12 ; i >= 0; i--) {
                    var weekSteps = 0
                    for (var j = 6 ; j >= 0; j--) {
                        var currDate = moment().subtract(7*i+j, 'days')
                        weekSteps += parseInt(steps[currDate.format('YYYY-MM-DD')]) || 0
                    }
                    weekSteps /= 7
                    retVal.push({
                        "name": currDate.subtract(7, 'days').format('MM-DD'),
                        "steps": weekSteps || 0
                    })
                }
                break;
            case "6 Month":
                var currDate = moment().subtract(6, 'months')
                for (var i = 6 ; i >= 0; i--) {
                    var currMonth = currDate.format('MMM')
                    var monthSteps = 0
                    var daysInMonth = 0
                    while (currDate.format('MMM') == currMonth) {
                        monthSteps += parseInt(steps[currDate.format('YYYY-MM-DD')]) || 0
                        daysInMonth += 1
                        currDate.add(1, 'days')
                    }
                    retVal.push({
                        "name": currMonth,
                        "steps": monthSteps/daysInMonth || 0
                    })
                }
                break;
            case "1 Year":
                var currDate = moment().subtract(1, 'year')
                for (var i = 12 ; i >= 0; i--) {
                    var currMonth = currDate.format('MMM')
                    var monthSteps = 0
                    var daysInMonth = 0
                    while (currDate.format('MMM') == currMonth) {
                        monthSteps += parseInt(steps[currDate.format('YYYY-MM-DD')]) || 0
                        daysInMonth += 1
                        currDate.add(1, 'days')
                    }
                    retVal.push({
                        "name": currMonth,
                        "steps": monthSteps/daysInMonth || 0
                    })
                }
                break;
        }
        console.log(retVal)
        return retVal
    }

    return (
        <div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={getSteps()} margin={0}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Bar dataKey="steps" fill="#2C698D" />
                </BarChart>
            </ResponsiveContainer>
            <Button.Group fluid buttons={chartButtons}/>
        </div>
    );
};

const StepCount = ({steps}) => {
    return (
        <PageItem title="Step Count" moreLabel="Edit Chart" content={<StepCountContent steps={steps}/>}/>
    )
}
  
export default StepCount;