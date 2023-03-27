import React from 'react'
import  CircleBar from './CircleBar'
import './Health.css'

function Mood({title}) {
    return(
        <div className="healthtype-container">
            <h1>{title}</h1>
            <div className="rounded-box">
                <div className="circlebar-container">
                    <CircleBar />
                </div>
                <div>blahblah</div>
            </div>
        </div>
    )
}

export default Mood;