import React, {useState} from 'react'
import  CircleBar from './CircleBar'
import 'semantic-ui-css/semantic.min.css'
import { Icon, Statistic, Grid } from 'semantic-ui-react'
import './Health.css'
import SleepPopup from './SleepPopup'
import PageItem from '../../PageItem'

const SleepContent = ({sleep}) => {
    const [showSleepPopup, setShowSleepPopup] = useState(false)
    
    const popup = () => {
        setShowSleepPopup(!showSleepPopup);
    }

    const showSleepSettings = () => {

    }

    return (
        <>
            {showSleepPopup && <SleepPopup />}
            <Grid>
                <Grid.Column width={8}>
                    <CircleBar amount={sleep}/>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' width={8}>
                    <Statistic>
                    <Statistic.Value>2/10</Statistic.Value>
                    <Statistic.Label>
                        <Icon link circular name='plus' className='box-plus-sign' onClick={popup}/>
                    </Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid>
        </>
    )
}

const Sleep = ({sleep, setSleepAmount}) => {
    return (
        <PageItem title="Sleep" content={<SleepContent sleep={sleep}/>}/>
    )
}

export default Sleep;