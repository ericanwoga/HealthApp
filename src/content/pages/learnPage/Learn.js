import React from 'react'
import { Header } from 'semantic-ui-react'
import PageItem from '../../PageItem'
import PageCard from '../../PageCard'

const HealthArticles = () => {
    return (
        <div>
            <div style={{ border: '1px solid black', width: '490px', height: '300px' }}>
                <p style={{ fontSize: '30px' }}>How to improve your sleep tonight!</p>
                <a>
                    <img src="https://www.patientfirst.com/Portals/0/LiveBlog/549/Patient-First-Better-Sleep.jpg?ver=8roOpZrVcGmaPoSjUotFzQ%3d%3d" alt="article 1" style={{ width: '300px', height: '200px' }}/>
                </a>
            </div>
            <div style={{ border: '1px solid black', width: '490px', height: '300px' }}>
                <p style={{ fontSize: '30px' }}>How much water should you drink?</p>
                <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg" alt="article 1" style={{ width: '300px', height: '200px' }}/>
            </div>
        </div>
    )
}
const Recipes = () => {
    return (
        <div>
            <div style={{ border: '1px solid black', width: '490px', height: '300px' }}>
                <p style={{ fontSize: '30px' }}>Buffalo Chicken Sandwich</p>
                <img src="https://embed.widencdn.net/img/mccormick/6hvkqaid2w/840x840px/Frank%E2%80%99s%20Grilled%20Buffalo%20Chicken%20Sandwich-7705.jpg?crop=true&q=80&u=o2hyef" alt="article 1" style={{ width: '300px', height: '200px' }}/>
            </div>
            <div style={{ border: '1px solid black', width: '490px', height: '300px' }}>
                <p style={{ fontSize: '30px' }}>Broccoli Cheddar Dumpling Soup</p>
                <img src="https://www.halfbakedharvest.com/wp-content/uploads/2020/09/One-Pot-Broccoli-Cheddar-and-Dumplings-1.jpg" alt="article 1" style={{ width: '300px', height: '200px' }}/>
            </div>
        </div>
    )
}

const Learn = () => {
    return (
        <div>
            <Header size='large' >Learn</Header>
            <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles/>}/>
            <PageItem title="Recipes" moreLabel="View More" content={<Recipes/>}/>
            <PageCard
                title="My Article Title"
                imageSrc="https://www.patientfirst.com/Portals/0/LiveBlog/549/Patient-First-Better-Sleep.jpg?ver=8roOpZrVcGmaPoSjUotFzQ%3d%3d"
                description="fcg"
                link="#"
            />
        </div>
    )
}

export default Learn
