import React from 'react';
import data from '../data.json';
import Card from './Card';

const Portfolio = () => {

  return (
    <div className='portfolio-container'>
        <h1 className='portfolio-title'> Projects</h1>
        <div className='cards-container'>
        {data.map(item => 
            <Card
                key={item.id}
                image={item.imgSRC}
                name={item.name}
                techniques={item.techniques}
                link={item.link} 
            />
        )}
        </div>
    </div>
  )
}

export default Portfolio;