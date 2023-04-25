import React from 'react';

const Card = ( {image, techniques, name, link} ) => { 
    const basePath = "./images/";

    return (
        <div className='card'>
            <img className="card-image" src={`${basePath}${image}`} alt={name}/>
            <div className='techniques'>
                {techniques.map((technique) =>
                    <p key={technique}className={`techniques-${technique.toLowerCase()}`}>{technique}</p>)
                }
            </div>
            <h2 className='project-name'>{name}</h2>
            <a href={link} target="_blank" rel="noreferrer">
                <button className='start-btn'>START</button>
            </a>
        </div>
    )
}

export default Card;