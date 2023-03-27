import React from 'react';
import {useState } from 'react'
import { Header } from 'semantic-ui-react'
import  Sleep from './Sleep.js'
import  Water from './Water.js'
import './Health.css'


const Health = () => {
  const [sleepAmount, setSleepAmount] = useState(0.30);
  const [waterAmount, setWaterAmount] = useState(0.40);


  return (
    <div>
        <Header>Health</Header>
        
        <Sleep sleep={sleepAmount}/>
        <Water water={waterAmount}/>
        
    </div>
  );
};
  
export default Health;