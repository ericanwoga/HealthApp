import React, { useState } from 'react'
import { Header, Accordion, Icon } from 'semantic-ui-react'
import PageItem from '../../PageItem'

// Help heading page
const HelpPageContents = ({ userData }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Accordion as={Header} textAlign='left'>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={() => setActiveIndex(activeIndex === 0 ? -1 : 0)}
            >
                <Icon name='dropdown' />
        What is a this app?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <p>
          This is a help app that will teach you how to live a healthier life!
                </p>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={() => setActiveIndex(activeIndex === 1 ? -1 : 1)}
            >
                <Icon name='dropdown' />
        What can I see in the Dashboard?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
          You can see a wide variety of things from the steps you take in a day from the steps you take in a day to your recent activity!
                </p>
            </Accordion.Content>

            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={() => setActiveIndex(activeIndex === 2 ? -1 : 2)}
            >
                <Icon name='dropdown' />
        Will I be healthy soon?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <p>
          Only if you pay for the premium version of our app.
                </p>
            </Accordion.Content>
        </Accordion>
    )
}

const HelpPage = ({ userData }) => {
    return (
        <>
            <PageItem title={'FAQ'} content={<HelpPageContents userData={userData}/>}/>
        </>
    )
}

export default HelpPage
