import React from 'react';
import './ShortBioContainer.css';
import { bioData } from '../../bioData.js';

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
      <button className='full-bio-button'>Click to View Full Bio</button>
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