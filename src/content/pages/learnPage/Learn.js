import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageCard from '../../PageCard'
import PageModal from '../../PageModal'

const ArticleButton = ({ onClick }) => {
    return (<Button fluid onClick={onClick}>Open Article</Button>)
}

const Article = ({ name, articleContent }) => {
    return (
        <>
            {name}
            <br></br>
            <br></br>
            {articleContent}
        </>
    )
}

const HealthArticles = ({ setActiveModal, improveSleep, howMuchWater }) => {
    return (
        <div>
            <PageCard
                title="How to improve your sleep"
                imageSrc="./sleep.jpeg"
                description={<ArticleButton onClick={() => setActiveModal(improveSleep)}/>}
            />
            <PageCard
                title="How much water should you drink?"
                imageSrc="./water.jpeg"
                description={<ArticleButton onClick={() => setActiveModal(howMuchWater)}/>}
            />
        </div>
    )
}
const Recipes = ({ setActiveModal, buffChickSan, brocChedSoup }) => {
    return (
        <div>
            <PageCard
                title="Buffalo Chicken Sandwich"
                imageSrc="./buffaloChicken.jpeg"
                description={<ArticleButton onClick={() => setActiveModal(buffChickSan)}/>}
            />
            <PageCard
                title="Brocolli Cheddar Soup Dumplings"
                imageSrc="./dumplings.jpeg"
                description={<ArticleButton onClick={() => setActiveModal(brocChedSoup)}/>}
            />
        </div>
    )
}
const Workouts = ({ setActiveModal, buffChickSan, brocChedSoup }) => {
    return (
        <div>
            <PageCard
                title="Boxing training"
                imageSrc="/boxing.jpeg"
                description={<ArticleButton onClick={() => setActiveModal(buffChickSan)}/>}
            />
            <PageCard
                title="20 minute Hitt Workout"
                imageSrc="./Hiit.webp"
                description={<ArticleButton onClick={() => setActiveModal(brocChedSoup)}/>}
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
    const sleepArticle = 'gfjnkg'

    useEffect(() => {
        setModalContent(
            (activeModal === improveSleep &&
            <PageModal
                content={<Article name={improveSleep} articleContent = {sleepArticle}/>}
                title={activeModal}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            (activeModal === howMuchWater &&
            <PageModal
                content={<Article name={howMuchWater}/>}
                title={howMuchWater}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            (activeModal === buffChickSan &&
            <PageModal
                content={<Article name={buffChickSan}/>}
                title={buffChickSan}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            (activeModal === brocChedSoup &&
            <PageModal
                content={<Article name={brocChedSoup}/>}
                title={brocChedSoup}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            ''
        )
    }, [activeModal])

    return (
        <div>
            {modalContent}
            <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles improveSleep={improveSleep} howMuchWater={howMuchWater} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Recipes" moreLabel="View More" content={<Recipes brocChedSoup={brocChedSoup} buffChickSan={buffChickSan} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Workouts" moreLabel="View More" content={<Workouts brocChedSoup={brocChedSoup} buffChickSan={buffChickSan} setActiveModal={setActiveModal}/>}/>
        </div>
    )
}

export default Learn
