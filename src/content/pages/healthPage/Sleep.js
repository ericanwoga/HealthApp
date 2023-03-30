import React, {useState} from 'react'
import { Icon, Statistic, Grid, Progress, Modal, Header, Button, Input } from 'semantic-ui-react'
import PageItem from '../../PageItem'

const SleepContent = ({sleep}) => {
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
                <Modal
                    onClose={() => setShowSleepPopup(false)}
                    onOpen={() => setShowSleepPopup(true)}
                    open={showSleepPopup}
                    style={{width:'80%', borderRadius:'10px'}}
                    trigger={<Icon link circular name='plus' className='box-plus-sign'/>}
                    mountNode={document.getElementsByClassName('phoneContainer')[0]}
                >
                    <Header>
                        Sleep Tracker
                    </Header>
                    <Modal.Content>
                        <Header>What is your sleep Goal?</Header>
                        <Input label={{ basic: true, content: 'hours' }}
                            labelPosition='right'
                            placeholder='Enter sleep goal'/> 
                        <Header>How many hours did you sleep?</Header>
                        <Input label={{ basic: true, content: 'hours' }}
                            labelPosition='right'
                            placeholder='Enter hours slept'/> 
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' inverted onClick={() => setShowSleepPopup(false)}>
                        <Icon name='remove' /> Cancel
                        </Button>
                        <Button color='green' inverted onClick={() => setShowSleepPopup(false)}>
                        <Icon name='checkmark' /> Submit
                        </Button>
                    </Modal.Actions>
                </Modal>
                </Statistic.Label>
                </Statistic>
            </Grid.Column>
        </Grid>
    )
}

const Sleep = ({sleep, setSleepAmount}) => {
    return (
        <PageItem title="Sleep" content={<SleepContent sleep={sleep}/>}/>
    )
}

export default Sleep;