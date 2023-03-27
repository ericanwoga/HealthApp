import React from 'react'
import { Input } from 'semantic-ui-react'
import './Health.css'

function SleepPopup() {
    return(
        <div className='popup-container'>
            <div className='popup-box'>
                <h1>What is your sleep Goal?</h1>
                <span><Input /> hours</span>
                <h1>How many hours did you sleep?</h1>
                <span><Input /> hours</span>
            </div>
        </div>
    )
}

export default SleepPopup;