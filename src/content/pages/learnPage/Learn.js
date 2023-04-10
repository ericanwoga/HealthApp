import React, { useState, useEffect } from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
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
import meditationImage from './images/meditation.jpg'
import chickpeaImage from './images/chickpea.jpeg'
import yogaImage from './images/yoga.jpeg'

const ArticleButton = ({ onClick }) => {
    return (<Button fluid onClick={onClick}>Open Article</Button>)
}

const Article = ({ content }) => {
    return (
        <Header>
            {content}
        </Header>
    )
}

const HealthArticles = ({ setActiveModal, improveSleep, howMuchWater, meditationBenefits }) => {
    return (

        <Grid style={{ width: '150%', height: '100%' }} columns={3}>
            <Grid.Column>
                <PageCard
                    title={improveSleep}
                    imageSrc={sleepImage}
                    description={<ArticleButton onClick={() => setActiveModal(improveSleep)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={howMuchWater}
                    imageSrc={waterImage}
                    description={<ArticleButton onClick={() => setActiveModal(howMuchWater)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={meditationBenefits}
                    imageSrc={meditationImage}
                    description={<ArticleButton onClick={() => setActiveModal(meditationBenefits)}/>}
                />
            </Grid.Column>
        </Grid>
    )
}
const Recipes = ({ setActiveModal, buffChickSan, brocChedSoup, chickpeaStir }) => {
    return (
        <Grid style={{ width: '150%', height: '100%' }} columns={3}>
            <Grid.Column>
                <PageCard
                    title={buffChickSan}
                    imageSrc={buffChickImage}
                    description={<ArticleButton onClick={() => setActiveModal(buffChickSan)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={brocChedSoup}
                    imageSrc={dumplingImage}
                    description={<ArticleButton onClick={() => setActiveModal(brocChedSoup)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={chickpeaStir}
                    imageSrc={chickpeaImage}
                    description={<ArticleButton onClick={() => setActiveModal(chickpeaStir)}/>}
                />
            </Grid.Column>
        </Grid>
    )
}
const Workouts = ({ setActiveModal, boxingTraining, hiitWorkout, yoga }) => {
    return (
        <Grid style={{ width: '150%', height: '100%' }} columns={3}>
            <Grid.Column>
                <PageCard
                    title={boxingTraining}
                    imageSrc={boxingImage}
                    description={<ArticleButton onClick={() => setActiveModal(boxingTraining)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={hiitWorkout}
                    imageSrc={hiitImage}
                    description={<ArticleButton onClick={() => setActiveModal(hiitWorkout)}/>}
                />
            </Grid.Column>
            <Grid.Column>
                <PageCard
                    title={yoga}
                    imageSrc={yogaImage}
                    description={<ArticleButton onClick={() => setActiveModal(yoga)}/>}
                />
            </Grid.Column>
        </Grid>
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
    const meditationBenefits = 'The Benefits of Meditation for Stress Reduction'
    const chickpeaStir = 'Chickpea and Vegetable Stir-Fry'
    const yoga = 'Yoga for Beginners'

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
            <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles improveSleep={improveSleep} howMuchWater={howMuchWater} meditationBenefits = {meditationBenefits} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Recipes" moreLabel="View More" content={<Recipes brocChedSoup={brocChedSoup} buffChickSan={buffChickSan} chickpeaStir = {chickpeaStir} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Workouts" moreLabel="View More" content={<Workouts boxingTraining={boxingTraining} hiitWorkout={hiitWorkout} yoga = {yoga} setActiveModal={setActiveModal}/>}/>
        </div>
    )
}

export default Learn
