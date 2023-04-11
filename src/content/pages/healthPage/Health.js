import React, { useState, useEffect } from 'react'
import { Header } from 'semantic-ui-react'
import Sleep from './Sleep'
import Water from './Water'
import Mood from './Mood'
import Breakfast from './Breakfast'

const Health = ({ userData, setUserData }) => {
    const [sleepAmount, setSleepAmount] = useState(parseInt((userData.healthData.sleep['2023-03-28'].sleepAmount))) // hours slept
    const [sleepGoal, setSleepGoal] = useState(parseInt((userData.healthData.sleep['2023-03-28'].sleepGoal))) // sleep goal
    const [waterAmount, setWaterAmount] = useState(parseInt((userData.healthData.water['2023-03-28'].waterAmount))) // water intake
    const [waterGoal, setWaterGoal] = useState(parseInt((userData.healthData.water['2023-03-28'].waterGoal))) // water goal
    const [waterUnit, setWaterUnit] = useState(userData.healthData.water['2023-03-28'].waterUnits) // water unit of measure
    const [bfList, setBfList] = useState(userData.healthData.meals['2023-03-28'].breakfast)

    useEffect(() => {
        // each time the variables change, update the json file

        userData.healthData.sleep['2023-03-28'].sleepAmount = sleepAmount // re-assign the new sleep amount in the object
        setUserData(userData)
    }, [sleepAmount])

    useEffect(() => {
        // each time the variables change, update the json file

        userData.healthData.sleep['2023-03-28'].sleepGoal = sleepGoal// re-assign the new sleep goal in the object
        setUserData(userData)
    }, [sleepGoal])

    useEffect(() => {
        // each time the variables change, update the json file

        userData.healthData.water['2023-03-28'].waterAmount = waterAmount // re-assign the new water amount in the object
        setUserData(userData)
    }, [waterAmount])

    useEffect(() => {
        // each time the variables change, update the json file

        userData.healthData.water['2023-03-28'].waterGoal = waterGoal // re-assign the new water goal in the object
        setUserData(userData)
    }, [waterGoal])

    useEffect(() => {
        // each time the variables change, update the json file

        userData.healthData.water['2023-03-28'].waterUnit = waterUnit // re-assign the units in the object
        setUserData(userData)
    }, [waterUnit])

    return (
        <div>
            <Header size='large'>Health</Header>
            <Sleep sleep={sleepAmount} setSleepAmount={setSleepAmount} sleepGoal={sleepGoal} setSleepGoal={setSleepGoal}/>
            <Water water={waterAmount} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal} waterUnit={waterUnit} setWaterUnit={setWaterUnit}/>
            <Mood mood={100}/>
            <Breakfast bfList={bfList} setBfList={setBfList}/>
        </div>
    )
}

export default Health
