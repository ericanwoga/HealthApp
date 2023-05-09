import React, { useState, useEffect } from 'react'
import { Header, Button, Divider } from 'semantic-ui-react'
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
    const [unit, setUnit] = useState(userData.preferences.unit)

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
            <Header textAlign='left'>Measurement system and units:</Header>
            <Button.Group fluid size='huge'>
                <Button onClick={changeUnit} active={unit === 'standard'} value="standard">Standard</Button>
                <Button onClick={changeUnit} active={unit === 'metric'} value="metric">Metric</Button>
            </Button.Group>
            <Divider/>
            *Note: By selecting an option, the only things that change are data labels. Value changes are not supported at this time.
        </>
    )
}

const SettingPage = ({ userData, setUserData }) => {
    return (
        <>
            <PageItem title={'General'} content={<GeneralContent userData={userData}/>}/>
            <PageItem title={'Preferences'} content={<PreferenceContent setUserData={setUserData} userData={userData}/>}/>
        </>
    )
}

export default SettingPage
