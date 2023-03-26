import React from 'react';
import { Header } from 'semantic-ui-react'
import  HealthContainer from './HealthContainer.js'
import './Health.css'

const healthTypes = ["Sleep", "Water Intake", "Mood"] 

const Health = () => {
  return (
    <div>
        <Header>Health</Header>
        
        {healthTypes.map( type => (
          <HealthContainer key={type.id} title={type} />
        ))}
    </div>
  );
};
  
export default Health;