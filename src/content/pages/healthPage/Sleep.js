import React, { useState } from 'react'
import { Statistic, Grid, Progress, Icon, Header, Input } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageModal from '../../PageModal'

const ModalContent = () => {
    return (
        <>
            <Header>What is your sleep Goal?</Header>
            <Input fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                placeholder='Enter sleep goal'/>
            <Header>How many hours did you sleep?</Header>
            <Input fluid label={{ basic: true, content: 'hours' }}
                labelPosition='right'
                placeholder='Enter hours slept'/>
        </>
    )
}

const SleepContent = ({ sleep }) => {
    const [showSleepPopup, setShowSleepPopup] = useState(false)

    return (
        <Grid>
            <Grid.Column verticalAlign='middle' width={8}>
                <Progress percent={sleep} progress/>
            </Grid.Column>
            <Grid.Column verticalAlign='middle' width={8}>
                <Statistic>
                    <Statistic.Value>{sleep / 10}/10</Statistic.Value>
                    <Statistic.Label>
                        <Icon onClick={() => setShowSleepPopup(true)} link circular name='plus' className='box-plus-sign'/>
                        <PageModal
                            title={'Sleep Tracker'}
                            open={showSleepPopup}
                            setOpen={() => setShowSleepPopup(true)}
                            setClosed={() => setShowSleepPopup(false)}
                            submitAction={() => setShowSleepPopup(false)}
                            cancelAction={() => setShowSleepPopup(false)}
                            content={<ModalContent/>}
                            submitText={'Submit'}
                            cancelText={'Cancel'}
                        />
                    </Statistic.Label>
                </Statistic>
            </Grid.Column>
        </Grid>
    )
}

const Sleep = ({ sleep, setSleepAmount }) => {
    return (
        <PageItem title="Sleep" content={<SleepContent sleep={sleep}/>}/>
    )
}

export default Sleep
