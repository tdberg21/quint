import React from 'react';
import './ShortBioContainer.css';
import { bioData } from '../../bioData.js';
import { Link } from 'react-router-dom';

const ShortBioContainer = () => {
  const dataToDisplay = bioData.map((bio, index) => {
    return (
    <div className='short-bio' key={index}>
      <img 
        src={bio.source} 
        alt={bio.name} 
        className='short-bio-image'
      />
      <h4>{bio.name}</h4>
      <Link to={`/bios/${bio.lastName}`}>
      <button className='full-bio-button'>Click to View Full Bio</button>
      </Link>
    </div>
    )  
  })
  return (
    <div className='shortbio-container'>
      {dataToDisplay}
    </div>
  )
};

export default ShortBioContainer;