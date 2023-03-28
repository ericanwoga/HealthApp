import React from 'react';
import moment from 'moment'
import { Button } from 'semantic-ui-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import PageItem from '../../PageItem';

const StepCountContent = ({steps}) => {

    function getOneWeekSteps(steps) {
        console.log(steps)
        var retVal = []
        
        for (var i = 6; i >= 0; i--) {
            var currDate = moment().subtract(i, 'days')
            retVal.push({ 
                "name": currDate.format('dddd').slice(0, 3), 
                "steps": steps[currDate.format('YYYY-MM-DD')]
            })
        }

        return retVal
    }

    return (
        <div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={getOneWeekSteps(steps)} margin={0}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Bar dataKey="steps" fill="#2C698D" />
                </BarChart>
            </ResponsiveContainer>
            <Button.Group fluid>
                <Button active>1 Week</Button>
                <Button>1 Month</Button>
                <Button>3 Month</Button>
                <Button>6 Month</Button>
                <Button>1 Year</Button>
            </Button.Group>
        </div>
    );
};

const StepCount = ({steps}) => {
    return (
        <PageItem title="Step Count" moreLabel="Edit Chart" content={<StepCountContent steps={steps}/>}/>
    )
}
  
export default StepCount;