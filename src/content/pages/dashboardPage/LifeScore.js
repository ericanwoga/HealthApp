import React from 'react';
import { Progress, Button, Segment, Header } from 'semantic-ui-react'

const LifeScore = () => {
  return (
    <Segment basic>
        <Header size='large' textAlign='left'>Life Score</Header>
        <Segment>
            <Progress value='72' total='100' progress='ratio' size='large' style={{marginBottom:'2rem'}}/>
            <Button size='large' fluid>See how to improve this score!</Button>
        </Segment>
    </Segment>
  );
};
  
export default LifeScore;