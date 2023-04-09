import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageCard from '../../PageCard'
import PageModal from '../../PageModal'

const ArticleButton = ({ onClick }) => {
    return (<Button fluid onClick={onClick}>Open Article</Button>)
}

const Article = ({ name }) => {
    return (
        <>
            {name}
        </>
    )
}

const HealthArticles = ({ setActiveModal, improveSleep, howMuchAlc }) => {
    return (
        <div>
            <PageCard
                title="How to improve your sleep"
                imageSrc="https://www.patientfirst.com/Portals/0/LiveBlog/549/Patient-First-Better-Sleep.jpg?ver=8roOpZrVcGmaPoSjUotFzQ%3d%3d"
                description={<ArticleButton onClick={() => setActiveModal(improveSleep)}/>}
            />
            <PageCard
                title="How much alcohol should you drink?"
                imageSrc="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg"
                description={<ArticleButton onClick={() => setActiveModal(howMuchAlc)}/>}
            />
        </div>
    )
}
const Recipes = ({ setActiveModal, buffChickSan, brocChedSoup }) => {
    return (
        <div>
            <PageCard
                title="Buffalo Chicken Sandwich"
                imageSrc="https://embed.widencdn.net/img/mccormick/6hvkqaid2w/840x840px/Frank%E2%80%99s%20Grilled%20Buffalo%20Chicken%20Sandwich-7705.jpg?crop=true&q=80&u=o2hyef"
                description={<ArticleButton onClick={() => setActiveModal(buffChickSan)}/>}
            />
            <PageCard
                title="Brocolli Cheddar Soup Dumplings"
                imageSrc="https://www.halfbakedharvest.com/wp-content/uploads/2020/09/One-Pot-Broccoli-Cheddar-and-Dumplings-1.jpg"
                description={<ArticleButton onClick={() => setActiveModal(brocChedSoup)}/>}
            />
        </div>
    )
}

const Learn = () => {
    const [activeModal, setActiveModal] = useState('')
    const [modalContent, setModalContent] = useState('')

    const improveSleep = 'How to improve your sleep'
    const howMuchAlc = 'How much alcohol should you drink'
    const buffChickSan = 'Buffalo Chicken Sandwich'
    const brocChedSoup = 'Broccoli Cheddar Soup Dumplings'

    useEffect(() => {
        setModalContent(
            (activeModal === improveSleep &&
            <PageModal
                content={<Article name={improveSleep}/>}
                title={activeModal}
                open={true}
                setClosed={() => setActiveModal('')}
                submitText={'Done'}
                submitAction={() => setActiveModal('')}/>) ||
            (activeModal === howMuchAlc &&
            <PageModal
                content={<Article name={howMuchAlc}/>}
                title={howMuchAlc}
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
            <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles improveSleep={improveSleep} howMuchAlc={howMuchAlc} setActiveModal={setActiveModal}/>}/>
            <PageItem title="Recipes" moreLabel="View More" content={<Recipes brocChedSoup={brocChedSoup} buffChickSan={buffChickSan} setActiveModal={setActiveModal}/>}/>
        </div>
    )
}

export default Learn
