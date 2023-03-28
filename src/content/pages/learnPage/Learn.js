import React from 'react';
import { Header } from 'semantic-ui-react'
import PageItem from '../../PageItem';

const HealthArticles = () => {
  return (
    <div>
    <div style={{ border: '1px solid black', padding: '10px', width: '200px', marginRight: '5px'}}>
        <p style={{ fontSize: '16px' }}>How to improve your sleep tonight!</p>
        <img src="https://www.patientfirst.com/Portals/0/LiveBlog/549/Patient-First-Better-Sleep.jpg?ver=8roOpZrVcGmaPoSjUotFzQ%3d%3d" alt="article 1" style={{ width: '150px', height: '100px'}}/>
      </div>
      <div style={{ border: '1px solid black', padding: '10px', width: '200px', marginLeft: '5px' }}>
        <p style={{ fontSize: '16px' }}>How much water should you drink?</p>
        <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg" alt="article 1" style={{ width: '150px', height: '100px'}}/>
      </div>
    </div>
  )
}
  
const Learn = () => {
  return (
    <div>
        <Header>Learn</Header>
        <PageItem title="Health Articles" moreLabel="View More" content={<HealthArticles/>}/>
    </div>    
  );
};
  
export default Learn;