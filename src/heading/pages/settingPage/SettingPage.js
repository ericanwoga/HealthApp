import React, { useState, useEffect } from 'react'
import { Header, Button } from 'semantic-ui-react'
import PageItem from '../../PageItem'

// Achievements heading page
const GeneralContent = ({ userData }) => {
    return (
        <>
            <Header textAlign='left'>No settings to configure.</Header>
        </>
    )
}

const PreferenceContent = ({ userData, setUserData }) => {
    const [unit, setUnit] = useState(userData.preferences.waterUnit)

    const changeUnit = (e) => {
        const val = e.target.value
        if (val === 'metric') {
            setUnit('metric')
        } else {
            setUnit('standard')
        }
    }

    useEffect(() => {
        userData.preferences.unit = unit
        setUserData(userData)
    }, [unit])

    return (
        <>
            <Header textAlign='left'>Preferred measurement system:</Header>
            <Button.Group fluid>
                <Button onClick={changeUnit} active={unit === 'standard'} value="standard">Standard</Button>
                <Button onClick={changeUnit} active={unit === 'metric'} value="metric">Metric</Button>
            </Button.Group>
        </>
    )
}

const SettingPage = ({ userData, setUserData }) => {
    return (
        <>
            <PageItem title={'General'} content={<GeneralContent userData={userData}/>}/>
            <PageItem title={'General'} content={<PreferenceContent setUserData={setUserData} userData={userData}/>}/>
        </>
    )
}

export default SettingPage
