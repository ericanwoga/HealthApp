import React, { useState } from 'react'
import { Header } from 'semantic-ui-react'
import Sleep from './Sleep'
import Water from './Water'
import Mood from './Mood'
import Breakfast from './Breakfast'

const Health = ({ setKeyboardVisible, userData, setUserData }) => {
    const unit = userData.preferences.unit
    const [mealList, setMealList] = useState(userData.healthData.meals['2023-03-28'])

    return (
        <div>
            <Header size='large'>Health</Header>
            <Sleep setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>
            <Water setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData} unit={unit}/>
            <Mood mood={100}/>
            {mealList ? <Breakfast setKeyboardVisible={setKeyboardVisible} mealList={mealList} setMealList={setMealList}/> : '' }
        </div>
    )
}

export default Health
