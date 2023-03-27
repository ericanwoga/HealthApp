import React from 'react'
import  CircleBar from './CircleBar'
import './Health.css'

function Sleep({sleep}) {
    return(
        <div className="healthtype-container">
            <h1>Sleep</h1>
            <div className="rounded-box">
                <div className="circlebar-container">
                    <CircleBar amount={sleep} />
                </div>
                <div>blahblah</div>
            </div>
        </div>
    )
}

export default Sleep;