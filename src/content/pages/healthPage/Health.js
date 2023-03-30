import React from 'react';
import {useState } from 'react'
import { Header } from 'semantic-ui-react'
import  Sleep from './Sleep'
import  Water from './Water'
import Mood from './Mood'

const Health = () => {
  const [sleepAmount, setSleepAmount] = useState(25);
  const [waterAmount, setWaterAmount] = useState(50);


  return (
    <div>
        <Header>Health</Header>
        
        <Sleep sleep={sleepAmount} setSleepAmount={setSleepAmount}/>
        <Water water={waterAmount} setWaterAmount={setWaterAmount}/>
        <Mood mood={100}/>
        
    </div>
  );
};
  
export default Health;