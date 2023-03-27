import React from 'react'
import  CircleBar from './CircleBar'
import { Icon } from 'semantic-ui-react'
import './Health.css'

function Sleep({sleep, setSleepAmount}) {

    //const showSleepSettings = () => {

    //}

    return(
        <div className="healthtype-container">
            <h1>Sleep</h1>
            <div className="rounded-box">
                <div className="circlebar-container">
                    <CircleBar amount={sleep} />
                </div>
                <div>blahblah</div>
                
                <Icon link circular name='plus' />
            </div>
        </div>
    )
}

export default Sleep;