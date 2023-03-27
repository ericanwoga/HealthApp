import React from 'react';
import { Header } from 'semantic-ui-react'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const value = 0.33;

const CircleBar = ({amount}) => {
  return (
    
    <CircularProgressbar value={amount} 
        maxValue={1} 
        text={`${value * 100}%`}
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
        
            // Text size
            textSize: '12px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `#2c698d`,
            textColor: '#2c698d',
            trailColor: '#d3d3d3',
            backgroundColor: '#bae838',
        })}
    />
    

)};
  
export default CircleBar;