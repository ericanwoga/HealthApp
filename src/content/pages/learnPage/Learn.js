import React, { useState, useEffect } from 'react'
import { Button, Header } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageCard from '../../PageCard'
import PageModal from '../../PageModal'
import articleText from './articleText.json'
import waterImage from './images/water.jpeg'
import sleepImage from './images/sleep.jpeg'
import buffChickImage from './images/buffaloChicken.jpeg'
import dumplingImage from './images/dumplings.jpeg'
import boxingImage from './images/boxing.jpeg'
import hiitImage from './images/Hiit.webp'

const ArticleButton = ({ onClick }) => {
    return (<Button fluid onClick={onClick}>Open Article</Button>)
}

const Article = ({ name, content }) => {
    return (
        <Header>
            {content}
        </Header>
    )
}

const HealthArticles = ({ setActiveModal, improveSleep, howMuchWater }) => {
    return (
        <div>
            <PageCard
                title={improveSleep}
                imageSrc={sleepImage}
                description={<ArticleButton onClick={() => setActiveModal(improveSleep)}/>}
            />
            <PageCard
                title={howMuchWater}
                imageSrc={waterImage}
                description={<ArticleButton onClick={() => setActiveModal(howMuchWater)}/>}
            />
        </div>
    )
}
const Recipes = ({ setActiveModal, buffChickSan, brocChedSoup }) => {
    return (
        <div>
            <PageCard
                title={buffChickSan}
                imageSrc={buffChickImage}
                description={<ArticleButton onClick={() => setActiveModal(buffChickSan)}/>}
            />
            <PageCard
                title={brocChedSoup}
                imageSrc={dumplingImage}
                description={<ArticleButton onClick={() => setActiveModal(brocChedSoup)}/>}
            />
        </div>
    )
}
const Workouts = ({ setActiveModal, boxingTraining, hiitWorkout }) => {
    return (
        <div>
            <PageCard
                title={boxingTraining}
                imageSrc={boxingImage}
                description={<ArticleButton onClick={() => setActiveModal(boxingTraining)}/>}
            />
            <PageCard
                title={hiitWorkout}
                imageSrc={hiitImage}
                description={<ArticleButton onClick={() => setActiveModal(hiitWorkout)}/>}
            />
        </div>
    )
}

const Learn = () => {
    const [activeModal, setActiveModal] = useState('')
    const [modalContent, setModalContent] = useState('')

    const improveSleep = 'How to improve your sleep'
    const howMuchWater = 'How much Water should you drink'
    const buffChickSan = 'Buffalo Chicken Sandwich'
    const brocChedSoup = 'Broccoli Cheddar Soup Dumplings'
    const boxingTraining = 'Boxing Training Workout'
    const hiitWorkout = '20 Minute HIIT Workout'

    useEffect(() => {
        setModalContent(
            (activeModal !== '' &&
            <PageModal
                content={<Article name={activeModal} content={articleText[activeModal]}/>}
                title={activeModal}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            ''
        )
    }, [activeModal])

    return (
        <div>
            <Header size='large'>Learn</Header>
            {modalContent}
            <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles improveSleep={improveSleep} howMuchWater={howMuchWater} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Recipes" moreLabel="View More" content={<Recipes brocChedSoup={brocChedSoup} buffChickSan={buffChickSan} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Workouts" moreLabel="View More" content={<Workouts boxingTraining={boxingTraining} hiitWorkout={hiitWorkout} setActiveModal={setActiveModal}/>}/>
        </div>
    )
}

export default Learn
