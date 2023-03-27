import React from 'react'
import  CircleBar from './CircleBar'
import './Health.css'

function Water({water}) {
    return(
        <div className="healthtype-container">
            <h1>Water Intake</h1>
            <div className="rounded-box">
                <div className="circlebar-container">
                    <CircleBar amount={water}/>
                </div>
                <div>blahblah</div>
            </div>
        </div>
    )
}

export default Water;