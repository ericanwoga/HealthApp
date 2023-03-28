import React from 'react';
import { Progress, Button} from 'semantic-ui-react'
import PageItem from "../../PageItem"

const LifeScoreContent = () => {
  return (
    <div>
        <Progress value='72' total='100' progress='ratio' size='large' style={{marginBottom:'2rem'}}/>
        <Button size='large' fluid>See how to improve this score!</Button>
    </div>
  );
};

const LifeScore = () => {
    return (
        <PageItem title="Life Score" moreLabel="" content={<LifeScoreContent/>}/>
    )
}
  
export default LifeScore;