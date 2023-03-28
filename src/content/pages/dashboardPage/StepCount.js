import React from 'react';
import { Button, Segment, Header } from 'semantic-ui-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Sun',
        steps: 4000,
    },
    {
        name: 'Mon',
        steps: 3000,
    },
    {
        name: 'Tue',
        steps: 2000,
    },
    {
        name: 'Wed',
        steps: 2750,
    },
    {
        name: 'Thu',
        steps: 1890,
    },
    {
        name: 'Fri',
        steps: 2390,
    },
    {
        name: 'Sat',
        steps: 3490,
    },
  ];

const StepCount = () => {
  return (
    <Segment basic>
        <Header size='large' textAlign='left'>Step Count</Header>
        <Segment>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} margin={0}>
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
        </Segment>
    </Segment>
  );
};
  
export default StepCount;