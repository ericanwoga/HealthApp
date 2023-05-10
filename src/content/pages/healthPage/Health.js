import React from 'react'
import { Header } from 'semantic-ui-react'
import Sleep from './Sleep'
import Water from './Water'
import Mood from './Mood'
import Calories from './Calories'

const Health = ({ setKeyboardVisible, userData, setUserData }) => {
    const unit = userData.preferences.unit

    return (
        <div>
            <Header size='large'>Health</Header>
            <Calories setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>
            <Water setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData} unit={unit}/>
            <Sleep setKeyboardVisible={setKeyboardVisible} userData={userData} setUserData={setUserData}/>
            <Mood mood={100}/>
        </div>
    )
}

export default Health
