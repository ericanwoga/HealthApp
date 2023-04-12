import React, { useState, useEffect } from 'react'
import { Header } from 'semantic-ui-react'
import Sleep from './Sleep'
import Water from './Water'
import Mood from './Mood'
import Breakfast from './Breakfast'

const Health = ({ setKeyboardVisible, userData, setUserData }) => {
    const [sleepAmount, setSleepAmount] = useState(parseInt((userData.healthData.sleep['2023-03-28'].sleepAmount))) // hours slept
    const [sleepGoal, setSleepGoal] = useState(parseInt((userData.healthData.sleep['2023-03-28'].sleepGoal))) // sleep goal
    const [waterAmount, setWaterAmount] = useState(parseInt((userData.healthData.water['2023-03-28'].waterAmount))) // water intake
    const [waterGoal, setWaterGoal] = useState(parseInt((userData.healthData.water['2023-03-28'].waterGoal))) // water goal
    const [bfList, setBfList] = useState(userData.healthData.meals['2023-03-28'].breakfast)

    const unit = userData.preferences.unit

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

    return (
        <div>
            <Header size='large'>Health</Header>
            <Sleep setKeyboardVisible={setKeyboardVisible} sleep={sleepAmount} setSleepAmount={setSleepAmount} sleepGoal={sleepGoal} setSleepGoal={setSleepGoal}/>
            <Water setKeyboardVisible={setKeyboardVisible} water={waterAmount} unit={unit} setWaterAmount={setWaterAmount} waterGoal={waterGoal} setWaterGoal={setWaterGoal}/>
            <Mood mood={100}/>
            <Breakfast setKeyboardVisible={setKeyboardVisible} bfList={bfList} setBfList={setBfList}/>
        </div>
    )
}

export default Health
