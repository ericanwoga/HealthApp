import React, { useState } from 'react'
import { Header } from 'semantic-ui-react'
import Sleep from './Sleep'
import Water from './Water'
import Mood from './Mood'

const Health = () => {
    const [sleepAmount, setSleepAmount] = useState(7) // hours slept
    const [sleepGoal, setSleepGoal] = useState(9) // sleep goal
    const [waterAmount, setWaterAmount] = useState(50)

    return (
        <div>
            <Header size='large'>Health</Header>
            <Sleep sleep={sleepAmount} setSleepAmount={setSleepAmount} sleepGoal={sleepGoal} setSleepGoal={setSleepGoal}/>
            <Water water={waterAmount} setWaterAmount={setWaterAmount}/>
            <Mood mood={100}/>

        </div>
    )
}

export default Health
